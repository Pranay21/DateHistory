import { fetchDayEvent } from "./history";
import { createForm } from "./createForm";
import "./style.css";

const form = createForm({ id: "date-form" });

form.addEventListener("submit", e => {
  e.preventDefault();

  fetchDayEvent()
    .then(repoObjs => {
      const ul = document.createElement("ul");
      const answer = repoObjs.data.Births.map(repoItem => repoItem.text);
      const li = document.createElement("li");
      li.innerText = answer;
      ul.appendChild(li);
      document.body.appendChild(ul);
      return repoObjs.data.Births.map(repoItem => repoItem.text);
    })
    .then(console.log);
});
