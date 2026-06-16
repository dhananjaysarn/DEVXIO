export default function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 rounded-xl p-6">
          <h2 className="text-xl font-bold">
            Tools
          </h2>

          <p className="text-4xl mt-4">
            5
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2 className="text-xl font-bold">
            Saved Items
          </h2>

          <p className="text-4xl mt-4">
            0
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2 className="text-xl font-bold">
            Version
          </h2>

          <p className="text-4xl mt-4">
            1.0
          </p>
        </div>

      </div>
    </div>
  );
}