import { useState, useEffect } from "react";
import QRCode from "qrcode.react";

export default function QuickAid() {
  const [step, setStep] = useState("landing");
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({
    name: "",
    blood: "",
    allergies: "",
    contact: "",
    medicines: ""
  });

  // Load saved data from localStorage on first render
  useEffect(() => {
    const savedEmail = localStorage.getItem("qa_email");
    const savedForm = localStorage.getItem("qa_form");
    if (savedEmail) setEmail(savedEmail);
    if (savedForm) setForm(JSON.parse(savedForm));
    if (savedEmail) setStep("main");
  }, []);

  // Handle landing page submit
  const handleStart = () => {
    if (!email) return;
    localStorage.setItem("qa_email", email);
    setStep("main");
  };

  // Handle form change
  const updateForm = (e) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    localStorage.setItem("qa_form", JSON.stringify(updated));
  };

  // Handle QR download
  const downloadQR = () => {
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "quickaid-qr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  if (step === "landing") {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="p-8 bg-white rounded-2xl shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">🚀 Welcome to QuickAid</h1>
          <p className="mb-6 text-gray-600">Enter your email to get started.</p>
          <input
            type="email"
            placeholder="you@example.com"
            className="border px-4 py-2 rounded w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleStart}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">QuickAid – Emergency Info</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Form Section */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Fill Your Details</h2>
          <input
            className="border w-full mb-3 p-2 rounded"
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={updateForm}
          />
          <input
            className="border w-full mb-3 p-2 rounded"
            placeholder="Blood Group"
            name="blood"
            value={form.blood}
            onChange={updateForm}
          />
          <input
            className="border w-full mb-3 p-2 rounded"
            placeholder="Allergies (if any)"
            name="allergies"
            value={form.allergies}
            onChange={updateForm}
          />
          <input
            className="border w-full mb-3 p-2 rounded"
            placeholder="Emergency Contact"
            name="contact"
            value={form.contact}
            onChange={updateForm}
          />
          <input
            className="border w-full mb-3 p-2 rounded"
            placeholder="Medicines (if any)"
            name="medicines"
            value={form.medicines}
            onChange={updateForm}
          />
        </div>

        {/* QR Section */}
        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold mb-4">Your Emergency QR</h2>
          <QRCode
            id="qr-gen"
            value={JSON.stringify({ email, ...form })}
            size={200}
          />
          <button
            onClick={downloadQR}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Download QR
          </button>
        </div>
      </div>
    </div>
  );
}
