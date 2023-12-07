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
