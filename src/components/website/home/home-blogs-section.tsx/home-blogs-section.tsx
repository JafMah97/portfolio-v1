import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import ShinyText from "@/components/custom/motion/text-shine";
import CustomButton from "@/components/custom/layout/custom-button";
import { Send, Sparkles } from "lucide-react";
import BlogCard from "./blog-card";

export default async function HomeBlogsSection({ lang }: { lang: Lang }) {
  interface Blog {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
  }
  const dict = (await getDictionary(lang)).homePage.blogsSection;
  const blogs: Blog[] = [
    {
      title: dict.blogs[0].title,
      excerpt: dict.blogs[0].excerpt,
      readTime: dict.blogs[0].readTime,
      date: "2024-03-15",
      slug: "getting-started-with-nextjs-16",
    },
    {
      title: dict.blogs[1].title,
      excerpt: dict.blogs[1].excerpt,
      readTime: dict.blogs[1].readTime,
      date: "2024-03-10",
      slug: "mastering-typescript-for-react",
    },
    {
      title: dict.blogs[2].title,
      excerpt: dict.blogs[2].excerpt,
      readTime: dict.blogs[2].readTime,
      date: "2024-03-05",
      slug: "building-responsive-layouts-with-tailwind-css",
    },
    {
      title: dict.blogs[3].title,
      excerpt: dict.blogs[3].excerpt,
      readTime: dict.blogs[3].readTime,
      date: "2024-03-01",
      slug: "understanding-react-hooks",
    },
  ];

  return (
    <section className="relative py-24 backdrop-blur-xl bg-primary/10">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <MotionWrapper
          as="h2"
          fadeUp
          className="text-4xl md:text-6xl font-bold  mb-6 text-center"
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

        {/* Blog Grid */}
        <MotionWrapper
          as="div"
          fadeUp
          stagger={0.15}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {blogs.map((blog, index) => (
            <BlogCard lang={lang} key={index} blog={blog} index={index} />
          ))}
        </MotionWrapper>
        {/* CTA Button */}
        <MotionWrapper fadeUp delay={0.4} className="text-center mt-12">
          <CustomButton
            text={dict.cta}
            href={`/${lang}/blogs`}
            iconLeft={<Send className="w-5 h-5" />}
            iconRight={<Sparkles className="w-5 h-5" />}
          />
        </MotionWrapper>
      </div>
    </section>
  );
}
