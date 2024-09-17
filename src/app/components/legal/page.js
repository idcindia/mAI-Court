// app/legal/page.js

import { motion } from 'framer-motion';

export default function Legal() {
  const services = [
    {
      title: 'Family Law',
      description:
        'Get assistance with legal issues related to divorce, child custody, and more.',
    },
    {
      title: 'Criminal Defense',
      description: 'Expert representation for criminal cases at affordable rates.',
    },
    {
      title: 'Employment Law',
      description: 'Legal help with workplace disputes, wrongful termination, and contracts.',
    },
    {
      title: 'Property Law',
      description:
        'Solve property disputes, title issues, and other real estate legal matters.',
    },
  ];

  return (
    <div className="container mx-auto py-16">
      {/* Legal Aid Intro Section */}
      <section className="text-center">
        <motion.h1
          className="text-4xl font-bold text-blue-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Legal Services for Everyone
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We offer affordable legal aid services for middle-class and lower-class individuals,
          ensuring you have access to legal representation when you need it most.
        </p>
        <motion.button
          className="mt-8 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Our Legal Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lawyer Profiles Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          Meet Our Lawyers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Lawyer 1 */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/lawyer1.jpg"
              alt="Lawyer 1"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Criminal Law Expert</p>
          </motion.div>

          {/* Lawyer 2 */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/lawyer2.jpg"
              alt="Lawyer 2"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Family Law Specialist</p>
          </motion.div>

          {/* Lawyer 3 */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/lawyer3.jpg"
              alt="Lawyer 3"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Robert Brown</h3>
            <p className="text-gray-600">Employment Law Attorney</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
