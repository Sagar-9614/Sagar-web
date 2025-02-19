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