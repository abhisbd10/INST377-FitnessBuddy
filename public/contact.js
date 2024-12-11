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
  