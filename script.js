// Getting the DOM Model
const input = document.getElementById('user-input');
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div")
// Only Accepting these valid formats
/*
1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
5555555555
555-555-5555
(555)555-5555
*/ 
// Function for validation

function validator(num){
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  if(num.length === 0){
    alert("Please provide a phone number");
    return;
  }

  if(regex.test(num)){
    result.innerHTML += `<div style="text-align: center; padding:10px; color:black;background-color: grey">
    Valid US number: ${num}
    </div>`;
  } else{
    result.innerHTML += `<div style="text-align: center; padding: 10px; color:brown;background-color: grey">
    Invalid US number: ${num}
    </div>`;
  }
}

// Clear function 
function clear(){
  result.innerHTML = "";
}


checkBtn.addEventListener('click', ()=>{
  validator(input.value);
  input.value = "";
});
clearBtn.addEventListener('click', clear);