"use client";

import React from 'react';

interface Block {
    type: string;
    data: Record<string, any>;
}

function renderBlock(block: Block): JSX.Element {
    console.log("Rendering block:", block);
    switch (block.type) {
        case 'header':
            const HeaderTag = `h${block.data.level}` as keyof JSX.IntrinsicElements;
            return <HeaderTag className={`font-bold text-${block.data.level * 2}xl`}>{block.data.text}</HeaderTag>;
        case 'paragraph':
            return (
                <p dangerouslySetInnerHTML={{ __html: block.data.text }} />
            );
        case 'list':
            return (
                <ul>
                    {block.data.items.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        case 'image':
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
            const imageUrl = block.data.file?.url.startsWith("http")
                ? block.data.file.url
                : `${baseUrl}${block.data.file?.url}`;

            return (
                <div className="image-block">
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={block.data.caption || 'Image'}
                            className="max-w-full h-auto border rounded-md shadow-md"
                        />
                    ) : (
                        <p className="text-red-500">Image not available</p>
                    )}
                    {block.data.caption && (
                        <p className="text-center text-sm text-gray-500 italic">
                            {block.data.caption}
                        </p>
                    )}
                </div>
            );
        case 'table':
            return (
                <table className="table-auto border-collapse border border-gray-300 w-full">
                    <tbody>
                        {block.data.content.map((row: string[], rowIndex: number) => (
                            <tr key={rowIndex} className="border border-gray-300">
                                {row.map((cell: string, cellIndex: number) => (
                                    <td key={cellIndex} className="border border-gray-300 p-2">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        case 'quote':
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
        const blocks = (data as any).blocks || [];
        const normalizedBlocks = blocks.map((block: Block) => ({
            ...block,
            type: block.type.toLowerCase(),
        }));

        return <>{normalizedBlocks.map((block: Block, index: number) => <div key={index}>{renderBlock(block)}</div>)}</>;
    } catch (error) {
        console.error('Error rendering Editor.js data:', error);
        return <p>Error rendering content</p>;
    }
};

export default EditorJSRenderer;