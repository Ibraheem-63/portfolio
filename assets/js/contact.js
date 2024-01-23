/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  //serviceID - templateID - #form # publicKey
  emailjs
    .sendForm(
      "service_11nzpsb",
      "template_yy4uwyp",
      "#contact-form",
      "0GTpLeRhqlCvvthYm"
    )
    .then(
      () => {
        // show sent message
        contactMessage.textContent = " Message sent successfully ✅";

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 10000);

        // clear input
        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);
