const XLSX = require('xlsx');
//  const fs = require('fs');

const filePath = './apis/repository/UserRepository/user_data.xlsx';

module.exports = {
    saveUserData,
    updateUserDataById,
    getUserDataById,
    deleteUserDataById
  };

function saveUserData(userData) {
  
  console.log(userData.id+" -- "+userData.name+" ---"+userData.phoneNumber+" -- "+userData.eMail)
  const newUserData = [
    ['ID', 'Name', 'Phone Number', 'Date'],
    [1, 'John Doe', '123-456-7890', new Date()],
    [2, 'Jane Smith', '987-654-3210', new Date()],
    // Add more user data here
  ];
  const workbook = XLSX.utils.book_new();
  alert("1")
  const worksheet= XLSX.utils.aoa_to_sheet(newUserData);
  alert("2")

  XLSX.utils.book_append_sheet(workbook, worksheet, 'UserData');
  alert("3")

  XLSX.writeFile(workbook, filePath);
  alert("4")

}

function updateUserDataById(id, updatedData) {
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets['UserData'];

  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  const idIndex = data[0].indexOf('ID');
  const userDataIndex = data.findIndex(row => row[idIndex] === id.toString());

  if (userDataIndex !== -1) {
    data[userDataIndex] = [id, ...updatedData];
    XLSX.utils.sheet_add_aoa(worksheet, data, { origin: 'A1' });
    XLSX.writeFile(workbook, filePath);
    return true;
  } else {
    return false;
  }
}

function getUserDataById(id) {
  alert("------"+id)
  const workbook = XLSX.readFile(filePath);
  alert("------"+workbook)

  const worksheet = workbook.Sheets['UserData'];
  alert("------"+worksheet)


  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  alert("------"+data)

  const idIndex = data[0].indexOf('ID');
  alert("------"+idIndex)

  const userData = data.find(row => row[idIndex] === id.toString());
console.log(userData)
  return userData || null;
}

function deleteUserDataById(id) {
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets['UserData'];

  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  const idIndex = data[0].indexOf('ID');
  const userDataIndex = data.findIndex(row => row[idIndex] === id.toString());

  if (userDataIndex !== -1) {
    data.splice(userDataIndex, 1);
    XLSX.utils.sheet_add_aoa(worksheet, data, { origin: 'A1' });
    XLSX.writeFile(workbook, filePath);
    return true;
  } else {
    return false;
  }
}

// Example usage
const newUserData = [
  ['ID', 'Name', 'Phone Number', 'Date'],
  [1, 'John Doe', '123-456-7890', new Date()],
  [2, 'Jane Smith', '987-654-3210', new Date()],
  // Add more user data here
];

