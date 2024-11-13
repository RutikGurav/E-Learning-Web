// // For redirecting between pages after form submissions
// document.getElementById("startBtn")?.addEventListener("click", function() {
//     window.location.href = "create-account.html"; // Redirect to account creation page
// });

// // Handle account creation
// document.getElementById("createAccountForm")?.addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Get input values
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Store email and password in localStorage
//     localStorage.setItem("userEmail", email);
//     localStorage.setItem("userPassword", password);

//     alert("Account created successfully!");
//     window.location.href = "login.html"; // Redirect to login page
// });

// // Handle login validation
// document.getElementById("loginForm")?.addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Get input values
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Retrieve stored email and password
//     const storedEmail = localStorage.getItem("userEmail");
//     const storedPassword = localStorage.getItem("userPassword");

//     // Validate credentials
//     if (email === storedEmail && password === storedPassword) {
//         alert("Login successful!");
//         window.location.href = "courses.html"; // Redirect to courses page
//     } else {
//         alert("Invalid email or password. Please try again.");
//     }
// });

// // Handle payment form submission
// document.getElementById("paymentForm")?.addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Retrieve payment method
//     const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

//     // Retrieve card details
//     const cardNumber = document.getElementById("card").value;
//     const expiryDate = document.getElementById("expiry").value;
//     const cvv = document.getElementById("cvv").value;

//     // Check if payment method is selected
//     if (paymentMethod) {
//         alert(`Payment successful using ${paymentMethod.value}!\nCard Number: ${cardNumber}\nExpiry Date: ${expiryDate}\nCVV: ${cvv}`);
//         window.location.href = "payment-success.html"; // Redirect to payment success page
//     } else {
//         alert("Please select a payment method.");
//     }
// });

// // Show the modal when "Proceed to Payment" button is clicked
// document.getElementById("openModalBtn")?.addEventListener("click", function() {
//     const paymentMethod = document.getElementById("paymentMethod").value;
//     if (paymentMethod) {
//         document.getElementById("paymentModal").style.display = "block"; // Show the modal
//     } else {
//         alert("Please select a payment method.");
//     }
// });

// // Close the modal
// document.querySelector(".close")?.addEventListener("click", function() {
//     document.getElementById("paymentModal").style.display = "none"; // Hide the modal
// });

// // Handle payment form submission
// document.getElementById("paymentDetailsForm")?.addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Retrieve payment method
//     const paymentMethod = document.getElementById("paymentMethod").value;

//     // Retrieve card details
//     const cardNumber = document.getElementById("card").value;
//     const expiryDate = document.getElementById("expiry").value;
//     const cvv = document.getElementById("cvv").value;

//     // Alert success message and redirect
//     alert(`Payment successful using ${paymentMethod}!\nCard Number: ${cardNumber}\nExpiry Date: ${expiryDate}\nCVV: ${cvv}`);
//     window.location.href = "payment-success.html"; // Redirect to payment success page
// });


// function validateAndRedirect() {
//     const mobileNumber = document.getElementById("mobile-number").value;
  
//     // Validate if the mobile number is entered
//     if (mobileNumber.length !== 10) {
//       alert("Please enter a valid 10-digit mobile number.");
//     } else {
//       alert("Welcome and thanks for enrolling!");
//       // Redirect to the courses page
//       window.location.href = "courseslist.html";
//     }
//   }
  
// // Handle Enroll button click
// document.querySelectorAll('.enroll-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const courseName = this.getAttribute('data-course');
//         const amount = this.getAttribute('data-amount');

//         // Pre-fill course details in the payment form
//         document.getElementById('courseName').value = courseName;
//         document.getElementById('amount').value = amount;

//         // Show the payment form
//         document.querySelector('.form-container').style.display = 'block';
//     });
// });

// // Open the payment modal on button click
// document.getElementById('openModalBtn').addEventListener('click', function() {
//     document.getElementById('paymentModal').style.display = 'block';
// });

// // Close modal when clicking the close button
// document.querySelector('.close').addEventListener('click', function() {
//     document.getElementById('paymentModal').style.display = 'none';
// });

// // Close modal when clicking outside the modal content
// window.onclick = function(event) {
//     const modal = document.getElementById('paymentModal');
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// };

// // Payment form validation
// document.getElementById('paymentDetailsForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting immediately

//     // Example payment validation (just a basic check)
//     const card = document.getElementById('card').value;
//     const expiry = document.getElementById('expiry').value;
//     const cvv = document.getElementById('cvv').value;

//     if (card.length === 16 && expiry.match(/^\d{2}\/\d{2}$/) && cvv.length === 3) {
//         alert('Payment successful!');
//         document.getElementById('paymentModal').style.display = 'none';
//     } else {
//         alert('Invalid payment details');
//     }
// });

// // Handle Enroll button click
// document.querySelectorAll('.enroll-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const courseName = this.getAttribute('data-course');
//         const amount = this.getAttribute('data-amount');

//         // Pre-fill course details in the payment form
//         document.getElementById('courseName').value = courseName;
//         document.getElementById('amount').value = amount;

//         // Show the payment form (in case it's hidden initially)
//         document.querySelector('.form-container').style.display = 'block';
//     });
// });



// // Handle Enroll button click
// document.querySelectorAll('.enroll-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const courseName = this.getAttribute('data-course');
//         const amount = this.getAttribute('data-amount');

//         // Pre-fill course details in the payment form
//         document.getElementById('courseName').value = courseName;
//         document.getElementById('amount').value = amount;

//         // Show the payment form
//         document.querySelector('.form-container').style.display = 'block';
//     });
// });

// // Open the payment modal on button click
// document.getElementById('openModalBtn').addEventListener('click', function() {
//     document.getElementById('paymentModal').style.display = 'block';
// });

// // Close modal when clicking the close button
// document.querySelector('.close').addEventListener('click', function() {
//     document.getElementById('paymentModal').style.display = 'none';
// });



// Redirect to account creation page
document.getElementById("startBtn")?.addEventListener("click", function() {
    window.location.href = "create-account.html";
});

// Handle account creation
document.getElementById("createAccountForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Account created successfully!");
    window.location.href = "login.html";
});

// Handle login validation
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "courses.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Handle payment form submission
document.getElementById("paymentForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    const cardNumber = document.getElementById("card").value;
    const expiryDate = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    if (paymentMethod) {
        alert(`Payment successful using ${paymentMethod.value}!\nCard Number: ${cardNumber}\nExpiry Date: ${expiryDate}\nCVV: ${cvv}`);
        window.location.href = "payment-success.html";
    } else {
        alert("Please select a payment method.");
    }
});

// Open payment modal
document.getElementById("openModalBtn")?.addEventListener("click", function() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    if (paymentMethod) {
        document.getElementById("paymentModal").style.display = "block";
    } else {
        alert("Please select a payment method.");
    }
});

// Close modal
document.querySelector(".close")?.addEventListener("click", function() {
    document.getElementById("paymentModal").style.display = "none";
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("paymentModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Payment form validation
document.getElementById('paymentDetailsForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const card = document.getElementById('card').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    if (card.length === 16 && expiry.match(/^\d{2}\/\d{2}$/) && cvv.length === 3) {
        alert('Payment successful!');
        document.getElementById('paymentModal').style.display = 'none';
    } else {
        alert('Invalid payment details');
    }
});


// Select all enroll buttons
document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', function() {
        const courseName = this.getAttribute('data-course');
        const amount = this.getAttribute('data-amount');

        // Redirect to the payment form (or show the form on the same page)
        window.location.href = `payment.html?course=${encodeURIComponent(courseName)}&amount=${encodeURIComponent(amount)}`;
    });
});



function validateAndRedirect() {
    // Perform any validation if necessary
    const mobileNumber = document.getElementById('mobile-number').value;
    
    // Optionally, add validation for the mobile number here
    if (mobileNumber.length === 10) {
        // Redirect to courseslist.html
        window.location.href = 'courses.html';
    } else {
        alert('Please enter a valid mobile number');
    }
}

