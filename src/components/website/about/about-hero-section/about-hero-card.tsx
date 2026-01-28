import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  stat: {
    icon: ReactNode;
    value: string;
    label: string;
    link:string
  };
  index: number;
}

export default function AboutHeroCard({ stat, index }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <div className="flex flex-col justify-center items-center gap-2">
        <Link
          href={stat.link}
          className={`group relative px-4 py-2 rounded-full bg-forground/30 border border-foreground/10 text-sm hover:bg-foreground/5 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm flex items-center gap-2 `}
          style={{ animationDelay: `${0.7 + index * 0.1}s` }}
        >
          <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-4 h-4" />
          <span className="text-center"> {stat.label}</span>
          {/* reserve space */}
          <div className="w-3 h-3"></div> {/*Important*/}
        </Link>
        <span className="hidden sm:block">{stat.value}</span>
      </div>
    </div>
  );
}
