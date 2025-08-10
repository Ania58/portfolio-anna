import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">{t("about.title")}</h2>
      <p className="text-slate-700">{t("about.content")}</p>
    </section>
  );
}