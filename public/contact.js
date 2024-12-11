/* this is where we put the js for contact form so user cna send us conserns */
/* when they send the message, it should say thank you, you will reach out to you soon */

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var formMessage = document.getElementById("form-message");
  formMessage.style.display = "block";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  return false;
}

document.addEventListener("DOMContentLoaded", () => {
  const onButton = document.getElementById("audio-on");
  const offButton = document.getElementById("audio-off");

  if (annyang) {
    const commands = {
      "navigate to *page": (page) => {
        const target = page.toLowerCase();
        switch (target) {
          case "home":
            window.location.href = "home.html";
            break;
          case "about":
            window.location.href = "about.html";
            break;
          case "contact":
            window.location.href = "contact.html";
            break;
          case "find buddies":
            window.location.href = "buddies.html";
            break;
          case "profile":
            window.location.href = "profile.html";
            break;
          default:
            alert(`Unknown page: ${page}`);
        }
      },
    };

    annyang.addCommands(commands);

    onButton.addEventListener("click", () => {
      annyang.start();
      localStorage.setItem("isListening", "true");
      alert("Listening activated");
    });

    offButton.addEventListener("click", () => {
      annyang.abort();
      localStorage.setItem("isListening", "false");
      alert("Listening stopped");
    });

    if (localStorage.getItem("isListening") === "true") {
      annyang.start();
    }
  }
});
