import dynamic from 'next/dynamic';

const EditorJSHTML = dynamic(() => import('editorjs-html'), { ssr: false });

let editorJSHTML: any;

if (typeof window !== 'undefined') {
    editorJSHTML = EditorJSHTML();
}

/**
 * Converts Editor.js JSON data to HTML.
 * @param {object} data - The Editor.js JSON data.
 * @returns {string} - The rendered HTML string.
 */
export default function renderEditorJS(data: object): string {
    if (typeof window === 'undefined') {
        throw new Error('editorjs-html must be used on the client side.');
    }
    try {
        return editorJSHTML.parse(data).join('');
    } catch (error) {
        console.error('Error rendering Editor.js data:', error);
        return '<p>Error rendering content</p>';
    }
}