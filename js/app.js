document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#first-form');
  form.addEventListener('submit', handleWritingSubmit);
  form.addEventListener('submit', handleTypeWritingSubmit);
  form.addEventListener('submit', handlePlaceSubmittedToSubmit);
  form.addEventListener('submit', handleTypeOfPlaceSubmit);
})

const handleWritingSubmit = function (event) {
  event.preventDefault();

  const existingParent = document.querySelector('#records');
  const newTableData = document.createElement('td');
  existingParent.appendChild(newTableData);

  newTableData.textContent = `${event.target['writing-submitted'].value}`
};

const handleTypeWritingSubmit = function (event) {
  event.preventDefault();

  const existingParent = document.querySelector('#records');
  const newTableData = document.createElement('td');
  existingParent.appendChild(newTableData);

  newTableData.textContent = `${event.target['type-of-writing'].value}`
};

const handlePlaceSubmittedToSubmit = function (event) {
  event.preventDefault();

  const existingParent = document.querySelector('#records');
  const newTableData = document.createElement('td');
  existingParent.appendChild(newTableData);

  newTableData.textContent = `${event.target['place-submitted-to'].value}`
};

const handleTypeOfPlaceSubmit = function (event) {
  event.preventDefault();

  const existingParent = document.querySelector('#records');
  const newTableData = document.createElement('td');
  existingParent.appendChild(newTableData);

  newTableData.textContent = `${event.target['type-of-place'].value}`
};