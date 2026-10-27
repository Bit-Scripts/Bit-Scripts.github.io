import { useMemo } from "react";
import { getRepoFullName } from "../utils/helpers";

function useProjectInfo(reposData, githubProjectUrl) {
  const findProjectObjectByFullName = (array, fullName) => {
    if (!array) {
      // console.log("Vous devez fournir un tableau");
      return null;
    }

    if (!fullName) {
      // console.log("Vous devez fournir un élément à rechercher");
      return null;
    }
    return array.find((item) => item.full_name.toLowerCase() === fullName);
  };

  const projectInfo = useMemo(() => {
    return findProjectObjectByFullName(
      reposData,
      getRepoFullName(githubProjectUrl),
    );
  }, [reposData, githubProjectUrl]);

  return projectInfo;
}

export default useProjectInfo;
