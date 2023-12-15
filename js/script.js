// lang
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("lang-toggle").addEventListener("click", function () {
    this.textContent = this.textContent === "EN" ? "ع" : "EN"
  })
})
document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".sidebar .nav-link")

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var activeTabContent = this.innerHTML // Get HTML content
      var breadcrumbActiveTab = document.getElementById("breadcrumb-active-tab")

      if (breadcrumbActiveTab) {
        breadcrumbActiveTab.innerHTML = activeTabContent // Set HTML content
      }
    })
  })
})

var progressBar = document.querySelector(" .days-progress #progressBar")
function updateProgressBar() {
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
if (progressBar) {
  updateProgressBar()
}
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
//Wallet Add Modal

function submitAddModal() {
  var modalBody = document.querySelector("#addBalanceModal .modal-body")
  var modalTitle = document.querySelector("#addBalanceModal .modal-title")
  var modalFooter = document.querySelector("#addBalanceModal .modal-footer")

  // Update the modal title
  modalTitle.textContent = "Complete Payment"

  // Update the modal body
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="cardNumber" class="form-label">Card Number</label>
          <input type="text" class="form-control" id="cardNumber" placeholder="---- ---- ---- ----">
        </div>
        <div class="mb-3 d-flex justify-content-between">
          <div>
            <label for="expiryDate" class="form-label">Expired Date</label>
            <input type="text" class="form-control" id="expiryDate" placeholder="MM/YY">
          </div>
          <div>
            <label for="cvv" class="form-label">CVV</label>
            <input type="text" class="form-control" id="cvv" placeholder="CVV">
          </div>
        </div>
        <div class="mb-3">
          <label for="cardHolderName" class="form-label">Card Holder Name</label>
          <input type="text" class="form-control" id="cardHolderName" placeholder="Card Holder Name">
        </div>
        <div class="d-flex justify-content-center">
          <button id="pay-btn" type="submit" class="btn-main w-100">Pay Now</button>
        </div>
      </form>
    `

  // Remove all buttons from the modal footer
  var buttons = modalFooter.querySelectorAll("button")
  buttons.forEach(function (button) {
    button.remove()
  })

  // Add an event listener for the pay-btn inside the modal body
  var payBtn = document.querySelector("#pay-btn")

  payBtn.addEventListener("click", function () {
    var modalBody = document.querySelector("#addBalanceModal .modal-body")
    var modalTitle = document.querySelector("#addBalanceModal .modal-title")
    var modalImage = document.querySelector("#addBalanceModal .modal-image")
    var modalFooter = document.querySelector("#addBalanceModal .modal-footer")

    // Update the modal title
    modalTitle.textContent = "Payment Failed"

    // Update the modal body
    modalBody.innerHTML = `
        <div class="text-center">
          <img src="../../assets/images/payment-error.svg" class="img-fluid" alt="Payment Failed Image">
          <h5 class="mt-3 fw-bold">Payment Failed</h5>
          <p>It looks like your payment didn't go through, you can try the payment again!</p>
        </div>
      `

    // Restore the original modal footer with two buttons
    modalFooter.innerHTML = `
        
        <button type="button" class="second-btn" data-bs-dismiss="modal">Close</button>
        <button id="try-btn" type="button" class="btn-main">Try Again</button>
      `

    var tryBtn = document.querySelector("#try-btn")
    tryBtn.addEventListener("click", function () {
      var modalBody = document.querySelector("#addBalanceModal .modal-body")
      var modalTitle = document.querySelector("#addBalanceModal .modal-title")
      var modalImage = document.querySelector("#addBalanceModal .modal-image")
      var modalFooter = document.querySelector("#addBalanceModal .modal-footer")

      // Update the modal title
      modalTitle.textContent = "Complete Payment"

      // Update the modal body
      modalBody.innerHTML = `
        <div class="text-center">
          <img src="../../assets/images/congrats.svg" class="img-fluid" alt="Payment Failed Image">
          <h5 class="mt-3 fw-bold">Congratulations</h5>
          <p>Your payment has been processed successfully.</p>
          <div class="d-flex justify-content-center">
          <button id="pay-btn" type="submit" class="btn-main w-100">Continue</button>
        </div>
        </div>
      `
      // Remove all buttons from the modal footer
      var buttons = modalFooter.querySelectorAll("button")
      buttons.forEach(function (button) {
        button.remove()
      })
    })
  })
}
//Wallet Withdrawal Modal
function submitWithdrawal() {
  var modalBody = document.querySelector("#withdrawalModal .modal-body")
  var modalTitle = document.querySelector("#withdrawalModal .modal-title")
  var modalFooter = document.querySelector("#withdrawalModal .modal-footer")

  // Update the modal title
  modalTitle.textContent = "Complete Payment"

  // Update the modal body
  modalBody.innerHTML = `
        <div class="text-center">
          <img src="../../assets/images/payment-error.svg" class="img-fluid" alt="Payment Failed Image">
          <h5 class="mt-3 fw-bold">Withdrawal Failed</h5>
          <p>It looks like your withdrawal didn't go through, you can try again!</p>

        </div>
      `
  modalFooter.innerHTML = `
        
        <button type="button" class="second-btn" data-bs-dismiss="modal">Close</button>
        <button id="withdraw-try-btn" type="button" class="btn-main">Try Again</button>
      `

  // Add an event listener for the try-btn inside the modal body

  var tryBtn = document.querySelector("#withdraw-try-btn")
  tryBtn.addEventListener("click", function () {
    var modalBody = document.querySelector("#withdrawalModal .modal-body")
    var modalTitle = document.querySelector("#withdrawalModal .modal-title")
    var modalFooter = document.querySelector("#withdrawalModal .modal-footer")

    // Update the modal title
    modalTitle.textContent = "Complete Payment"

    // Update the modal body
    modalBody.innerHTML = `
        <div class="text-center">
          <img src="../../assets/images/congrats.svg" class="img-fluid" alt="Payment Failed Image">
          <h5 class="mt-3 fw-bold">Congratulations</h5>
          <p>Your request was sent successfully.</p>
          <div class="d-flex justify-content-center">
          <button id="pay-btn" type="submit" class="btn-main w-100" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
      `
    // Remove all buttons from the modal footer
    var buttons = modalFooter.querySelectorAll("button")
    buttons.forEach(function (button) {
      button.remove()
    })
  })
}
