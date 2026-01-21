import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default async function HeroSocialLinks({ lang,labeled=true }: { lang: Lang,labeled?:boolean }) {
  const dict = (await getDictionary(lang)).homePage.heroSection.social;
  const links = [
    {
      icon: <FaGithub className="w-4 h-4" />,
      href: "https://github.com/JafMah97",
      label: dict.github,
      color: "from-gray-900 to-gray-700",
    },
    {
      icon: <FaLinkedin className="w-4 h-4" />,
      href: "https://www.linkedin.com/in/jafmah97/",
      label: dict.linkedIn,
      color: "from-blue-700 to-blue-900",
    },
    {
      icon: <FaXTwitter className="w-4 h-4" />,
      href: "https://twitter.com/JafMah97",
      label: dict.x,
      color: "from-sky-500 to-sky-700",
    },
    {
      icon: <MdEmail className="w-4 h-4" />,
      href: "mailto:jafmah9@gmail.com",
      label: dict.email,
      color: "from-red-600 to-red-800",
    },
  ];

  return (
    <MotionWrapper
      fadeUp
      delay={0.5}
      className="flex items-center justify-center md:justify-start gap-6"
    >
      <div className="flex gap-4">
        {links.map((social, index) => (
          <MotionWrapper
            key={index}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              prefetch={false}
              href={social.href}
              target="_blank"
              className="relative group "
              aria-label={social.label}
            >
              <div className="relative w-8 h-8 rounded-full bg-primary backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center group-hover:border-transparent transition-colors">
                <div className=" text-gray-300 group-hover:text-white transition-colors">
                  {social.icon}
                </div>
              </div>
              {labeled && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="px-2 py-1 text-xs bg-gray-900 text-white rounded whitespace-nowrap">
                    {social.label}
                  </div>
                </div>
              )}
            </Link>
          </MotionWrapper>
        ))}
      </div>
    </MotionWrapper>
  );
}
