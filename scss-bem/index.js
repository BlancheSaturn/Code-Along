const onDOMLoaded = (_event) => {
  console.log("DOM loaded");
  const changeName = document.getElementsByClassName("intro__sub-heading");
  changeName[0].innerHTML = "Welcome to Nology Conference 2021";
  const button = document.getElementById("myButton");

  button.addEventListener("click", () => {
    alert("Form is submitted");
  });

  const input = document.getElementById("inputField");
  input.addEventListener("focus", () => {
    input.classList.add("active");
  });

  const handleInputChange = (e) => {
    const input = document.getElementById("inputField");
    const value = e.target.value
    input.classList.add('valid')
    input.classList.add('invalid')

  }

  input.addEventListener("focus", (e) => handleInputChange(e))

  //  const nameValidation = document.getElementById('valid')
  //  nameValidation.addEventListener('click', () => {
  //     if (name === null || name === ""){
  //         alert("Name cant be blank")
  //         return false
  //     }else if(email === null ||email === "")
  //         alert('Email cant be blank')
  //         return false
  //  })
};

document.addEventListener("DOMContentLoaded", (e) => onDOMLoaded(e));
