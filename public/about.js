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

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("workoutChart").getContext("2d");

  const workoutChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Yoga", "Running", "Weightlifting", "Cycling", "Swimming"],
      datasets: [
        {
          label: "Workout Preferences",
         
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

