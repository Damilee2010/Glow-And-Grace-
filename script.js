
document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.querySelector('input[type="date"]');
    const timeInput = document.querySelector('input[type="time"]');

    // Load saved values if they exist
    if (localStorage.getItem("selectedDate")) {
        dateInput.value = localStorage.getItem("selectedDate");
    }
    if (localStorage.getItem("selectedTime")) {
        timeInput.value = localStorage.getItem("selectedTime");
    }

    // Save date when user selects it
    dateInput.addEventListener("change", function () {
        localStorage.setItem("selectedDate", this.value);
        console.log("Saved Date: " + this.value);
    });

    // Save time when user selects it
    timeInput.addEventListener("change", function () {
        localStorage.setItem("selectedTime", this.value);
        console.log("Saved Time: " + this.value);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    
    const submitButton = document.getElementById("submit");

    // Load saved data when the page loads
    if (localStorage.getItem("userName")) nameInput.value = localStorage.getItem("userName");
    if (localStorage.getItem("userEmail")) emailInput.value = localStorage.getItem("userEmail");
    if (localStorage.getItem("userPhone")) phoneInput.value = localStorage.getItem("userPhone");
    if (localStorage.getItem("selectedDate")) dateInput.value = localStorage.getItem("selectedDate");
    if (localStorage.getItem("selectedTime")) timeInput.value = localStorage.getItem("selectedTime");
   

    // Save user details when input changes
    nameInput.addEventListener("input", () => localStorage.setItem("userName", nameInput.value));
    emailInput.addEventListener("input", () => localStorage.setItem("userEmail", emailInput.value));
    phoneInput.addEventListener("input", () => localStorage.setItem("userPhone", phoneInput.value));
    dateInput.addEventListener("change", () => localStorage.setItem("selectedDate", dateInput.value));
    timeInput.addEventListener("change", () => localStorage.setItem("selectedTime", timeInput.value));

  
    // Show stored data when the user submits the form
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert(
            `Saved Data:
            Name: ${localStorage.getItem("userName")}
            Email: ${localStorage.getItem("userEmail")}
            Phone: ${localStorage.getItem("userPhone")}
            Date: ${localStorage.getItem("selectedDate")}
            Time: ${localStorage.getItem("selectedTime")}
           `
        );
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.querySelector(".info");
    const nextButton = document.querySelector(".bt4");

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            const date = document.querySelector("input[type='date']").value;
            const time = document.querySelector("input[type='time']").value;
            const name = document.querySelector("input[placeholder='name']").value;
            const phone = document.querySelector("input[placeholder='phone number']").value;
            const email = document.querySelector("input[placeholder='email']").value;

            if (date && time && name && phone && email) {
                localStorage.setItem("appointmentDate", date);
                localStorage.setItem("appointmentTime", time);
                localStorage.setItem("appointmentName", name);
                localStorage.setItem("appointmentPhone", phone);
                localStorage.setItem("appointmentEmail", email);
                
                window.location.href = "appointment-details.html";
            } else {
                alert("Please fill in all fields before proceeding.");
            }
        });
    }

    if (window.location.pathname.includes("appointment-details.html")) {
        document.getElementById("appointment-date").textContent = localStorage.getItem("appointmentDate") || "Not provided";
        document.getElementById("appointment-time").textContent = localStorage.getItem("appointmentTime") || "Not provided";
        document.getElementById("appointment-name").textContent = localStorage.getItem("appointmentName") || "Not provided";
        document.getElementById("appointment-phone").textContent = localStorage.getItem("appointmentPhone") || "Not provided";
        document.getElementById("appointment-email").textContent = localStorage.getItem("appointmentEmail") || "Not provided";
    }
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("appointment-date").textContent = localStorage.getItem("appointmentDate") || "Not selected";
    document.getElementById("appointment-time").textContent = localStorage.getItem("appointmentTime") || "Not selected";
    document.getElementById("appointment-name").textContent = localStorage.getItem("appointmentName") || "Not provided";
    document.getElementById("appointment-phone").textContent = localStorage.getItem("appointmentPhone") || "Not provided";
    document.getElementById("appointment-email").textContent = localStorage.getItem("appointmentEmail") || "Not provided";
   });

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("appointment-date").textContent = localStorage.getItem("appointmentDate") || "Not selected";
    document.getElementById("appointment-time").textContent = localStorage.getItem("appointmentTime") || "Not selected";
    document.getElementById("appointment-name").textContent = localStorage.getItem("appointmentName") || "Not provided";
    document.getElementById("appointment-phone").textContent = localStorage.getItem("appointmentPhone") || "Not provided";
    document.getElementById("appointment-email").textContent = localStorage.getItem("appointmentEmail") || "Not provided";
   });



document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user details
    const userName = localStorage.getItem("appointmentName") || "Not provided";
    const userEmail = localStorage.getItem("appointmentEmail") || "Not provided";
    const userPhone = localStorage.getItem("appointmentPhone") || "Not provided";
    const appointmentDate = localStorage.getItem("appointmentDate") || "Not selected";
    const appointmentTime = localStorage.getItem("appointmentTime") || "Not selected";
 

    // Populate the cart page
    document.getElementById("appointment-date").textContent = appointmentDate;
    document.getElementById("appointment-time").textContent = appointmentTime;
    document.getElementById("appointment-name").textContent = userName;
    document.getElementById("appointment-phone").textContent = userPhone;
    document.getElementById("appointment-email").textContent = userEmail;


    // Initialize EmailJS
    emailjs.init("PjfKWlfHMQV2Nin_i"); // Replace with your actual EmailJS Public Key

    // Send email on booking confirmation
    document.getElementById("confirm-booking").addEventListener("click", function () {
        const templateParams = {
            user_name: userName,
            user_email: userEmail,
            user_phone: userPhone,
            appointment_date: appointmentDate,
            appointment_time: appointmentTime,
            
        };

        emailjs.send("service_2ho6g5e", "template_pzyzba6", templateParams)
            .then(function (response) {
                alert("Booking confirmation sent to your email!");
                console.log("Email sent successfully", response.status, response.text);
            }, function (error) {
                alert("Failed to send email. Please try again.");
                console.log("Email send failed", error);
            });
    });
});






