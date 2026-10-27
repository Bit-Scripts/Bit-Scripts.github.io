import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import LangageSwitcher from "./LangSwitcher";

function Header() {
  const { t } = useTranslation();

  const iconLink =
    "text-neutral-400 transition-colors hover:text-neutral-100 focus-visible:text-neutral-100";

  return (
    <header className="border-b border-white/[0.06]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <a href="/" className="flex min-w-0 items-center gap-3">
          <img className="w-8 shrink-0 sm:w-9" src="logo.svg" alt="" />
          <div className="min-w-0">
            <div className="text-lg font-semibold leading-tight tracking-tight text-neutral-100">
              Bit-Scripts
            </div>
            <div className="truncate text-xs text-neutral-500 sm:text-sm">
              {t("baseline")}
            </div>
          </div>
        </a>

        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          <LangageSwitcher />
          <span className="hidden h-4 w-px bg-white/10 sm:block" />
          <a
            href="https://github.com/Bit-Scripts"
            className={iconLink}
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://discord.com/invite/uAtm6aMnHR"
            className={iconLink}
            title={t("discord")}
            aria-label={t("discord")}
          >
            <BsDiscord size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
