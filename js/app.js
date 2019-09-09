document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#first-form');
  form.addEventListener('submit', handleNewItemFormSubmit);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const submissionItem = createSubmissionItem(event);
  const records = document.querySelector('#records');
  records.appendChild(submissionItem);

  event.target.reset();
}

const createTableRow = function () {
  const newTableRow = document.createElement('tr');
  newTableRow.classList.add('records-item-headers');
  return newTableRow;
}

const createTableRowForData = function () {
  const newTableRowForData = document.createElement('tr');
  newTableRowForData.classList.add('records-item-headers');
  return newTableRowForData;
}

const createTableHeader = function (text) {
  const newTableRow = createTableRow()
  const newTableHeader = document.createElement('th');
  newTableHeader.textContent = text;
  newTableRow.appendChild(newTableHeader);
  return newTableHeader;
}

const createTableData = function (text) {
  const newTableRowForData = createTableRowForData()
  const newTableData = document.createElement('td');
  newTableData.textContent = text;
  newTableRowForData.appendChild(newTableData);
  return newTableData;
}

const createSubmissionItem = function (event) { 
  createTableRow();
  createTableHeader('Title of Work Submitted');
  createTableHeader('Type of Writing Submitted');
  createTableHeader('Submitted To');
  createTableHeader('Type of Place');
  createTableRowForData();
  createTableData(event.target['writing-submitted'].value)
  createTableData(event.target['type-of-writing'].value)
  createTableData(event.target['place-submitted-to'].value)
  createTableData(event.target['type-of-place'].value)
  return this;
}