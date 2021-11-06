function callAPIFromAjax(name) {
  var name = document.getElementById("gid").value;

  var request = new XMLHttpRequest();

  request.open("GET", "https://api.github.com/users/".concat(name));
  request.send();
  request.onload = () => {
    console.log(request);
    console.log(request.response);
    if (request.status === 200) {
      var user = JSON.parse(request.response);
      var output = name + " is following " + user.following + " people";
      console.log(output);
      document.getElementById("op").innerHTML = output;
    }
  };
  request.onerror = function (e) {
    alert("Please check API service!");
  };
}

var users = {
  users: [
    {
      _id: 1,
      name: "Tom",
      place: "Pune",
      age: 24,
    },
    {
      _id: 2,
      name: "Ronny",
      place: "Mumbai",
      age: 31,
    },
    {
      _id: 3,
      name: "Tony",
      place: "Delhi",
      age: 54,
    },
  ],
};

const populate = () => {
  var table = document.getElementById("myTable");

  for (i = 1; i <= users.users.length; i++) {
    var row = table.insertRow(i);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = users.users[i-1]._id
    var cell2 = row.insertCell(1);
    cell2.innerHTML = users.users[i-1].name
    var cell3 = row.insertCell(2);
    cell3.innerHTML = users.users[i-1].place
    var cell4 = row.insertCell(3);
    cell4.innerHTML = users.users[i-1].age
    var cell4 = row.insertCell(4);
    cell4.innerHTML = "<button id='btnEdit'onclick=updateEntry(this)>Edit</button>";

    var cell5 = row.insertCell(5);
    cell5.innerHTML = "<button id='btnRemove' onclick=deleteEntry(this)>Delete</button>";
  }

  document.getElementById("myTable").deleteRow(4);
};


function showAlert(){

  alert('Hello, you just clicked me!!!')
}