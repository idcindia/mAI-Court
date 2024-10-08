// pages/consultation.js
"use client";
import { useState } from "react";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Initial Consultation",
    question: "",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Assests/rti-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent">
            Schedule a Legal Consultation
          </h1>
          <p className="mt-4 text-xl text-slate-100">
            Get expert advice from professionals or AI-powered assistance for
            your legal concerns. Choose from various legal consultation options.
          </p>
        </div>
      </section>

      {/* Consultation Types Section */}
      <section className="container mx-auto py-10 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Choose Your Consultation Type
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
            <p>
              This consultation allows you to get a quick overview of your legal
              situation, understand the basics, and receive initial advice.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">
              Legal Advice Consultation
            </h3>
            <p>
              Get personalized legal advice for your specific needs. Our
              experts will guide you with in-depth solutions to your legal
              problems.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">
              Mediation and Arbitration Consultation
            </h3>
            <p>
              Resolve disputes amicably through mediation and arbitration
              without having to go to court. Consult our experts for guidance.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">
              Business and Corporate Legal Consultation
            </h3>
            <p>
              Get expert legal advice on contracts, partnerships, and
              compliance to help your business thrive with legally sound
              solutions.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Family Law Consultation</h3>
            <p>
              Consult on family matters such as divorce, child custody, and
              other sensitive legal issues with our experienced family law
              professionals.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Criminal Law Consultation</h3>
            <p>
              If you are facing criminal charges, consult with our defense
              attorneys to explore your legal rights and defenses.
            </p>
          </div>
        </div>
      </section>

      {/* Request a Consultation Form */}
      <section className="bg-gray-100 py-10 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Request a Consultation
          </h2>
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
              <label className="block text-gray-700">
                Type of Consultation
              </label>
              <select
                className="w-full mt-2 p-2 border rounded-lg"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              >
                <option>Initial Consultation</option>
                <option>Legal Advice Consultation</option>
                <option>Mediation and Arbitration Consultation</option>
                <option>Business and Corporate Legal Consultation</option>
                <option>Family Law Consultation</option>
                <option>Criminal Law Consultation</option>
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
        <h2 className="text-3xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-bold">
              How can I schedule a consultation?
            </summary>
            <p className="text-gray-700 mt-2">
              Simply fill out the consultation form and our team will contact
              you to schedule your session.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-bold">
              Can I get a free consultation?
            </summary>
            <p className="text-gray-700 mt-2">
              Yes, we offer free AI-powered consultations. For professional
              consultations, fees may apply based on the type and duration of
              the session.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-bold">
              What kind of legal issues can be discussed?
            </summary>
            <p className="text-gray-700 mt-2">
              Our team covers a broad range of topics including personal,
              family, business, and criminal law.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
