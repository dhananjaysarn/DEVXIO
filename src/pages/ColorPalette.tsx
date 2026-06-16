import { useState } from "react";

export default function ColorPalette() {
  const [colors, setColors] = useState<string[]>([]);

  const randomColor = () => {
    return (
      "#" +
      Math.floor(
        Math.random() * 16777215
      )
        .toString(16)
        .padStart(6, "0")
    );
  };

  const generatePalette = () => {
    const palette = Array.from(
      { length: 5 },
      () => randomColor()
    );

    setColors(palette);
  };

  const copyColor = async (
    color: string
  ) => {
    await navigator.clipboard.writeText(
      color
    );
  };

  return (
    <div className="max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Color Palette Generator
      </h1>

      <button
        onClick={generatePalette}
        className="bg-blue-600 px-5 py-2 rounded mb-8"
      >
        Generate Palette
      </button>

      <div className="grid md:grid-cols-5 gap-4">

        {colors.map((color) => (
          <div
            key={color}
            className="rounded-xl overflow-hidden border border-slate-800"
          >
            <div
              className="h-48"
              style={{
                backgroundColor: color,
              }}
            />

            <div className="p-4 bg-slate-900">

              <p className="mb-3">
                {color}
              </p>

              <button
                onClick={() =>
                  copyColor(color)
                }
                className="bg-green-600 px-3 py-1 rounded text-sm"
              >
                Copy
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}