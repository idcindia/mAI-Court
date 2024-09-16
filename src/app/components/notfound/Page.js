import Link from 'next/link';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function ErrorPage() {
  useEffect(() => {
    document.title = 'Page Coming Soon';
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <Head>
        <title>Page Coming Soon</title>
        <meta name="description" content="Professional Coming Soon page for law field" />
      </Head>

      {/* Content Box */}
      <motion.div
        className="max-w-lg text-center bg-white p-10 shadow-lg rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
        <p className="text-lg text-gray-600 mb-6">
          This page is under construction. Stay tuned for more updates.
        </p>

        {/* Return to Home Link */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeInOut' }}
        >
          <Link href="/">
            <a className="text-blue-600 underline text-lg font-medium hover:text-blue-800">
              Return to Home
            </a>
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated Icon */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11H9v5h2V7zm0 6H9v2h2v-2z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>
    </div>
  );
}
