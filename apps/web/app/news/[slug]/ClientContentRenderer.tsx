"use client";

import EditorJSRenderer from "@/components/EditorJSRenderer";

interface Props {
    content: object;
}

const ClientContentRenderer: React.FC<Props> = ({ content }) => {
    console.log("Content data:", content);
    return <EditorJSRenderer data={content} />;
};

export default ClientContentRenderer;