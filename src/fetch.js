import { fetchDayEvent } from "./history";
import { createForm } from "./createForm";

const ul = document.createElement("ul");
export const fetch = () => {
  fetchDayEvent().then(repoObjs => {
    repoObjs.data.Births.map(repoItem => {
      const li = document.createElement("li");
      li.innerText = repoItem.text;
      ul.appendChild(li);
    });
    //return repoObjs.data.Births.map(repoItem => repoItem.text);
  });

  return document.body.appendChild(ul);
};
