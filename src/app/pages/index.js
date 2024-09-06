import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full flex items-center justify-between font-mono text-sm">
        <p className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30">
          Welcome to mAI Court - Your AI-powered Legal Assistant
        </p>
      </div>

      <div className="relative flex place-items-center z-[-1]">
        <Image
          src="/assets/your-logo.svg"
          alt="mAI Court Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:grid-cols-4">
        <a href="/about" className="group rounded-lg border px-5 py-4 hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            About Us<span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
          </h2>
          <p className="text-sm opacity-50">
            Learn more about our mission and vision.
          </p>
        </a>

        <a href="/services" className="group rounded-lg border px-5 py-4 hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            Services<span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
          </h2>
          <p className="text-sm opacity-50">
            Explore the services we offer.
          </p>
        </a>

        <a href="/contact" className="group rounded-lg border px-5 py-4 hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            Contact<span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
          </h2>
          <p className="text-sm opacity-50">
            Get in touch with us.
          </p>
        </a>

        <a href="/faq" className="group rounded-lg border px-5 py-4 hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            FAQ<span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
          </h2>
          <p className="text-sm opacity-50">
            Find answers to common questions.
          </p>
        </a>
      </div>
    </main>
  );
}
