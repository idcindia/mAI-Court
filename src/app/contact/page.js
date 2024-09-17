import { lazy, Suspense } from 'react';

// Lazy-load icons to improve performance
const ApartmentIcon = lazy(() => import('@mui/icons-material/Apartment'));
const SupportAgentIcon = lazy(() => import('@mui/icons-material/SupportAgent'));
const LegalIcon = lazy(() => import('@mui/icons-material/Gavel'));
const BusinessCenterIcon = lazy(() => import('@mui/icons-material/BusinessCenter'));
const WorkOutlineIcon = lazy(() => import('@mui/icons-material/WorkOutline'));
const AccountBalanceIcon = lazy(() => import('@mui/icons-material/AccountBalance'));
const NewspaperIcon = lazy(() => import('@mui/icons-material/Newspaper'));
const GroupWorkIcon = lazy(() => import('@mui/icons-material/GroupWork'));

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/Assests/law3.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent">Contact Us</h1>
          <p className="mt-4 text-xl text-slate-100">Explore our Services: Discover how mAI Court can assist you with legal aid, educational resources, and more. <br />
            Have questions? Our support team is here to help you 24/7.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Office Information */}
            <div className="lg:w-1/2 bg-gradient-to-r from-[#F09819] to-[#5e3803] text-white p-8 rounded-lg shadow-lg flex flex-col gap-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  <Suspense fallback={<div>Loading...</div>}>
                    <ApartmentIcon className="text-white text-5xl mr-4" />
                  </Suspense> Our Office
                </h2>
                <p className="text-base mb-2">Ashoka Estate Cannaught Place, New Delhi, India</p>
                <p className="text-base mb-2">Phone: +91 77195-58184</p>
                <p className="text-base mb-2">Email: contact@mAICourt.com</p>
                <p className="text-base">24/7 Available</p>
              </div>

              {/* Inquiry Sections */}
              <div className="space-y-6">
                {[
                  { icon: SupportAgentIcon, title: 'Customer Support', text: 'Get in touch for general support or any customer-related queries.' },
                  { icon: LegalIcon, title: 'Legal-Related Queries', text: 'For legal consultations, assistance, or document drafting.' },
                  { icon: BusinessCenterIcon, title: 'Corporate Partnerships', text: 'Interested in corporate partnerships or collaborations?' },
                  { icon: WorkOutlineIcon, title: 'Consultations', text: 'Book consultations with our legal professionals.' },
                  { icon: AccountBalanceIcon, title: 'Government Queries', text: 'For inquiries related to government or legal authorities.' },
                  { icon: NewspaperIcon, title: 'Blogs and Content', text: 'Want to contribute or collaborate on legal blogs?' },
                  { icon: GroupWorkIcon, title: 'mAI Court Platform', text: 'Questions or issues related to mAI Court functionalities and features.' }
                ].map(({ icon: Icon, title, text }, index) => (
                  <div key={index} className="flex flex-row items-center">
                    <Suspense fallback={<div>Loading...</div>}>
                      <Icon className="text-white text-3xl mr-4" />
                    </Suspense>
                    <div>
                      <h3 className="text-xl font-bold">{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-gray-100 ">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#F09819] to-[#5e3803] bg-clip-text text-transparent">Get in Touch</h2>
              <form className="space-y-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-full">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input id="name" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F09819] transition duration-200" />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input id="email" type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F09819] transition duration-200" />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-full">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <div className="flex">
                      <span className="px-4 py-3 border border-gray-300 bg-gray-50 rounded-l-md text-gray-500">+91</span>
                      <input id="phone" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F09819] transition duration-200" />
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input id="subject" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F09819] transition duration-200" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message" rows="6" className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F09819] transition duration-200"></textarea>
                </div>
                <button type="submit" className="px-6 py-3 bg-gradient-to-r from-[#F09819] to-[#5e3803] text-white font-semibold rounded-md hover:bg-[#F09819] transition duration-200">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
