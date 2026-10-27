import { createContext, useState, useEffect } from "react";
import { fetchReposData, getRepoFullName } from "../utils/helpers";
import { cardsData } from "../data/cardsData";

// Propriétaires (orgs ou utilisateurs) des dépôts référencés par les cartes
const REPO_OWNERS = [
  ...new Set(
    cardsData
      .map((card) => getRepoFullName(card.github)?.split("/")[0])
      .filter(Boolean),
  ),
];

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [reposData, setReposData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!reposData) {
      fetchReposData(REPO_OWNERS)
        .then((res) => {
          if (res) {
            setReposData(res);
          } else {
            setReposData(null);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        reposData,
        loading,
        setLoading,
        setReposData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
