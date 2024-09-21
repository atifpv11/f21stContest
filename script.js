/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(staff => {
    if(staff.profession == "developer")
    {
      console.log(staff);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(staff => {
    if(staff.profession == "developer")
    {
      console.log(staff);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const new_staff = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(new_staff);
  console.log(new_staff);
}

function removeAdmin() {
  //Write your code here, just console.log
  const newEmps = arr.filter(staff => staff.profession !== "admin");
  arr = newEmps ;
  console.log(newEmps);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 4, name: "hecter", age: "37", college: "oxford" },
    { id: 5, name: "bellerin", age: "24", college: "mit" },
    { id: 6, name: "toni", age: "90", college: "iitmadras" },
  ];
  let newSet = arr.concat(arr1);
  console.log(newSet);
}
