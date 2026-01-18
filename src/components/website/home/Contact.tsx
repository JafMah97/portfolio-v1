"use client";
import CustomButton from "@/components/custom/layout/custom-button";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { TextShiny } from "@/components/custom/motion/text-shine";
import { Lang } from "@/utils/translations/dictionary-utils";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Contact({ lang }: { lang: Lang }) {
  const contacts = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      link: "https://github.com/JafMah97",
      color: "from-gray-900 to-gray-700",
      hoverColor: "hover:from-gray-800 hover:to-gray-600",
      username: "@JafMah97",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/your-profile",
      color: "from-blue-700 to-blue-900",
      hoverColor: "hover:from-blue-600 hover:to-blue-800",
      username: "your-profile",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      link: "mailto:your@email.com",
      color: "from-red-600 to-red-800",
      hoverColor: "hover:from-red-500 hover:to-red-700",
      username: "your@email.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      link: "tel:+123456789",
      color: "from-green-600 to-green-800",
      hoverColor: "hover:from-green-500 hover:to-green-700",
      username: "+123 456 789",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-primary/10">
      {/* Animated Background Elements */}


      {/* linear Blobs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <section className="relative py-24 container max-w-7xl mx-auto px-4">
        {/* Header with Animation */}
        <div className="text-center mb-16">
          <MotionWrapper
            as="h2"
            fadeUp
            className="text-4xl md:text-6xl font-bold  mb-6 text-center"
          >
            <TextShiny text="Let's Connect" />
          </MotionWrapper>

          <MotionWrapper
            fadeUp
            delay={0.1}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Ready to bring your ideas to life? Let&apos;s create something
            amazing together.
          </MotionWrapper>
        </div>

        {/* Contact Cards Grid */}
        <MotionWrapper
          fadeUp
          delay={0.2}
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contacts.map((contact, index) => (
            <MotionWrapper
              key={index}
              fadeUp
              delay={0.3 + index * 0.1}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group "
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-linear-to-r ${contact.color} rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500`}
              />

              {/* Contact Card */}
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block p-6 rounded-2xl bg-primary/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-500 ${contact.hoverColor}`}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500" />

                {/* Icon Container */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-linear-to-br ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{contact.icon}</div>
                  {/* Icon Glow */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${contact.color} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  />
                </div>

                {/* Contact Info */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {contact.label}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                  {contact.username}
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 animate-ping" />
                </div>
              </a>
            </MotionWrapper>
          ))}
        </MotionWrapper>

        {/* CTA Section */}

        <div className="flex justify-center">
          <CustomButton
            href="/contact"
            iconLeft={<Send className="w-5 h-5" />}
            text="Send a Message"
            iconRight={<Sparkles className="w-5 h-5" />}
          /> 
        </div>

      
      </section>
    </div>
  );
}
