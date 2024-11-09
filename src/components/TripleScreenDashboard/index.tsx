"use client";

import React from "react";
import { motion } from "framer-motion";
import TscLogo from "@/public/icons/tscTextLogo.svg";
import Image from "next/image";
import TrainingImage from "@/public/itTraining.webp";
import ServiceImage from "@/public/itServices.webp";
import HiringImage from "@/public/hiring.jpg";

const TripleScreenDashboard = () => {
  return (
    <div className="sm:h-dvh p-4 flex flex-col gap-2">
      <motion.header
        className="w-full flex items-center h-16 sm:h-20 p-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TscLogo className="w-52 sm:w-60" />
      </motion.header>
      <div className="sm:h-[calc(100dvh-120px)] flex flex-col gap-2">
        <motion.div
          className="sm:h-[40%] flex flex-col justify-center gap-2 rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1
            className="mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Next-gen enterprise software development company
          </motion.h1>
          <motion.p
            className="text-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Build your path to success with our comprehensive IT Courses,
            exposure to live projects and 100% placement assurance. Learn from
            the finest in the field.
          </motion.p>
        </motion.div>
        <div className="sm:h-[60%] grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
          {[
            { href: "/learn", src: TrainingImage, alt: "image of it training" },
            { href: "/tech", src: ServiceImage, alt: "image of it services" },
            { href: "/tech/hiring", src: HiringImage, alt: "image of hiring" },
          ].map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative max-sm:aspect-square hover:z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 0.96 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover rounded-3xl"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripleScreenDashboard;

// import React from "react";
// import TscLogo from "@/public/icons/tscTextLogo.svg";
// import Image from "next/image";
// import TrainingImage from "@/public/itTraining.webp";
// import ServiceImage from "@/public/itServices.webp";
// import HiringImage from "@/public/hiring.jpg";
// import Link from "next/link";

// type Props = {};

// const TripleScreenDashboard = (props: Props) => {
//   return (
//     <div className="sm:h-dvh p-4 flex flex-col gap-2">
//       <header className="w-full flex items-center h-16 sm:h-20 p-0">
//         <TscLogo className="w-52 sm:w-60" />
//       </header>
//       <div className="sm:h-[calc(100dvh-120px)] flex flex-col gap-2">
//         <div className="sm:h-[40%] flex flex-col justify-center gap-2 rounded-3xl">
//           <h1 className="mb-0">
//             Next-gen enterprise software development company
//           </h1>
//           <p className="text-wrap">
//             Build your path to success with our comprehensive IT Courses,
//             exposure to live projects and 100% placement assurance. Learn from
//             the finest in the field.
//           </p>
//         </div>
//         <div className="sm:h-[60%] grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
//           <a href={"/learn"} className="relative max-sm:aspect-square">
//             <Image
//               src={TrainingImage}
//               alt="image of it training"
//               fill
//               className="object-cover rounded-3xl"
//             />
//           </a>
//           <a href={"/tech"} className="relative max-sm:aspect-square">
//             <Image
//               src={ServiceImage}
//               alt="image of it training"
//               fill
//               className="object-cover rounded-3xl"
//             />
//           </a>
//           <a href={"/tech/hiring"} className="relative max-sm:aspect-square">
//             <Image
//               src={HiringImage}
//               alt="image of it training"
//               fill
//               className="object-cover rounded-3xl"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripleScreenDashboard;
