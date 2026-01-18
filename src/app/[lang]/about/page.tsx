"use client";
import React from "react";
import { 
  FaCode, 
  FaLaptopCode, 
  FaTools, 
  FaRocket,
  FaBrain,
  FaLightbulb,
  FaPalette,
  FaDatabase,
  FaCloud,
  FaServer,
  FaUserTie,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaGlobeAmericas,
  FaCogs,
  FaLayerGroup
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Sparkles, Target, Zap, Users, TrendingUp } from "lucide-react";
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 },
};

export const cardHoverSmall = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300 },
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

export const slideInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export const slideInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
}; 

function AboutPage() {
  const skills = [
    {
      icon: <FaCode className="h-8 w-8" />,
      title: "Front-End Mastery",
      items: ["React / Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Framer Motion"],
      color: "from-blue-500 to-cyan-500",
      linear: "bg-linear-to-r from-blue-500 to-cyan-500"
    },
    {
      icon: <FaLaptopCode className="h-8 w-8" />,
      title: "Back-End Expertise",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
      color: "from-purple-500 to-pink-500",
      linear: "bg-linear-to-r from-purple-500 to-pink-500"
    },
    {
      icon: <FaTools className="h-8 w-8" />,
      title: "DevOps & Tools",
      items: ["Git / GitHub", "Docker", "AWS", "CI/CD", "Vercel"],
      color: "from-green-500 to-emerald-500",
      linear: "bg-linear-to-r from-green-500 to-emerald-500"
    },
    {
      icon: <FaPalette className="h-8 w-8" />,
      title: "UI/UX Design",
      items: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
      color: "from-orange-500 to-red-500",
      linear: "bg-linear-to-r from-orange-500 to-red-500"
    },
    {
      icon: <FaCloud className="h-8 w-8" />,
      title: "Cloud & Infrastructure",
      items: ["AWS EC2/S3", "Vercel", "Netlify", "Cloudflare", "Serverless"],
      color: "from-indigo-500 to-blue-500",
      linear: "bg-linear-to-r from-indigo-500 to-blue-500"
    },
    {
      icon: <FaCogs className="h-8 w-8" />,
      title: "Methodologies",
      items: ["Agile/Scrum", "TDD", "Clean Code", "Microservices", "REST APIs"],
      color: "from-yellow-500 to-amber-500",
      linear: "bg-linear-to-r from-yellow-500 to-amber-500"
    }
  ];

  const experiences = [
    {
      title: "Senior Front-End Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise React applications and mentoring junior developers",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Reduced deployment time by 50% with CI/CD pipelines",
        "Mentored 5 junior developers to senior level"
      ],
      icon: <FaRocket />
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2020 - 2022",
      description: "Developed full-stack applications using Next.js and Node.js",
      achievements: [
        "Built 15+ production applications",
        "Implemented microservices architecture",
        "Achieved 99.9% uptime"
      ],
      icon: <FaLayerGroup />
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description: "Started career building responsive websites and learning modern frameworks",
      achievements: [
        "First to implement TypeScript in company projects",
        "Reduced page load time by 60%",
        "Received 'Rookie of the Year' award"
      ],
      icon: <FaUserTie />
    }
  ];

  return (
    <div className="relative overflow-hidden bg-primary/10">
      {/* Background Elements */}
      

      <div className="container max-w-7xl mx-auto px-4 py-24 relative">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">About Me</span>
          </div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-pink-600"
          >
            The Developer Behind
            <span className="block">The Code</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            I transform complex problems into <span className="font-semibold text-blue-600 dark:text-blue-400">elegant solutions</span> through code. With a background in engineering and a passion for technology, I bridge the gap between <span className="font-semibold text-purple-600 dark:text-purple-400">creativity</span> and <span className="font-semibold text-green-600 dark:text-green-400">functionality</span>.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
          >
            {[
              { label: "Projects", value: "50+", icon: <FaRocket />, color: "text-blue-600" },
              { label: "Experience", value: "4+ Years", icon: <FaBriefcase />, color: "text-purple-600" },
              { label: "Technologies", value: "20+", icon: <FaTools />, color: "text-green-600" },
              { label: "Certifications", value: "8", icon: <FaAward />, color: "text-pink-600" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <div className={`text-3xl mb-2 ${stat.color}`}>{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-linear-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-700/40 backdrop-blur-xl p-8 md:p-12 border border-white/30 dark:border-gray-600/30">
              <Sparkles className="absolute -top-3 -left-3 w-6 h-6 text-yellow-500" />
              <Target className="absolute -top-3 -right-3 w-6 h-6 text-blue-500" />
              <Zap className="absolute -bottom-3 -left-3 w-6 h-6 text-purple-500" />
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">My Development Philosophy</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-linear-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800">
                  <FaBrain className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Problem-First Approach</h3>
                  <p className="text-gray-600 dark:text-gray-300">Understanding the problem completely before writing a single line of code ensures efficient solutions.</p>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-linear-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800">
                  <FaLightbulb className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Innovative Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300">Leveraging cutting-edge technologies to create forward-thinking, scalable applications.</p>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-linear-to-b from-green-50 to-white dark:from-green-900/20 dark:to-gray-800">
                  <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Continuous Growth</h3>
                  <p className="text-gray-600 dark:text-gray-300">Always learning and adapting to new technologies and methodologies in the fast-paced tech world.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="section-title mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600">Technical</span> Arsenal
          </h2>
          
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                {/* Card Glow */}
                <div className={`absolute -inset-0.5 ${skill.linear} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
                
                {/* Card */}
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-700 h-full transition-all duration-300 group-hover:border-transparent">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {skill.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {skill.title}
                  </h3>
                  
                  {/* Skills List */}
                  <ul className="space-y-3">
                    {skill.items.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        <div className={`w-2 h-2 rounded-full ${skill.linear}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover Indicator */}
                  <div className={`absolute bottom-4 right-4 w-8 h-8 rounded-full ${skill.linear} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                    <FaGlobeAmericas className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="section-title mb-12 text-center">
            Career <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-pink-600">Journey</span>
          </h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500" />
            
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`relative mb-12 ${idx % 2 === 0 ? 'pr-12 md:pr-1/2' : 'pl-12 md:pl-1/2'}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-6 ${idx % 2 === 0 ? '-right-9' : '-left-9'} w-8 h-8 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center z-10`}>
                  <div className="text-white">
                    {exp.icon}
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-500 to-purple-500 mt-2" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="section-title mb-12 text-center">
            Academic <span className="bg-clip-text text-transparent bg-linear-to-r from-green-600 to-emerald-600">Background</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-linear-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-700/70 backdrop-blur-xl p-8 border border-white/30 dark:border-gray-600/30 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-linear-to-r from-green-500/10 to-emerald-500/10 rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-linear-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="w-10 h-10 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Bachelor of Technology in Mechatronics Engineering
                    </h3>
                    <p className="text-lg text-green-600 dark:text-green-400 font-semibold mb-2">
                      Latakia University • 2015 - 2021
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-linear-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 text-sm">
                        Graduated with Honors
                      </span>
                      <span className="px-3 py-1 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-sm">
                        Focus on Automation
                      </span>
                      <span className="px-3 py-1 rounded-full bg-linear-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 text-sm">
                        Software Specialization
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    My engineering background provided a unique problem-solving mindset, combining analytical thinking with creative solutions. The curriculum emphasized systems thinking, automation, and programming—skills that directly translate to software development. I excelled in software-related courses, mastering C++, Python, and embedded systems, which laid the foundation for my transition into full-stack web development.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {["Systems Thinking", "Problem Solving", "Algorithm Design", "Project Management"].map((skill, idx) => (
                      <div key={idx} className="text-center p-3 rounded-xl bg-white/50 dark:bg-gray-800/50">
                        <div className="text-green-600 dark:text-green-400 font-semibold">{skill}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Build Something Amazing Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Let&apos;s combine your vision with my technical expertise to create something extraordinary.
            </p>
            <button className="px-8 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start a Conversation
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default AboutPage;