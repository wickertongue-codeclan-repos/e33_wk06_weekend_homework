document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#first-form');
  form.addEventListener('submit', handleFormSubmit);

})

const handleFormSubmit = function (event) {
  event.preventDefault();

  console.log(event.target['writing-submitted'].value);
  console.log(event.target['type-of-writing'].value);
  console.log(event.target['place-submitted-to'].value);
  console.log(event.target['type-of-place'].value);

  const parent = document.querySelector('#records');
  const newTableItem = document.createElement('table');
  parent.appendChild(newTableItem);

  newTableItem.textContent = `Writing Submitted: ${event.target['writing-submitted'].value}, Type of Writing: ${event.target['type-of-writing'].value}, Submitted To: ${event.target['place-submitted-to'].value}, Type of Place: ${event.target['type-of-place'].value}.`
}


