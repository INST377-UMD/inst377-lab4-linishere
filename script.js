// Alert Me Section
document.getElementById("alertForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    alert(`Hi ${name}!`);
});
  
// Change Color Section
const changeColor = document.getElementById("changeColor");
changeColor.addEventListener("click", function () {
    const body = document.body;
    if (body.style.backgroundColor === "lightblue") {
      body.style.backgroundColor = "lightgreen";
    } else {
      body.style.backgroundColor = "lightblue";
    }
});
  
// Text Tester Section
document.getElementById("textForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const textInput = document.getElementById("textInput").value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(textInput)) {
      alert("Special characters are not allowed!");
    }s
});
  
// Add Text Section
document.getElementById("addText").addEventListener("click", function () {
    const heading = document.querySelector("h1");
    heading.textContent += " Add Text";
});