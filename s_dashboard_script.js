
const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "studentlogin.html";
});