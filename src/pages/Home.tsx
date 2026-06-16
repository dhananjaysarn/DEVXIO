import ToolCard from "../components/ToolCard";

export default function Home() {
  const tools = [
    {
      title: "JSON Formatter",
      description: "Format and validate JSON",
      path: "/json-formatter",
    },
    {
      title: "QR Generator",
      description: "Generate QR codes",
      path: "/qr-generator",
    },
    {
      title: "Markdown Editor",
      description: "Live markdown preview",
      path: "/markdown-editor",
    },
    {
      title: "Password Generator",
      description: "Generate secure passwords",
      path: "/password-generator",
    },
    {
      title: "Color Palette",
      description: "Create palettes",
      path: "/color-palette",
    },
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">
        DevForge
      </h1>

      <p className="text-slate-400 mb-10">
        Developer productivity toolkit.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            path={tool.path}
          />
        ))}
      </div>
    </div>
  );
}