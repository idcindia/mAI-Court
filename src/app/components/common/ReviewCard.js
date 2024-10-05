import { motion } from "framer-motion";

const reviews = [
  {
    name: "Aarav",
    username: "@aarav",
    body: "This product has truly exceeded my expectations. Thank you!",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Diya",
    username: "@diya",
    body: "I am genuinely impressed. It's a fantastic experience.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Vivaan",
    username: "@vivaan",
    body: "A remarkable product! I appreciate the quality.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Saanvi",
    username: "@saanvi",
    body: "Absolutely wonderful! It has made my life easier.",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Reyansh",
    username: "@reyansh",
    body: "This is simply fantastic! Highly recommended.",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Anaya",
    username: "@anaya",
    body: "I couldn't be happier with my purchase. Thank you!",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Kian",
    username: "@kian",
    body: "An exceptional product! I will definitely share my experience.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Nisha",
    username: "@nisha",
    body: "I am truly grateful for this amazing product.",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Arjun",
    username: "@arjun",
    body: "It's been a pleasure using this product. Thank you!",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Pooja",
    username: "@pooja",
    body: "I am very satisfied with my purchase. Excellent quality!",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className="relative w-64 md:w-72 lg:w-80 border-t-0 cursor-pointer overflow-hidden bg-white rounded-xl border p-4 bg-gray-950/[.01] border-gray-700/[.1] hover:bg-gray-900 hover:text-white dark:bg-gray-50/[.10] dark:border-gray-50/[.1] dark:hover:bg-gray-50/[.15]">
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-md font-medium dark:text-gray-600">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-gray-800/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeRew = () => {
  return (
    <div className="relative flex h-[300px] gap-5 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      {/* Left to Right Marquee */}
      <motion.div
        className="flex space-x-8 animate-marquee"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </motion.div>

      {/* Right to Left Marquee */}
      <motion.div
        className="flex space-x-8 animate-marquee-reverse"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </motion.div>

      {/* Gradient Mask */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white opacity-90"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white opacity-90"></div>
    </div>
  );
}

export default MarqueeRew;
