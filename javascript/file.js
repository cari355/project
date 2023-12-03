const myForm = document.getElementById("form")
const focusBlurOutput = document.getElementById("focus-blur-output")

myForm.addEventListener("focus", function (event) {
  focusBlurOutput.textContent = "The input is in focus!"
})

myForm.addEventListener("blur", function (event) {
  focusBlurOutput.textContent = "The input no longer has focus!"
})