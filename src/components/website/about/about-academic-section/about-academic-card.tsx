import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import { FaGraduationCap } from "react-icons/fa";

export default async function AboutAcademicCard({lang}:{lang:Lang}) {
  const dict = (await getDictionary(lang)).aboutPage.academic
  const skills= dict.skills
  return (
    <MotionWrapper
      fadeUp
      className="
        group relative overflow-hidden rounded-3xl 
        bg-linear-to-br from-white/80 to-white/20 
        dark:from-gray-800/80 dark:to-gray-800/20 
        backdrop-blur-xl border border-white/30 dark:border-gray-700/30 
        shadow-lg hover:shadow-2xl transition-all duration-500 
        hover:-translate-y-2
      "
    >
      {/* Glowing animated aura */}
      <div
        className="
          absolute -inset-1 
          bg-linear-to-r from-green-500 via-emerald-500 to-blue-500 
          rounded-3xl blur-xl opacity-20 
          group-hover:opacity-30 transition duration-500 
          group-hover:duration-300 animate-pulse-slow
        "
      />

      {/* Accent line on hover */}
      <div
        className="
          absolute top-0 left-0 w-2 h-full bg-green-500 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 rounded-l-3xl
        "
      />

      <div className="relative z-10 p-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start  items-center md:items-start gap-6 mb-8">
          <div
            className="
              w-20 h-20 rounded-2xl 
              bg-linear-to-r from-green-500 to-emerald-500 
              flex items-center justify-center shrink-0 
              group-hover:scale-110 transition-transform duration-500
            "
          >
            <FaGraduationCap className="w-10 h-10 text-white" />
          </div>

          <div>
            <h3
              className=" text-center
                text-2xl font-bold text-gray-900 dark:text-white mb-2
                group-hover:text-transparent group-hover:bg-clip-text 
                group-hover:bg-linear-to-r group-hover:from-green-600 group-hover:to-emerald-600 
                transition-all duration-300
              "
            >
              {dict.degree.title}
            </h3>

            <p className="text-lg text-green-600 dark:text-green-400 font-semibold mb-2">
              {dict.degree.university}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm">
                {dict.degree.tags.honors}
              </span>

              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm">
                {dict.degree.tags.automation}
              </span>

              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm">
                {dict.degree.tags.software}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div
          className="
            bg-linear-to-r from-green-500/10 to-emerald-500/10 
            rounded-2xl p-6 transition-all duration-500 
            group-hover:bg-linear-to-r group-hover:from-green-500/20 group-hover:to-emerald-500/20
          "
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {dict.description}
          </p>

          {/* Skills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="
                
                  text-center p-3 rounded-xl 
                  bg-white/50 dark:bg-gray-800/50 
                  group-hover:scale-105 transition-transform duration-500
                "
              >
                <div className="text-green-600 dark:text-green-400 font-semibold">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background shapes */}
      <div
        className="
          absolute -right-10 -top-10 w-40 h-40 
          bg-linear-to-br from-green-500/10 to-emerald-500/10 
          rounded-full group-hover:scale-150 
          transition-transform duration-700
        "
      />
      <div
        className="
          absolute -left-10 -bottom-10 w-40 h-40 
          bg-linear-to-tr from-blue-500/10 to-purple-500/10 
          rounded-full group-hover:scale-150 
          transition-transform duration-700 delay-100
        "
      />
    </MotionWrapper>
  );
}
