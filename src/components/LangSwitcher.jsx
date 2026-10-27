import { useTranslation } from "react-i18next";
import { changeLanguage, normalizeLang } from "../../utils/helpers";

const LANGUAGES = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

function LangageSwitcher() {
  const { i18n } = useTranslation();
  const activeLang = normalizeLang(i18n.resolvedLanguage ?? i18n.language);

  return (
    <div className="flex items-center gap-1 font-mono text-xs uppercase">
      {LANGUAGES.map(({ code, label }) => {
        const active = activeLang === code;
        return (
          <button
            key={code}
            lang={code}
            title={label}
            aria-pressed={active}
            onClick={() => changeLanguage(code)}
            className={`rounded px-1.5 py-1 transition-colors ${
              active ? "text-accent" : "text-neutral-400 hover:text-neutral-100"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}

export default LangageSwitcher;
