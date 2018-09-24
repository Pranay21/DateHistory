import { fetchDayEvent } from "./history";
import { createForm } from "./createForm";

const form = createForm({ id: "date-form" });

form.addEventListener("submit", e => {
  e.preventDefault();

  fetchDayEvent()
    .then(repoObjs => {
      return repoObjs.data.Births.map(repoItem => repoItem.text);
    })
    .then(console.log);
});
