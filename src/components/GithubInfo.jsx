import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../../context/useGlobalContext";
import useProjectInfo from "../../hooks/useProjectInfo";
import { convertDate } from "../../utils/helpers";

// Couleurs de github/linguist
const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Shell: "#89e051",
  Rust: "#dea584",
  Java: "#b07219",
  QML: "#44a51c",
  Vue: "#41b883",
};

export function GithubInfo({ githubProjectUrl }) {
  const { t } = useTranslation();
  const { reposData, loading } = useGlobalContext();
  const projectInfo = useProjectInfo(reposData, githubProjectUrl);

  if (loading || !projectInfo || !reposData) return null;

  const { language } = projectInfo;
  const license = projectInfo.license?.spdx_id;
  const items = [
    license && license !== "NOASSERTION" ? license : null,
    `${t("updated")} ${convertDate(projectInfo.pushed_at ?? projectInfo.updated_at)}`,
  ].filter(Boolean);

  return (
    <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-neutral-500">
      {language && (
        <li className="flex items-center gap-1.5 text-neutral-300">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: LANGUAGE_COLORS[language] ?? "#8b8b8b" }}
          />
          {language}
        </li>
      )}
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default GithubInfo;
