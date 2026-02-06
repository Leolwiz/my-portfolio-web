function Formvalidation() {
    let email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email");
        return false;
    }

    alert("Message succefully sent to the email");
    return true;
}