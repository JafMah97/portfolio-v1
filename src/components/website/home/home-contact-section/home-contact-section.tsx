import CustomButton from "@/components/custom/layout/custom-button";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import ShinyText from "@/components/custom/motion/text-shine";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import { Mail, Phone, Send, Sparkles } from "lucide-react";
import ContactCard from "./home-contact-card";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default async function HomeContactSection({ lang }: { lang: Lang }) {
  const dict = (await getDictionary(lang)).homePage.contactSection;
  const contacts = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      label: dict.contacts.github,
      link: "https://github.com/JafMah97",
      color: "from-gray-900 to-gray-700",
      hoverColor: "hover:from-gray-800 hover:to-gray-600",
      username: "@JafMah97",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      label: dict.contacts.linkedIn,
      link: "https://www.linkedin.com/in/jafmah97/",
      color: "from-blue-700 to-blue-900",
      hoverColor: "hover:from-blue-600 hover:to-blue-800",
      username: "Jafar Mahmoud",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: dict.contacts.email,
      link: "mailto:jafmah9@gmail.com",
      color: "from-red-600 to-red-800",
      hoverColor: "hover:from-red-500 hover:to-red-700",
      username: "jafmah9@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: dict.contacts.phone,
      link: "tel:+963938497176",
      color: "from-green-600 to-green-800",
      hoverColor: "hover:from-green-500 hover:to-green-700",
      username: "+(963) 938 497 176",
    },
  ];

  return (
    <section className="relative py-24 backdrop-blur-xl bg-primary/10">
      <div className="container max-w-6xl mx-auto px-4">
        <MotionWrapper
          as="h2"
          fadeUp
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
        >
          <ShinyText text={dict.title} />
        </MotionWrapper>

        {/* Description */}
        <MotionWrapper
          fadeUp
          delay={0.2}
          className="max-w-3xl mx-auto text-center text-[16px] md:text-lg text-muted-foreground mb-5 md:mb-16 md:leading-relaxed"
        >
          <p>{dict.description}</p>
        </MotionWrapper>

        <MotionWrapper
          fadeUp
          delay={0.2}
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 "
        >
          {contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))}
        </MotionWrapper>

        <div className="flex justify-center">
          <CustomButton
            href={`/${lang}/contact`}
            iconLeft={<Send className="w-5 h-5" />}
            text={dict.cta}
            iconRight={<Sparkles className="w-5 h-5" />}
          />
        </div>
      </div>
    </section>
  );
}
