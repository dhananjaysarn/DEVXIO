import { Link } from "react-router-dom";

interface ToolCardProps {
  title: string;
  description: string;
  path: string;
}

export default function ToolCard({
  title,
  description,
  path,
}: ToolCardProps) {
  return (
    <Link
      to={path}
      className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <p className="text-slate-400">
        {description}
      </p>
    </Link>
  );
}