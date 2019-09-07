document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#first-form');
  form.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const submissionItem = createSubmissionItem(event.target);
  const records = document.querySelector('#records');
  records.appendChild(submissionItem);

  event.target.reset();
}

const createSubmissionItem = function (form) {
  const newItem = document.createElement('div');
  newItem.classList.add('records-item');

  const writingSubmitted = document.createElement('h3');
  writingSubmitted.textContent = `Title: ${form['writing-submitted'].value}`;
  newItem.appendChild(writingSubmitted);

  const typeOfWriting = document.createElement('p');
  typeOfWriting.textContent = `Type: ${form['type-of-writing'].value}`;
  newItem.appendChild(typeOfWriting);

  const placeSubmittedTo = document.createElement('p');
  placeSubmittedTo.textContent = `Submitted to: ${form['place-submitted-to'].value}`;
  newItem.appendChild(placeSubmittedTo);

  const typeOfPlace = document.createElement('p');
  typeOfPlace.textContent = `Type: ${form['type-of-place'].value}`;
  newItem.appendChild(typeOfPlace);

  return newItem;
}

const handleDeleteAllClick = function (event) {
  const newItem = document.querySelector('#records');
  newItem.innerHTML = '';
}