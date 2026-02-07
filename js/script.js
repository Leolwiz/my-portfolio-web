document.getElementById("contactForm")?.addEventListener("submit", function(e){
e.preventDefault();


const email = document.getElementById("email").value;
const message = document.getElementById("message").value;


if(email === "" || message === ""){
alert("Please fill all fields");
} else {
alert("Thank you! Your message has been sent successfully.");
this.reset();
}
});


// simple scroll animation
document.querySelectorAll('.card').forEach(card => {
card.addEventListener('mouseenter',()=>{
card.style.boxShadow='0 10px 20px rgba(0,0,0,0.15)';
});
card.addEventListener('mouseleave',()=>{
card.style.boxShadow='0 5px 15px rgba(0,0,0,0.08)';
});
});