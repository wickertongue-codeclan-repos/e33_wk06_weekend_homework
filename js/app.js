document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#first-form');
  form.addEventListener('submit', handleNewItemFormSubmit);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const submissionItem = createSubmissionItem(event.target);
  const records = document.querySelector('#records');
  records.appendChild(submissionItem);

  event.target.reset();
}

const createSubmissionItem = function (form) {
  const newItem = document.createElement('li');
  newItem.classList.add('records-item');

  const writingSubmitted = document.createElement('p');
  writingSubmitted.textContent = `Title of Work Submitted: ${form['writing-submitted'].value}`;
  newItem.appendChild(writingSubmitted);

  const typeOfWriting = document.createElement('p');
  typeOfWriting.textContent = `Type of Writing Submitted: ${form['type-of-writing'].value}`;
  newItem.appendChild(typeOfWriting);

  const placeSubmittedTo = document.createElement('p');
  placeSubmittedTo.textContent = `Place Submitted to: ${form['place-submitted-to'].value}`;
  newItem.appendChild(placeSubmittedTo);

  const typeOfPlace = document.createElement('p');
  typeOfPlace.textContent = `Type of Place Submitted to: ${form['type-of-place'].value}`;
  newItem.appendChild(typeOfPlace);

  return newItem;
}