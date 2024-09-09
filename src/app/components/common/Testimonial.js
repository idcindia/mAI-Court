import React from 'react';

const testimonials = [
    {
        name: "Gulshan Kumar",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Absolutely fantastic course! The instructor explained complex topics in a way that's easy to understand. I feel confident applying what I've learned in real-world projects. Highly recommended.",
        rating: 5
    },
    {
        name: "Arya Chaurasia",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        text: "Absolutely fantastic course! The instructor explained complex topics in a way that's easy to understand. I feel confident applying what I've learned in real-world projects. Highly recommended.",
        rating: 5
    },
    {
        name: "AWadesh Kumar",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        text: "Absolutely fantastic course! The instructor explained complex topics in a way that's easy to understand. I feel confident applying what I've learned in real-world projects. Highly recommended.",
        rating: 5
    },
    {
        name: "Md Arman",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        text: "Absolutely fantastic course! The instructor explained complex topics in a way that's easy to understand. I feel confident applying what I've learned in real-world projects. Highly recommended.",
        rating: 5
    }
];

const Testimonial = () => {
    return (
        <div className="bg-white py-10 px-10">
            <h2 className="text-center text-4xl underline font-bold text-yellow-500 mb-6">Testimonials</h2>
            <div className="flex justify-center space-x-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="border border-yellow-400 rounded-md p-6 shadow-lg max-w-sm text-center">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <div className="flex justify-center mb-4">
                            {Array(testimonial.rating).fill(0).map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-yellow-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.967 0 1.371 1.24.588 1.81l-3.97 2.884a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.97-2.884a1 1 0 00-1.176 0l-3.97 2.884c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.04 10.1c-.784-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
