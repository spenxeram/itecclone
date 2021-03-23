// api end point: https://randomuser.me/api/?results=3

// execute on page load
document.addEventListener("DOMContentLoaded", function() {
  getStaff();
  //AJAX call to get (3) staff profiles
  function getStaff() {
    let url = "https://randomuser.me/api/?results=3";
    let xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      url,
      true
    );
    xhr.onload = function() {
      if(this.status == 200) {
        let result = JSON.parse(this.responseText);
        outputStaff(result.results);
      }

    }
    xhr.send();
  }

  // create html and output staff profiles to the page

  function outputStaff(staff) {
    let staffdiv = document.querySelector(".staff");
    console.log(staff);
    let output = "";
    staff.forEach((item) => {
      output+= `<div class="col-md-4 profile text-center">
        <img src="${item.picture.large}" class="rounded-circle" alt="">
        <h3>${item.name.title} ${item.name.first} ${item.name.last}</h3>
        <h4 class="font-weight-light">${item.phone}</h4>
        <h5><em class="font-weight-light"> ${item.email}</em></h5>
      </div> <!-- end of staff profile -->`;
    });
    output+= "<hr class='mb-5 mt-3'>";
    staffdiv.innerHTML = output;
  }

  console.log("loaded");
})
