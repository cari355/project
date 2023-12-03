const myForm = document.getElementById("form")
const focusBlurOutput = document.getElementById("focus-blur-output")

myForm.addEventListener("focus", function (event) {
  focusBlurOutput.textContent = "You're typing!"
})

myForm.addEventListener("blur", function (event) {
  focusBlurOutput.textContent = "You're no longer typing!"
})