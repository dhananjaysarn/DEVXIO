import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);

      setOutput(
        JSON.stringify(parsed, null, 2)
      );

      setError("");
    } catch {
      setError("Invalid JSON");
      setOutput("");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);

      setOutput(
        JSON.stringify(parsed)
      );

      setError("");
    } catch {
      setError("Invalid JSON");
      setOutput("");
    }
  };

  const copyOutput = async () => {
    await navigator.clipboard.writeText(
      output
    );
  };

  return (
    <div className="max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        JSON Formatter
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <textarea
          className="bg-slate-900 p-4 rounded-lg h-96 w-full"
          placeholder="Paste JSON..."
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
        />

        <textarea
          className="bg-slate-900 p-4 rounded-lg h-96 w-full"
          readOnly
          value={output}
        />

      </div>

      <div className="flex gap-4 mt-6">

        <button
          onClick={formatJson}
          className="bg-blue-600 px-5 py-2 rounded"
        >
          Beautify
        </button>

        <button
          onClick={minifyJson}
          className="bg-green-600 px-5 py-2 rounded"
        >
          Minify
        </button>

        <button
          onClick={copyOutput}
          className="bg-purple-600 px-5 py-2 rounded"
        >
          Copy
        </button>

      </div>

      {error && (
        <p className="text-red-500 mt-4">
          {error}
        </p>
      )}

    </div>
  );
}