import { useState } from "react";
import { marked } from "marked";

export default function MarkdownEditor() {
  const [markdown, setMarkdown] =
    useState(`# DevForge

## Markdown Editor

Type markdown here...

- Item 1
- Item 2

**Bold Text**
`);

  const html =
    marked.parse(markdown) as string;

  const copyMarkdown = async () => {
    await navigator.clipboard.writeText(
      markdown
    );
  };

  const downloadMarkdown = () => {
    const blob = new Blob(
      [markdown],
      {
        type: "text/markdown",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download = "document.md";

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Markdown Editor
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <textarea
          value={markdown}
          onChange={(e) =>
            setMarkdown(
              e.target.value
            )
          }
          className="bg-slate-900 p-4 rounded-lg h-[600px] w-full"
        />

        <div
          className="bg-slate-900 p-6 rounded-lg overflow-auto prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />

      </div>

      <div className="flex gap-4 mt-6">

        <button
          onClick={copyMarkdown}
          className="bg-blue-600 px-5 py-2 rounded"
        >
          Copy Markdown
        </button>

        <button
          onClick={downloadMarkdown}
          className="bg-green-600 px-5 py-2 rounded"
        >
          Download .md
        </button>

      </div>

    </div>
  );
}