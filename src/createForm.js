export const createForm = (config = { id: "", class: "" }) => {
  const form = document.createElement("form");

  const button = document.createElement("button");

  form.id = config.id;

  button.id = form.id + "-button";
  button.innerText = "Click here to Fetch the Birth Results !!!";

  form.appendChild(button);

  document.body.appendChild(form);

  return form;
};
