import { useTranslation } from "react-i18next";

const email = import.meta.env.VITE_EMAIL;

export default function Contact() {
  const { t, i18n } = useTranslation();

  const locale = i18n.language;
  const linkedinUrl =
    locale === "es"
      ? "https://www.linkedin.com/in/anna-heliasz-dev/"
      : "https://www.linkedin.com/in/anna-heliasz-dev/?locale=en_US";

  return (
    <section className="py-8 px-4 flex justify-center">
      <div
        className="w-full max-w-lg rounded-2xl bg-gradient-to-br from-white/95 to-slate-50/90
                   p-6 shadow-sm ring-1 ring-black/5
                   transition-transform duration-300
                   motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.01]
                   hover:shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t("contact.title")}
        </h2>

        <div className="flex flex-col items-center gap-4 text-lg">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            📧 <span className="underline">{email}</span>
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            🔗 <span className="underline">{t("contact.linkedin")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

