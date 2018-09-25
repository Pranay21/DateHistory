import { fetchDayEvent } from "./history";
import { createForm } from "./createForm";
import "./style.css";

const form = createForm({ id: "date-form" });
const ul = document.createElement("ul");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetchDayEvent().then(repoObjs => {
    repoObjs.data.Births.map(repoItem => {
      const li = document.createElement("li");
      //console.log(answer);
      li.innerText = repoItem.text;
      ul.appendChild(li);
    });
    //return repoObjs.data.Births.map(repoItem => repoItem.text);
  });
  document.body.appendChild(ul);
  //.then(console.log);
});
