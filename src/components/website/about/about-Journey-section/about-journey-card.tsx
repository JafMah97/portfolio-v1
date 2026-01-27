import MotionWrapper from "@/components/custom/motion/motion-wrapper";

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  icon: React.ReactNode;
}

export default function AboutJourneyCard({
  exp,
  idx,
}: {
  exp: Experience;
  idx: number;
}) {
  return (
    <MotionWrapper
      fadeUp
      delay={idx * 0.15}
      className={`relative mb-12 ${
        idx % 2 === 0 ? "pr-12 md:pr-1/2" : "pl-12 md:pl-1/2"
      }`}
    >
      {/* Timeline Dot */}
      <div
        className={`hidden md:block absolute top-6 ${
          idx % 2 === 0 ? "-right-9" : "-left-9"
        } w-8 h-8 rounded-full bg-linear-to-r from-blue-500 to-purple-500  z-10`}
      >
        <div className="text-white flex justify-center items-center w-full h-full">{exp.icon}</div>
      </div>

      {/* Content Card */}
      <MotionWrapper
        scaleIn
        delay={idx * 0.15 + 0.1}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {exp.title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold">
              {exp.company}
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium text-center">
            {exp.period}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {exp.description}
        </p>

        <ul className="space-y-2">
          {exp.achievements.map((achievement, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-500 to-purple-500 mt-2" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </MotionWrapper>
    </MotionWrapper>
  );
}
