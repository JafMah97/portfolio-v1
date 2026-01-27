// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { FaEnvelope, FaPhone } from "react-icons/fa";
// import { FaLocationCrosshairs } from "react-icons/fa6";
// import MotionWrapper from "@/components/custom/motion/motion-wrapper";
// import CustomButton from "@/components/custom/layout/custom-button";
// import { Send, Sparkles } from "lucide-react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   type FormStatus = "idle" | "loading" | "success" | "error";
//   const [formStatus, setFormStatus] = useState<FormStatus>("idle");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormStatus("loading");

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) throw new Error("Failed to send message.");

//       setFormStatus("success");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error(error);
//       setFormStatus("error");
//     }
//   };

//   return (
//     <section className="py-24 container max-w-7xl mx-auto px-4">
//       {/* Title */}
//       <MotionWrapper
//         fadeUp
//         as="h1"
//         className="text-5xl md:text-6xl font-bold text-center mb-6"
//       >
//         Contact Me
//       </MotionWrapper>

//       <MotionWrapper
//         fadeUp
//         delay={0.2}
//         as="p"
//         className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg"
//       >
//         I’m always open to new projects, collaborations, or just a friendly
//         chat.
//       </MotionWrapper>

//       {/* Grid */}
//       <MotionWrapper
//         fadeUp
//         stagger={0.15}
//         className="grid grid-cols-1 md:grid-cols-2 gap-12"
//       >
//         {/* Contact Info */}
//         <MotionWrapper fadeUp className="space-y-10">
//           <h2 className="text-3xl font-semibold">Get In Touch</h2>

//           <p className="text-muted-foreground max-w-md">
//             Whether you have a question, a project idea, or just want to say
//             hello — feel free to reach out.
//           </p>

//           <div className="space-y-6">
//             {/* Email */}
//             <div className="flex items-center gap-4">
//               <FaEnvelope className="w-6 h-6 text-primary" />
//               <div>
//                 <h3 className="font-semibold">Email</h3>
//                 <Link
//                   href="mailto:hello@gmail.com"
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   hello@gmail.com
//                 </Link>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center gap-4">
//               <FaPhone className="w-6 h-6 text-primary" />
//               <div>
//                 <h3 className="font-semibold">Phone</h3>
//                 <Link
//                   href="tel:+1232342828"
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   +123‑234‑2828
//                 </Link>
//               </div>
//             </div>

//             {/* Location */}
//             <div className="flex items-center gap-4">
//               <FaLocationCrosshairs className="w-6 h-6 text-primary" />
//               <div>
//                 <h3 className="font-semibold">Location</h3>
//                 <p className="text-muted-foreground">Latakia, Syria</p>
//               </div>
//             </div>
//           </div>
//         </MotionWrapper>

//         {/* Contact Form */}
//         <MotionWrapper
//           fadeUp
//           className="relative p-8 rounded-2xl bg-white/80 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-xl"
//         >
//           {/* Glow */}
//           <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-20 pointer-events-none" />

//           <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
//             {/* Name */}
//             <div>
//               <label className="block text-sm font-medium mb-2">Name</label>
//               <input
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 name="name"
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary outline-none"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium mb-2">Email</label>
//               <input
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 name="email"
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary outline-none"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-sm font-medium mb-2">Message</label>
//               <textarea
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 name="message"
//                 rows={4}
//                 placeholder="Your Message"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary outline-none"
//               />
//             </div>

//             {/* Submit */}
//             <CustomButton
//               href="#"
//               iconLeft={<Send className="w-5 h-5" />}
//               iconRight={<Sparkles className="w-5 h-5" />}
//               text={
//                 formStatus === "loading"
//                   ? "Sending..."
//                   : formStatus === "success"
//                     ? "Message Sent!"
//                     : "Send Message"
//               }
//               isOutlined={false}
//             />

//             {/* Status Messages */}
//             {formStatus === "success" && (
//               <p className="text-green-500 text-center font-medium">
//                 Message sent successfully!
//               </p>
//             )}
//             {formStatus === "error" && (
//               <p className="text-red-500 text-center font-medium">
//                 Something went wrong. Try again.
//               </p>
//             )}
//           </form>
//         </MotionWrapper>
//       </MotionWrapper>
//     </section>
//   );
// }

export default function page() {
  return (
    <div className="bg-primary/10">
      <div className="container max-w-7xl mx-auto flex justify-center items-center min-h-[80vh]">
        <h1 className="text-4xl md:text-6xl text-center text-foreground font-bold">
          Comming Soon
        </h1>
      </div>
    </div>
  );
}
