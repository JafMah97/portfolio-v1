
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { ReactNode } from "react";
import SkillCardDecoration from "../about-section/skill-card-decoration";

type Contact = {
  icon: ReactNode;
  label: string;
  link: string;
  color: string; // e.g. "from-blue-700 to-blue-900"
  hoverColor: string; // e.g. "hover:from-blue-600 hover:to-blue-800"
  username: string;
};

export default function ContactCard({
  contact,
  delay,
}: {
  contact: Contact;
  delay: number;
}) {
  return (
    <MotionWrapper
      fadeUp
      delay={delay}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group"
    >
      {/* External Glow Effect (same style as SkillCard) */}
      <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-10 group-hover:opacity-30 transition duration-500 animate-pulse-slow" />

      <Card
        
        className={`relative p-6 h-full border-white/20 dark:border-gray-700/30 bg-linear-to-br from-white/90 to-white/60 dark:from-gray-900/90 dark:to-gray-800/60 backdrop-blur-xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden`}
      >
        {/* Decorative background (reuse SkillCardDecoration) */}
        <SkillCardDecoration />

        <CardContent className="p-0 relative z-20 ">
          <Link
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative block rounded-2xl p-4 ${contact.hoverColor} transition-all duration-300 flex items-center w-full flex-col justify-center`}
          >
            {/* Icon container */}
            <div
              className={`relative w-14 h-14 rounded-xl bg-linear-to-br ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <div className="text-white">{contact.icon}</div>
              <div
                className={`absolute inset-0 bg-linear-to-br ${contact.color} rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
              />
            </div>

            {/* Label and username */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {contact.label}
            </h3>
            <p dir="ltr" className="text-sm text-gray-600 dark:text-gray-300 truncate underline text-center">
              {contact.username}
            </p>

            {/* Hover indicator */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 animate-ping" />
            </div>
          </Link>
        </CardContent>
      </Card>
    </MotionWrapper>
  );
}
