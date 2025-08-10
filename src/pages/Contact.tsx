import { useTranslation } from "react-i18next"

const email = import.meta.env.VITE_EMAIL

export default function Contact() {
  const { t, i18n } = useTranslation()

  const locale = i18n.language
  const linkedinUrl =
    locale === "es"
      ? "https://www.linkedin.com/in/anna-heliasz-dev/"
      : "https://www.linkedin.com/in/anna-heliasz-dev/?locale=en_US"

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">{t("contact.title")}</h2>

      <p className="mb-2">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 underline text-blue-600 hover:text-blue-800"
        >
          📧 {t("contact.email")}: {email}
        </a>
      </p>

      <p>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 underline text-blue-600 hover:text-blue-800"
        >
          🔗 {t("contact.linkedin")}
        </a>
      </p>
    </section>
  )
}

