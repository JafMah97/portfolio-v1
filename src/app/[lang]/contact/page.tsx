import ContactFormSection from "@/components/website/contact/contact-form-section/contact-form-section";
import ContactHeroSection from "@/components/website/contact/contact-hero-section/contact-hero-section";
import { Lang } from "@/utils/translations/dictionary-utils";

interface Props {
  params: Promise<{ lang: Lang }>;
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;

  return (
    <div className="bg-primary/10">
      <ContactHeroSection lang={lang} />
      <ContactFormSection />
    </div>
  );
}
