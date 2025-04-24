// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "Full Stack Developer",
//           from_email: form.email,
//           to_email: "sujata@jsmastery.pro",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className='mt-12 flex flex-col gap-8'
//         >
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Name</span>
//             <input
//               type='text'
//               name='name'
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your email</span>
//             <input
//               type='email'
//               name='email'
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Message</span>
//             <textarea
//               rows={7}
//               name='message'
//               value={form.message}
//               onChange={handleChange}
//               placeholder='What you want to say?'
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>

//           <button
//             type='submit'
//             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");

import React from "react";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";

const Contact = () => {
  const contactItems = [
    {
      icon: <FaEnvelope className="text-white w-5 h-5" />,
      label: "Email",
      value: "jasonyip1020@gmail.com",
      link: "jasonyip1020@gmail.com",
    },
    {
      icon: <FaGithub className="text-white w-5 h-5" />,
      label: "Github",
      value: "KIngCrzy",
      link: "https://github.com/KIngCrzy",
    },
    // {
    //   icon: <FaInstagram className="text-white w-5 h-5" />,
    //   label: "Instagram",
    //   value: "@reckless_zjh",
    //   link: "https://instagram.com/reckless_zjh",
    // },
    {
      icon: <FaLinkedin className="text-white w-5 h-5" />,
      label: "LinkedIn",
      value: "Jason Yip",
      link: "www.linkedin.com/in/jason-yip-26a2622a1",
    },
    // {
    //   icon: <FaMedium className="text-white w-5 h-5" />,
    //   label: "Medium",
    //   value: "@recklyss",
    //   link: "https://medium.com/@recklyss",
    // },
  ];

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 p-10 rounded-2xl w-full max-w-md mx-auto"
      >
        <p className={styles.sectionSubText}>GET IN TOUCH</p>
        <h3 className={`${styles.sectionHeadText} mb-10`}>Contact.</h3>

        <div className="flex flex-col gap-6">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 text-white hover:underline"
            >
              {item.icon}
              <div>
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-sm text-gray-300">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>

  );
};

export default SectionWrapper(Contact, "contact");
