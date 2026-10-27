import i18n from "i18next";

export const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};

// "https://github.com/Owner/Repo" -> "owner/repo"
export const getRepoFullName = (githubUrl) => {
  const match = githubUrl?.match(/github\.com\/([^/]+\/[^/#?]+)/);
  return match ? match[1].toLowerCase() : null;
};

const fetchOwnerRepos = async (owner) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${owner}/repos?per_page=100`,
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

export const fetchReposData = async (owners) => {
  const repos = await Promise.all(owners.map(fetchOwnerRepos));
  return repos.flat();
};

export const getDicordInviteInfo = async (inviteCode) => {
  if (!inviteCode) {
    console.error("Un code d'invitation est nécessaire");
    return null;
  }
  try {
    const response = await fetch(
      `https://discord.com/api/v10/invites/${inviteCode}`,
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const channelInfo = await response.json();
    console.log(channelInfo);
    return channelInfo;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

export const normalizeLang = (lang) => {
  if (typeof lang === "string" && lang.includes("-")) {
    return lang.split("-")[0];
  }
  return lang;
};

export function convertDate(dateStr) {
  if (!dateStr) return null;
  const dateObj = new Date(dateStr);
  const formattedDate = `${String(dateObj.getDate()).padStart(2, "0")}/${String(dateObj.getMonth() + 1).padStart(2, "0")}/${dateObj.getFullYear()}`;
  return formattedDate;
}
