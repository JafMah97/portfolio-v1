// "use client";

// import { useState, useMemo } from "react";
// import MotionWrapper from "@/components/custom/motion/motion-wrapper";
// import ProjectCard from "@/components/website/home/projects-section/project-card";

// import { Lang } from "@/utils/translations/dictionary-utils";
// import { FaCode, FaLayerGroup, FaSearch, FaTimes } from "react-icons/fa";
// import { Sparkles, Zap, TrendingUp } from "lucide-react";

// export default function ProjectsPage({ params }: { params: { lang: Lang } }) {
//   const lang = params.lang;
//   const [searchQuery, setSearchQuery] = useState("");
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

//   // Deterministic "random" particles to prevent hydration mismatch
//   const particles = useMemo(() => {
//     return [...Array(25)].map((_, i) => ({
//       id: i,
//       left: `${(i * 13) % 100}%`,
//       top: `${(i * 7) % 100}%`,
//       delay: `${i * 0.3}s`,
//     }));
//   }, []);

//   const allTechnologies = useMemo(() => {
//     return Array.from(new Set(projects.flatMap((p) => p.technologies)));
//   }, []);

//   const filteredProjects = useMemo(() => {
//     const query = searchQuery.toLowerCase();
//     return projects.filter((project) => {
//       return (
//         !searchQuery ||
//         project.title.toLowerCase().includes(query) ||
//         project.description.toLowerCase().includes(query) ||
//         project.technologies.some((tech) => tech.toLowerCase().includes(query))
//       );
//     });
//   }, [searchQuery]);

//   return (
//     <div className="relative overflow-hidden min-h-screen">
//       {/* Background Gradients */}
//       <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

//       {/* Floating Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {particles.map((p) => (
//           <div
//             key={p.id}
//             className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-slow"
//             style={{ left: p.left, top: p.top, animationDelay: p.delay }}
//           />
//         ))}
//       </div>

//       <section className="relative py-24 container max-w-7xl mx-auto px-4">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <MotionWrapper fadeUp className="inline-flex items-center gap-3 mb-6">
//             <div className="w-12 h-12 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
//               <FaCode className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-lg font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
//               My Work
//             </span>
//           </MotionWrapper>

//           <MotionWrapper
//             as="h1"
//             fadeUp
//             delay={0.1}
//             className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-pink-600"
//           >
//             Project{" "}
//             <span className="relative">
//               Showcase{" "}
//               <Sparkles className="absolute -top-4 -right-6 w-6 h-6 text-yellow-500 animate-pulse" />
//             </span>
//           </MotionWrapper>

//           {/* Dynamic Stats */}
//           <div className="flex flex-wrap justify-center gap-6 mb-12">
//             {[
//               {
//                 label: "Total Projects",
//                 value: projects.length,
//                 icon: <FaLayerGroup />,
//                 color: "text-blue-600",
//               },
//               {
//                 label: "Tech Stack",
//                 value: allTechnologies.length,
//                 icon: <Zap />,
//                 color: "text-pink-600",
//               },
//               {
//                 label: "Status",
//                 value: "Active",
//                 icon: <TrendingUp />,
//                 color: "text-green-600",
//               },
//             ].map((stat, idx) => (
//               <MotionWrapper
//                 key={idx}
//                 scaleIn
//                 delay={0.2 + idx * 0.1}
//                 className="flex flex-col items-center p-5 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700 min-w-36"
//               >
//                 <div className={`text-2xl mb-2 ${stat.color}`}>{stat.icon}</div>
//                 <div className="text-2xl font-bold text-gray-900 dark:text-white">
//                   {stat.value}
//                 </div>
//                 <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//                   {stat.label}
//                 </div>
//               </MotionWrapper>
//             ))}
//           </div>
//         </div>

//         {/* Filter Bar */}
//         <MotionWrapper fadeUp delay={0.4} className="space-y-6 mb-12">
//           <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white/30 dark:bg-gray-800/30 p-4 rounded-2xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm">
//             <div className="relative w-full md:max-w-md">
//               <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search by name, tech, or description..."
//                 value={searchQuery}
//                 className="w-full pl-11 pr-11 py-3 rounded-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-hidden transition-all"
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               {searchQuery && (
//                 <button
//                   onClick={() => setSearchQuery("")}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
//                 >
//                   <FaTimes />
//                 </button>
//               )}
//             </div>

//             <div className="flex p-1 bg-gray-200/50 dark:bg-gray-700/50 rounded-xl">
//               {(["grid", "list"] as const).map((mode) => (
//                 <button
//                   key={mode}
//                   onClick={() => setViewMode(mode)}
//                   className={`px-8 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
//                     viewMode === mode
//                       ? "bg-white dark:bg-gray-600 shadow-md text-blue-600 dark:text-blue-400"
//                       : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//                   }`}
//                 >
//                   {mode}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </MotionWrapper>

//         {/* Grid Display */}
//         <div
//           className={
//             viewMode === "grid"
//               ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//               : "flex flex-col gap-8 max-w-4xl mx-auto"
//           }
//         >
//           {filteredProjects.length > 0 ? (
//             filteredProjects.map((project, idx) => (
//               <ProjectCard
//                 key={project.title}
//                 project={project}
//                 index={idx}
//                 lang={lang}
//               />
//             ))
//           ) : (
//             <div className="col-span-full text-center py-32 bg-white/10 dark:bg-gray-800/10 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700">
//               <div className="mb-4 text-4xl opacity-20 flex justify-center">
//                 <FaSearch />
//               </div>
//               <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
//                 No projects found matching your criteria.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//     </div>
//   );
// }


import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
