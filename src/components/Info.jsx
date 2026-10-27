import { useTranslation } from "react-i18next";
import { cardsData } from "../../data/cardsData";
import DiscordWidget from "./Discord";

function Info() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 pb-8 pt-12 sm:pt-16 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h1 className="flex items-baseline gap-3 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
          {t("info")}
          <span className="font-mono text-base font-normal text-neutral-600">
            {cardsData.length}
          </span>
        </h1>
        <p className="mt-2 max-w-xl text-neutral-400">{t("intro")}</p>
      </div>
      <DiscordWidget />
    </div>
  );
}

export default Info;
