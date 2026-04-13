"use client";

import EditorJSRenderer from "@/components/EditorJSRenderer";

interface Props {
  content: unknown;
}

const ClientContentRenderer: React.FC<Props> = ({ content }) => {
  return <EditorJSRenderer data={content} />;
};

export default ClientContentRenderer;
