"use client";

import React from "react";

interface Block {
  type: string;
  data: Record<string, any>;
}

interface Props {
  data: unknown;
}

function renderBlock(block: Block): React.ReactElement {
  switch (block.type) {
    case "header": {
      const level = Math.min(Math.max(Number(block.data.level) || 2, 1), 6) as 1 | 2 | 3 | 4 | 5 | 6;
      const Tag = `h${level}` as const;
      const sizeMap: Record<number, string> = { 1: "text-4xl", 2: "text-3xl", 3: "text-2xl", 4: "text-xl", 5: "text-lg", 6: "text-base" };
      return React.createElement(Tag, { className: `font-bold ${sizeMap[level] ?? "text-xl"}` }, block.data.text);
    }
    case "paragraph":
      return <p dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    case "list":
      return (
        <ul className="list-disc ml-6 space-y-1">
          {(block.data.items as string[]).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    case "image": {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
      const rawUrl: string = block.data.file?.url ?? "";
      const imageUrl = rawUrl.startsWith("http") ? rawUrl : `${baseUrl}${rawUrl}`;
      return (
        <div className="image-block">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={block.data.caption || "Image"}
              className="max-w-full h-auto border rounded-md shadow-md"
            />
          ) : (
            <p className="text-red-500">Image not available</p>
          )}
          {block.data.caption && (
            <p className="text-center text-sm text-gray-500 italic">{block.data.caption}</p>
          )}
        </div>
      );
    }
    case "table":
      return (
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <tbody>
            {(block.data.content as string[][]).map((row, rowIndex) => (
              <tr key={rowIndex} className="border border-gray-300">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 p-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
          <p>{block.data.text}</p>
          {block.data.caption && (
            <footer className="text-right text-sm text-gray-500">— {block.data.caption}</footer>
          )}
        </blockquote>
      );
    default:
      return <div>Unsupported block type: {block.type}</div>;
  }
}

const EditorJSRenderer: React.FC<Props> = ({ data }) => {
  try {
    const blocks: Block[] = ((data as any)?.blocks ?? []).map((block: Block) => ({
      ...block,
      type: block.type.toLowerCase(),
    }));
    return (
      <>
        {blocks.map((block, index) => (
          <div key={index}>{renderBlock(block)}</div>
        ))}
      </>
    );
  } catch (error) {
    console.error("Error rendering Editor.js data:", error);
    return <p>Error rendering content</p>;
  }
};

export default EditorJSRenderer;
