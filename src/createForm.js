export const createForm = (config = { id: "", class: "" }) => {
  // create your form and sub-elements
  const form = document.createElement("form");

  const button = document.createElement("button");

  // add attributes to the related elements
  form.id = config.id;

  // ie github-form-input if config.id === 'github-form'

  button.id = form.id + "-button";
  button.innerText = "Click to Fetch the Results !!!";

  // add your sub-elements to the parent

  form.appendChild(button);

  //Tell where in the document you'd like to add the form
  document.body.appendChild(form);

  // return the form in case the consumer would like to do something else:
  // ie: add an event listener
  return form;
};

// export this function as the main export of this file
