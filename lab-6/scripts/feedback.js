function fetchData() {
    document.addEventListener("DOMContentLoaded", async function () {
        try {
            showPreloader();

            let filter = getRandomId(10, 50);

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/comments?" + `${filter}`
            );

            if (response.ok) {
                hidePreloader();
                const comments = await response.json();
                const filteredComments = comments.filter(comment => parseInt(comment.id) >= filter)
                renderComments(filteredComments);
            } else {
                throw new Error("Bad request");
            }
        } catch (error) {
            console.error("Error:", error);
            showErrorMessage();
        }
    });
}

fetchData();


function showPreloader() {
    document.getElementById('preloader').style.display = "block";
}

function hidePreloader() {
    document.getElementById('preloader').style.display = "none";
}

function renderComments(comments) {
    try {
        const qa = document.getElementById('q&a');
        qa.innerHTML = '';
        comments.forEach((comment, index) => {
            const commentDiv = document.createElement('div');

            const authorSpan = document.createElement('h2');
            authorSpan.textContent = "Question from " + comment.email;

            const bodyParagraph = document.createElement('p');
            bodyParagraph.textContent = comment.body;

            const statusSpan = document.createElement('span');
            const randomStatus = getRandomStatus();
            statusSpan.textContent = randomStatus;
            statusSpan.style.padding = "5px";
            statusSpan.style.borderRadius = "5px";

            if (randomStatus === "RESOLVED") {
                statusSpan.style.backgroundColor = "green";
                statusSpan.style.color = "white";
            } else if (randomStatus === "WAITING ANSWER") {
                statusSpan.style.backgroundColor = "red";
                statusSpan.style.color = "white";
            } else if (randomStatus === "GIVE MORE CONTEXT") {
                statusSpan.style.backgroundColor = "yellow";
                statusSpan.style.color = "black";
            }

            commentDiv.id = index;
            const idDisplay = document.createElement('p');
            idDisplay.textContent = "ID: " + index;

            commentDiv.appendChild(authorSpan);
            commentDiv.appendChild(bodyParagraph);
            commentDiv.appendChild(idDisplay);
            commentDiv.appendChild(statusSpan);

            qa.appendChild(commentDiv);
        });
    } catch (error) {
        console.error("Error rendering comments:", error);
        showErrorMessage();
    }
}

function getRandomStatus() {
    const statuses = ["RESOLVED", "WAITING ANSWER", "GIVE MORE CONTEXT"];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
}



function getRandomColor() {
    const colors = ["red", "green", "yellow"]; // массив цветов
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}



function showErrorMessage() {
    alert("OOPS! Something went wrong\n" +
        "Fixing...")

    hidePreloader()
}

function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}
