import { fetchDayEvent } from "./history";
import { createForm } from "./createForm";
import "./style.css";

const form = createForm({ id: "date-form" });

form.addEventListener("submit", e => {
  e.preventDefault();

  fetchDayEvent()
    .then(repoObjs => {
      const answer = repoObjs.data.Births.map(repoItem => repoItem.text);
      const para = document.createElement("p");
      para.innerText = answer;
      document.body.appendChild(para);
      return repoObjs.data.Births.map(repoItem => repoItem.text);
    })
    .then(console.log);
});
