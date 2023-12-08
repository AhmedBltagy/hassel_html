// lang
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("lang-toggle").addEventListener("click", function () {
    this.textContent = this.textContent === "EN" ? "ع" : "EN"
  })
})

function updateProgressBar() {
  var progressBar = document.getElementById("progressBar")
  var days = document.getElementById("days")
  var totalDays = 500 // Total number of days (can be adjusted as needed)
  var valueNow = parseInt(progressBar.getAttribute("aria-valuenow"))

  var daysRemaining = totalDays - valueNow

  if (daysRemaining > 0) {
    // If there are remaining days
    progressBar.style.width = (valueNow / totalDays) * 100 + "%"
    progressBar.style.backgroundColor = "#EBCFB9"
  } else {
    // If there are no remaining days
    progressBar.style.width = "100%"
    progressBar.style.backgroundColor = "#EBCFB9"
  }

  days.textContent = daysRemaining + " days"
}

updateProgressBar()

// Login and forget password

function switchInput(inputType) {
  var idNumberField = document.getElementById("id-number-field")
  var usernameField = document.getElementById("username-field")
  var idNumberTab = document.getElementById("id-number-tab")
  var usernameTab = document.getElementById("username-tab")
  idNumberField.style.display = "none"
  usernameField.style.display = "none"

  if (inputType === "id") {
    idNumberField.style.display = "block"
    idNumberTab.classList.add("btn-main")
    idNumberTab.classList.remove("light-bg")
    usernameTab.classList.remove("btn-main")
    usernameTab.classList.add("light-bg")
  } else {
    usernameField.style.display = "block"
    usernameTab.classList.add("btn-main")
    usernameTab.classList.remove("light-bg")
    idNumberTab.classList.remove("btn-main")
    idNumberTab.classList.add("light-bg")
  }
}
