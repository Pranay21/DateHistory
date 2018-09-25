import { fetchDayEvent } from "./history";
import { createForm } from "./createForm";
import { fetch } from "./fetch";
import "./style.css";
const form = createForm({ id: "date-form" });
form.addEventListener("submit", e => {
  e.preventDefault();

  fetch();

  document.body.appendChild(ul);
  //.then(console.log);
});
