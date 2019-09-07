document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#first-form');
  form.addEventListener('submit', handleWritingSubmit);
  form.addEventListener('submit', handleTypeWritingSubmit);
  form.addEventListener('submit', handlePlaceSubmittedToSubmit);
  form.addEventListener('submit', handleTypeOfPlaceSubmit);
})

const handleWritingSubmit = function (event) {
  const writingSubmitted = event.target['writing-submitted'].value; 
  event.preventDefault();

  const existingParent = document.querySelector(`#records`);
  const newTableData = document.createElement('p');
  existingParent.appendChild(newTableData);

  newTableData.textContent = `Title of piece: ${writingSubmitted}`
};

const handleTypeWritingSubmit = function (event) {
  const typeOfWriting = event.target['type-of-writing'].value
  event.preventDefault();

  const existingParent = document.querySelector(`#records`);
  const newTableData = document.createElement('p');
  existingParent.appendChild(newTableData);

  newTableData.textContent = `Type of writing: ${typeOfWriting}`
};

const handlePlaceSubmittedToSubmit = function (event) {
  const placeSubmittedTo = event.target['place-submitted-to'].value  
  event.preventDefault();

  const existingParent = document.querySelector(`#records`);
  const newTableData = document.createElement('p');
  existingParent.appendChild(newTableData);

  newTableData.textContent = `Submitted to: ${placeSubmittedTo}`
};

const handleTypeOfPlaceSubmit = function (event) {
  const typeOfPlace = event.target['type-of-place'].value
  event.preventDefault();

  const existingParent = document.querySelector(`#records`);
  const newTableData = document.createElement('p');
  existingParent.appendChild(newTableData);

  newTableData.textContent = `Type of location: ${typeOfPlace}`
};