// pages/consultation.js
"use client";
import { useState } from "react";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Personal Legal Consultation", // Default consultation type
    question: "",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission (you can send this to backend later)
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-5 mt-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Schedule a Legal Consultation
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Get expert advice from professionals or AI-powered assistance for
            your legal concerns. Choose from personal, business, or family law
            consultations.
          </p>
        </div>
      </section>

      {/* Consultation Types Section */}
      <section className="container mx-auto py-10 px-6">
        <h2 className="text-3xl font-semibold mb-6">Consultation Types</h2>
        <ul className="space-y-4">
          <li className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-bold">1. Personal Legal Consultation</h3>
            <p>
              Receive personal legal advice tailored to your specific needs.
              From property disputes to personal injury cases, our experts are
              here to assist you.
            </p>
          </li>
          <li className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-bold">2. Business Consultation</h3>
            <p>
              Whether you need advice on contracts, partnerships, or regulatory
              matters, our legal experts will provide you with business-oriented
              solutions.
            </p>
          </li>
          <li className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-bold">3. Family Law Consultation</h3>
            <p>
              Get support and legal guidance for family-related matters, such as
              divorce, child custody, and domestic violence cases.
            </p>
          </li>
          <li className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-bold">4. Criminal Defense Consultation</h3>
            <p>
              Facing criminal charges? Consult with our defense attorneys to
              explore your legal rights and defenses in criminal matters.
            </p>
          </li>
          <li className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-bold">5. AI-Powered Consultation</h3>
            <p>
              Our AI assistant can provide instant guidance and information on
              various legal matters. Its fast, efficient, and available 24/7.
            </p>
          </li>
        </ul>
      </section>

      {/* Request a Consultation Form */}
      <section className="bg-gray-100 py-10 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Request a Consultation</h2>
          <form
            className="bg-white p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded-lg"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-2 border rounded-lg"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Type of Consultation</label>
              <select
                className="w-full mt-2 p-2 border rounded-lg"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              >
                <option>Personal Legal Consultation</option>
                <option>Business Consultation</option>
                <option>Family Law Consultation</option>
                <option>Criminal Defense Consultation</option>
                <option>AI-Powered Consultation</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Legal Question</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded-lg"
                value={formData.question}
                onChange={(e) =>
                  setFormData({ ...formData, question: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Details</label>
              <textarea
                className="w-full mt-2 p-2 border rounded-lg"
                rows="4"
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-10 px-6">
        <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-bold">How can I schedule a consultation?</summary>
            <p className="text-gray-700 mt-2">
              Simply fill out the consultation form and our team will contact you
              to schedule your session.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-bold">Can I get a free consultation?</summary>
            <p className="text-gray-700 mt-2">
              Yes, we offer free AI-powered consultations. For professional
              consultations, fees may apply based on the type and duration of the
              session.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-bold">What kind of legal issues can be discussed?</summary>
            <p className="text-gray-700 mt-2">
              Our team covers a broad range of topics including personal, family,
              business, and criminal law.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
