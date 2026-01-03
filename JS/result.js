const showResult = document.getElementById("show-result");
const data = JSON.parse(localStorage.getItem("userData"));

if (!data) {
    window.location.href = "index.html";
} else {
    const div = document.createElement("div");
    div.innerHTML = `
        <p><strong>Name:</strong> ${data.fname}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Age:</strong> ${data.age}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>Hobbies:</strong> ${data.hobbies.join(", ")}</p>
    `;
    showResult.appendChild(div);
}
