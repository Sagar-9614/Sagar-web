document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const formMessage = document.getElementById('formMessage');

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();

            if (name.length < 2) {
                showMessage('Please enter a valid name', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            showMessage('🎉 Registration successful! We\'ll contact you soon.', 'success');

            registerForm.reset();
        });
    }

    function showMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.style.opacity = '0';
            formMessage.style.transition = 'opacity 0.5s ease-in-out';

            setTimeout(() => {
                formMessage.style.opacity = '1';
                formMessage.style.color = type === 'error' ? '#e74c3c' : '#27ae60';
                formMessage.style.backgroundColor = type === 'error' ? '#fad7d7' : '#d4edda';
            }, 100);
        }
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

// 🎭 Animate Performance Selection
function showPerformance(type) {
    const title = document.getElementById("performance-title");
    const list = document.getElementById("performance-list");

    list.innerHTML = ""; 
    title.innerHTML = "✨ Loading..."; 
    list.classList.remove("fade-in");

    setTimeout(() => {
        if (type === "dance") {
            title.innerHTML = "🩰 Dance Performances";
            list.innerHTML = `
                <li class="slide-in">Sayan - Solo Dance (5 min) (Song: "Nagada Sang Dhol")</li>
                <li class="slide-in">Hritika - Classical Dance (2 min) (Song: "Mohe Rang Do Laal")</li>
                <li class="slide-in">Group Dance - Featuring Soma, Bhomika, Somjyoti, Parul (20 min) (Song: "Ghoomar")</li>
            `;
        } else if (type === "poetry") {
            title.innerHTML = "📜 Poetry Performances";
            list.innerHTML = `
                <li class="slide-in">Anushree - Classical Poetry (10 min) (Poem: "The Road Not Taken")</li>
                <li class="slide-in">Gourov - Intern Performance (5 min) (Poem: "Where The Mind Is Without Fear")</li>
                <li class="slide-in">Bhumika Mandal - Special Recital (5 min) (Poem: "Invictus")</li>
            `;
        } else if (type === "songs") {
            title.innerHTML = "🎶 Song Performances";
            list.innerHTML = `
                <li class="slide-in">Puskar Roy - Solo Singing (20 min) (Song: "Kesariya")</li>
                <li class="slide-in">Asif Rahaman - Light Music (6 min) (Song: "Perfect")</li>
                <li class="slide-in">Group Song - Featuring Puskar, Asif, Raja, Bhendi (25 min) (Song: "We Don't Talk Anymore")</li>
            `;
        }
        list.classList.add("fade-in");
    }, 300);
}

// ⏳ Countdown Timer with Glow Effect
function startCountdown() {
    const eventDate = new Date("February 23, 2025 11:30:00").getTime();
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            countdownElement.innerHTML = "🎉 Event Started!";
            countdownElement.classList.add("glow");
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `📅 ${days}d ${hours}h ${minutes}m ${seconds}s`;
        countdownElement.classList.add("glow");
        setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
}

// 📝 Animated Comments Section
function addComment() {
    const commentInput = document.getElementById("commentInput");
    const commentText = commentInput.value.trim();

    if (commentText === "") {
        alert("Please enter a comment.");
        return;
    }

    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(comments));

    loadComments();
    commentInput.value = "";
}

function loadComments() {
    const commentList = document.getElementById("commentList");
    commentList.innerHTML = "";

    let comments = JSON.parse(localStorage.getItem("comments")) || [];

    comments.forEach((comment, index) => {
        let li = document.createElement("li");
        li.textContent = comment;
        li.classList.add("fade-in");

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.onclick = () => deleteComment(index);

        li.appendChild(deleteBtn);
        commentList.appendChild(li);
    });
}

function deleteComment(index) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    loadComments();
}

// Initialize countdown
document.addEventListener("DOMContentLoaded", () => {
    startCountdown();
    loadComments();
});
document.addEventListener("keydown", function (event) {
    if (
        event.key === "PrintScreen" || 
        event.ctrlKey && (event.key === "p" || event.key === "s" || event.key === "u") ||
        event.metaKey && (event.key === "p" || event.key === "s" || event.key === "u")
    ) {
        event.preventDefault();
        alert("📸 Screenshot and copying are disabled on this website.");
    }
});

/* Prevent PrintScreen Key */
document.addEventListener("keyup", function (event) {
    if (event.key === "PrintScreen") {
        alert("📸 Screenshot is disabled!");
    }
});

/* Disable Right-Click */
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("🚫 Right-click is disabled.");
});
// Show Popup on Page Load
window.onload = function () {
    showPopup();
};

// Function to Create and Show Popup with Password
function showPopup() {
    // Prevent Scrolling
    document.body.style.overflow = "hidden"; 

    // Create Overlay
    let overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0, 0, 0, 0.5)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "1000";

    // Create Popup Content
    let popupContent = document.createElement("div");
    popupContent.style.background = "white";
    popupContent.style.padding = "25px";
    popupContent.style.borderRadius = "12px";
    popupContent.style.textAlign = "center";
    popupContent.style.width = "320px";
    popupContent.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
    popupContent.style.opacity = "0";
    popupContent.style.transform = "scale(0.8)";
    popupContent.style.transition = "opacity 0.5s, transform 0.5s";

    // Add Content to Popup
    popupContent.innerHTML = `
        <div style="font-size: 40px; margin-bottom: 10px;">🔒</div>
        <h2 style="font-size: 22px; margin-bottom: 10px;">Enter Password</h2>
        <p style="font-size: 16px; margin-bottom: 15px; color: #444;">Please enter the correct password to proceed.</p>
        <input type="password" id="passwordInput" placeholder="Enter Password" 
            style="width: 90%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px; text-align: center;">
        <p id="errorMessage" style="color: red; font-size: 14px; display: none;">❌ Incorrect password</p>
        <button id="checkPassword" style="
            width: 100%; 
            padding: 12px; 
            background: #2563EB; 
            color: white; 
            font-size: 16px;
            font-weight: bold;
            border: none; 
            border-radius: 8px; 
            cursor: pointer;
            transition: background 0.3s;">
            Submit
        </button>
    `;

    // Append Popup Content to Overlay
    overlay.appendChild(popupContent);
    document.body.appendChild(overlay);

    // Allow Interactions
    popupContent.style.pointerEvents = "auto";
    
    // Fade-in Animation
    setTimeout(() => {
        popupContent.style.opacity = "1";
        popupContent.style.transform = "scale(1)";
    }, 100);

    // Add Click Event to Button
    document.getElementById("checkPassword").addEventListener("click", function () {
        let inputPassword = document.getElementById("passwordInput").value;
        let correctPassword = generatePassword();

        // Check if Master Password is Already Used
        let masterUsed = localStorage.getItem("masterUsed");

        if (inputPassword === "sagar" && !masterUsed) {
            // Master Password Works, But Only Once
            localStorage.setItem("masterUsed", "true");
            closePopup();
        } else if (inputPassword === "sagar" && masterUsed) {
            document.getElementById("errorMessage").innerText = "❌ Master password has already been used!";
            document.getElementById("errorMessage").style.display = "block";
        } else if (inputPassword === correctPassword) {
            // Dynamic Password Works Normally
            closePopup();
        } else {
            document.getElementById("errorMessage").innerText = "❌ Incorrect password";
            document.getElementById("errorMessage").style.display = "block";
        }
    });

    // Allow Enter Key to Submit Password
    document.getElementById("passwordInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            document.getElementById("checkPassword").click();
        }
    });
}

// Function to Generate Dynamic Password (Format: YYYYMMDDHHMM)
function generatePassword() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0'); // Added Minutes

    return `${year}${month}${day}${hour}${minute}`; // Example: 202502191423 (Feb 19, 2025, 14:23)
}

// Function to Close Popup
function closePopup() {
    let overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.remove();
            document.body.style.overflow = "auto"; // Restore scrolling
        }, 300);
    }
}
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && (e.key === "u" || e.key === "s")) e.preventDefault();
});
// Function to Show Performance Details
function showPerformance(type) {
    const title = document.getElementById("performance-title");
    const list = document.getElementById("performance-list");

    // Clear previous content
    list.innerHTML = "";
    title.innerHTML = "✨ Loading..."; 
    list.classList.remove("fade-in");

    setTimeout(() => {
        let performances = {
            "dance": {
                title: "🩰 Dance Performances",
                details: [
                    { name: "Sayan", type: "Solo Dance", duration: "5 min", song: "Nagada Sang Dhol" },
                    { name: "Hritika", type: "Classical Dance", duration: "2 min", song: "Mohe Rang Do Laal" },
                    { name: "Group Dance", type: "Group Performance", duration: "20 min", song: "Ghoomar" }
                ]
            },
            "poetry": {
                title: "📜 Poetry Performances",
                details: [
                    { name: "Anushree", type: "Classical Poetry", duration: "10 min", poem: "The Road Not Taken" },
                    { name: "Gourov", type: "Intern Performance", duration: "5 min", poem: "Where The Mind Is Without Fear" },
                    { name: "Bhumika Mandal", type: "Special Recital", duration: "5 min", poem: "Invictus" }
                ]
            },
            "songs": {
                title: "🎶 Song Performances",
                details: [
                    { name: "Puskar Roy", type: "Solo Singing", duration: "20 min", song: "Kesariya" },
                    { name: "Asif Rahaman", type: "Light Music", duration: "6 min", song: "Perfect" },
                    { name: "Group Song", type: "Group Singing", duration: "25 min", song: "We Don't Talk Anymore" }
                ]
            }
        };

        if (performances[type]) {
            title.innerHTML = performances[type].title;
            list.innerHTML = performances[type].details.map(performance => `
                <li class="slide-in">
                    <strong>${performance.name}</strong> - ${performance.type} (${performance.duration}) 
                    ${performance.song ? `(Song: "${performance.song}")` : `(Poem: "${performance.poem}")`}
                </li>
            `).join("");
        } else {
            title.innerHTML = "❌ No Performances Found";
            list.innerHTML = "<li>No details available.</li>";
        }

        list.classList.add("fade-in"); // Add animation
    }, 300); 
}