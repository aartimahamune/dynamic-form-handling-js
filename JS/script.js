const form = document.getElementById("registration-form");
const resetForm = document.getElementById("reset");
const addedHobby = document.getElementById("add-hobby");
const hobbyContainer = document.getElementById("hobby-container");

addedHobby.addEventListener("click", function addHobby() {
  try {
    let input = document.createElement("input");
    input.style.width = "100%";
    input.style.marginBottom = "0.8rem";
    input.type = "text";
    input.className = "hobby-input";
    hobbyContainer.appendChild(input);
    console.log("input created!");
  } catch (error) {
    console.log(error);
  }
}
)

form.addEventListener("submit", function (event) {
  event.preventDefault();
    const fname= document.getElementById("fname").value;
    const email= document.getElementById("email").value;
    const age= document.getElementById("age").value;

    const genderInput= document.querySelector('input[name="gender"]:checked')
    const gender= genderInput? genderInput.value: "";
    const hobbyInput = document.querySelectorAll(".hobby-input")
    const hobbies = []
    hobbyInput.forEach((hobby)=>{
        if(hobby.value.trim() != "")
        {
            hobbies.push(hobby.value.trim())
        }
    })

    const userData = {fname, email, age, gender, hobbies}

  localStorage.setItem("userData", JSON.stringify(userData));

  window.location.href = "result.html";
});


resetForm.addEventListener("click", function(){
    localStorage.removeItem("userData")
})