"use client"
import { useState } from "react";

const LegalAdvice = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Hero Section */}
      <section className="bg-yellow-600 text-white py-5 mt-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Get Professional Legal Advice</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Receive expert legal advice from professionals or through our AI-based assistance. Navigate your legal questions with confidence.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto py-10 px-6">
        <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
        <ul className="space-y-4">
          <li className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-bold">1. Submit Your Query</h3>
            <p>Fill out the form below with your legal question, and our AI or an expert will get back to you.</p>
          </li>
          <li className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-bold">2. Get AI-Driven Answers</h3>
            <p>Our AI will provide instant legal advice based on your question, offering you the first steps to resolve your issue.</p>
          </li>
          <li className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-bold">3. Connect with a Legal Expert</h3>
            <p>If the AI-driven advice doesn’t meet your needs, you can connect directly with one of our legal professionals for personalized guidance.</p>
          </li>
        </ul>
      </section>

      {/* Request Legal Advice Form */}
      <section className="bg-gray-100 py-10 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Request Legal Advice</h2>
          <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded-lg"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-2 border rounded-lg"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Legal Question</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded-lg"
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Details</label>
              <textarea
                className="w-full mt-2 p-2 border rounded-lg"
                rows="4"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Popular Legal Topics Section */}
      <section className="container mx-auto py-10 px-6">
        <h2 className="text-3xl font-semibold mb-6">Popular Legal Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-bold">Divorce & Family Law</h3>
            <p>Find answers to common questions on divorce, child custody, and more.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-bold">Criminal Law</h3>
            <p>Get guidance on criminal defense, arrest procedures, and your rights.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-bold">Employment Law</h3>
            <p>Understand your rights in the workplace, including wrongful termination and discrimination.</p>
          </div>
          {/* Add more topics as needed */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-10 px-6">
        <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-bold">Can I get free legal advice?</summary>
            <p className="text-gray-700 mt-2">Yes, our AI-based advice is free, and we offer free consultations with our legal experts.</p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-bold">How soon will I get a response?</summary>
            <p className="text-gray-700 mt-2">You can get immediate advice through our AI. For expert advice, response times may vary but typically within 24 hours.</p>
          </details>
        </div>
      </section>

      {/* Live Chat with Experts Section */}
      <section className="bg-gray-100 py-10 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Connect with a Legal Expert</h2>
          <p className="mb-4">Need more personalized advice? Chat with one of our available legal professionals.</p>
          <button className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700">
            Start Live Chat
          </button>
        </div>
      </section>
    </div>
  );
};

export default LegalAdvice;
