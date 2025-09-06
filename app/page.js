"use client"

import { useState , useEffect } from "react";
import { ChevronRight, Shield, Zap, QrCode, Heart, Phone, Clock, Award } from "lucide-react";
import QRCode from "qrcode";

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            QuickAid
          </span>
        </div>
        <button
          onClick={onGetStarted}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Get Started Free
        </button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Emergency Info at
            <br />
            Your Fingertips
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Create a QR code with your critical medical information. When every second counts, 
            first responders get instant access to what they need to save your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center space-x-2"
            >
              <span>Create Your QR Code</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-48 h-48 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl mx-auto flex items-center justify-center">
              <QrCode className="w-24 h-24 text-blue-600" />
            </div>
            <p className="mt-4 text-sm text-gray-600">Scan for Emergency Info</p>
          </div>
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose QuickAid?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed for emergencies, trusted by professionals, loved by families
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Instant Access</h3>
              <p className="text-gray-600 leading-relaxed">
                No apps to download. First responders scan your QR code and instantly see 
                your medical information, allergies, and emergency contacts.
              </p>
            </div>

            <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Privacy Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Your data stays with you. We don't store your medical information on our servers. 
                Everything is encoded directly in your QR code.
              </p>
            </div>

            <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Always Available</h3>
              <p className="text-gray-600 leading-relaxed">
                Works even when your phone is locked or broken. Print it, stick it on your phone, 
                or keep it in your wallet. Always accessible when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to potentially save your life</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Fill Your Info</h3>
                <p className="text-gray-600">Enter your medical details, allergies, medications, and emergency contacts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Generate QR Code</h3>
                <p className="text-gray-600">Your information is instantly converted into a secure QR code</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Save & Share</h3>
                <p className="text-gray-600">Download and keep it accessible for emergency situations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">QR Codes Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">First Responder Adoption</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2"> 30s</div>
              <div className="text-gray-600">Average Setup Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-gray-600">Always Accessible</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Emergency QR Code?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands who have taken control of their emergency preparedness. 
            It's free, takes less than a minute, and could save your life.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 inline-flex items-center space-x-2"
          >
            <span>Get Started Now</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">QuickAid</span>
              </div>
              <p className="text-gray-400">
                Emergency information when it matters most
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>How it Works</li>
                <li>Privacy</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Guidelines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 QuickAid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const QuickAidApp = ({ onBackToLanding }) => {
  const [form, setForm] = useState({
    name: "",
    blood: "",
    allergies: "",
    contact: "",
    medicines: ""
  });

  const updateForm = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // QR generation function inside the component
  const generateQRCode = async (data) => {
    const canvas = document.getElementById("qr-gen");
    if (!canvas) return;
    try {
      await QRCode.toCanvas(canvas, data, {
        width: 200,
        margin: 2,
        color: { dark: "#000000", light: "#ffffff" },
        errorCorrectionLevel: "H"
      });
    } catch (err) {
      console.error("Failed to generate QR code:", err);
    }
  };

  // Update QR whenever form changes
  useEffect(() => {
    generateQRCode(JSON.stringify(form));
  }, [form]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center bg-white shadow-sm">
        <button
          onClick={onBackToLanding}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span>Back to Home</span>
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            QuickAid
          </span>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Create Your Emergency QR Code
          </h1>
          <p className="text-lg text-gray-600">
            Fill in your details below and get your personalized emergency QR code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-blue-600" />
              Your Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                  name="name"
                  value={form.name}
                  onChange={updateForm}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="e.g., O+, A-, B+"
                  name="blood"
                  value={form.blood}
                  onChange={updateForm}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="List any known allergies"
                  name="allergies"
                  value={form.allergies}
                  onChange={updateForm}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Name and phone number"
                  name="contact"
                  value={form.contact}
                  onChange={updateForm}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Medications</label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="List current medications"
                  name="medicines"
                  value={form.medicines}
                  onChange={updateForm}
                />
              </div>
            </div>
          </div>

          {/* QR Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <QrCode className="w-6 h-6 mr-2 text-purple-600" />
              Your QR Code
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl mb-6">
              <canvas
                id="qr-gen"
                width="200"
                height="200"
                className="qr-canvas"
                style={{ imageRendering: 'pixelated', width: '200px', height: '200px' }}
              />
            </div>
            
            <p className="text-sm text-gray-600 text-center mb-6 max-w-sm">
              This QR code contains all your emergency information. First responders can scan it to access your details instantly.
            </p>
            
            <button
              onClick={downloadQR}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Download QR Code</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-sm text-yellow-800 text-center">
                💡 <strong>Tip:</strong> Print this QR code and keep it in your wallet, or save it as your phone's lock screen wallpaper
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function QuickAid() {
  const [currentPage, setCurrentPage] = useState("landing");

  if (currentPage === "landing") {
    return <LandingPage onGetStarted={() => setCurrentPage("app")} />;
  }

  return <QuickAidApp onBackToLanding={() => setCurrentPage("landing")} />;
}