import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { BASE_IMG_PATH, DEFAULT_IMG_COVER } from "../../config/globals";
import GithubInfo from "./GithubInfo";

function Card({
  imgName = DEFAULT_IMG_COVER,
  title = "No name",
  translationKey,
  demoUrl,
  author,
  githubProjectUrl,
}) {
  const { t } = useTranslation();

  const linkStyle =
    "flex items-center gap-1.5 text-neutral-300 transition-colors hover:text-accent";
  const demoStyle =
    "flex items-center gap-1 rounded-full border border-accent/30 bg-accent/[0.06] px-3 py-1 text-accent transition-colors hover:border-accent/60 hover:bg-accent/[0.12]";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-white/[0.08] bg-neutral-900 transition-[border-color,box-shadow] duration-300 hover:border-accent/30 hover:shadow-[0_12px_32px_-12px_rgba(0,255,11,0.18)]">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.06] bg-neutral-950">
        <img
          src={`${BASE_IMG_PATH}${imgName}`}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-200 ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="line-clamp-2 text-lg font-semibold leading-snug text-neutral-100">
          {title}
        </h2>

        <p className="mt-2 line-clamp-5 text-sm leading-relaxed text-neutral-400">
          {t(`app.card:${translationKey}.description`)}
        </p>

        <GithubInfo githubProjectUrl={githubProjectUrl} />

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between gap-4 border-t border-white/[0.06] pt-4 text-sm">
            <span className="text-neutral-500">
              {t("devby")} <span className="text-neutral-300">{author}</span>
            </span>

            <div className="flex min-h-[30px] items-center gap-4">
              {githubProjectUrl && (
                <a className={linkStyle} href={githubProjectUrl}>
                  <FaGithub size={15} />
                  {t("code")}
                </a>
              )}
              {demoUrl && (
                <a className={demoStyle} href={demoUrl}>
                  {t("demo")}
                  <FiArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
