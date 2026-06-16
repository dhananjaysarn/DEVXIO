import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] =
    useState(16);

  const [password, setPassword] =
    useState("");

  const [uppercase, setUppercase] =
    useState(true);

  const [numbers, setNumbers] =
    useState(true);

  const [symbols, setSymbols] =
    useState(true);

  const generatePassword = () => {
    let chars =
      "abcdefghijklmnopqrstuvwxyz";

    if (uppercase)
      chars +=
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numbers)
      chars += "0123456789";

    if (symbols)
      chars +=
        "!@#$%^&*()_+-=[]{}|";

    let result = "";

    for (let i = 0; i < length; i++) {
      result +=
        chars[
          Math.floor(
            Math.random() *
              chars.length
          )
        ];
    }

    setPassword(result);
  };

  const copyPassword = async () => {
    await navigator.clipboard.writeText(
      password
    );
  };

  return (
    <div className="max-w-3xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Password Generator
      </h1>

      <div className="bg-slate-900 rounded-xl p-6">

        <div className="mb-6">

          <label>
            Length: {length}
          </label>

          <input
            type="range"
            min="8"
            max="64"
            value={length}
            onChange={(e) =>
              setLength(
                Number(
                  e.target.value
                )
              )
            }
            className="w-full"
          />

        </div>

        <div className="space-y-3 mb-6">

          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() =>
                setUppercase(
                  !uppercase
                )
              }
            />
            Uppercase
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() =>
                setNumbers(!numbers)
              }
            />
            Numbers
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={symbols}
              onChange={() =>
                setSymbols(!symbols)
              }
            />
            Symbols
          </label>

        </div>

        <button
          onClick={generatePassword}
          className="bg-blue-600 px-5 py-2 rounded"
        >
          Generate
        </button>

        {password && (
          <div className="mt-6">

            <div className="bg-slate-800 p-4 rounded break-all">
              {password}
            </div>

            <button
              onClick={copyPassword}
              className="bg-green-600 px-4 py-2 rounded mt-4"
            >
              Copy Password
            </button>

          </div>
        )}

      </div>

    </div>
  );
}