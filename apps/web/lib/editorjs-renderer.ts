/**
 * Converts Editor.js JSON data to HTML (client-side only).
 */
export default function renderEditorJS(data: object): string {
  if (typeof window === "undefined") {
    return "";
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const edjsHTML = require("editorjs-html");
    const parser = edjsHTML();
    return parser.parse(data).join("");
  } catch (error) {
    console.error("Error rendering Editor.js data:", error);
    return "<p>Error rendering content</p>";
  }
}
