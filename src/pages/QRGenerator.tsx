import { useState } from "react";
import QRCode from "qrcode";

export default function QRGenerator() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const generateQR = async () => {
    if (!text.trim()) return;

    try {
      const url = await QRCode.toDataURL(text);

      setQrUrl(url);
    } catch (error) {
      console.error(error);
    }
  };

  const downloadQR = () => {
    if (!qrUrl) return;

    const link =
      document.createElement("a");

    link.href = qrUrl;
    link.download = "qrcode.png";

    link.click();
  };

  return (
    <div className="max-w-3xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        QR Generator
      </h1>

      <div className="bg-slate-900 rounded-xl p-6">

        <input
          type="text"
          placeholder="Enter URL or text..."
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          className="w-full p-3 rounded bg-slate-800 mb-4"
        />

        <button
          onClick={generateQR}
          className="bg-blue-600 px-5 py-2 rounded"
        >
          Generate QR
        </button>

        {qrUrl && (
          <div className="mt-8 flex flex-col items-center">

            <img
              src={qrUrl}
              alt="QR Code"
              className="w-64 h-64"
            />

            <button
              onClick={downloadQR}
              className="bg-green-600 px-5 py-2 rounded mt-4"
            >
              Download PNG
            </button>

          </div>
        )}

      </div>

    </div>
  );
}