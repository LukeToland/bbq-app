let emailCollectorForm = document.getElementById("email-collector");
emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault();

    const content = document.querySelector('.content');
    let formData = new FormData(event.target);
    let userFirstName = formData.get("fname");
    let userEmail = formData.get("email");

    let updateHtmlContent = `
    <h2>Congrats, ${userFirstName}!</h2>
    <p>You're well on your way now, BBQ Master!`;

    content.innerHTML = updateHtmlContent;

    console.log(userEmail);
});