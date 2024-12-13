const host = window.location.origin;

async function createUsers() {
  console.log("Creating Users");
  await fetch(`${host}/user`, {
    method: "POST",
    body: JSON.stringify({
      userName: `${document.getElementById("name").value}`,
      userEmail: `${document.getElementById("email").value}`,
      userAvailability: `${document.getElementById("availability").value}`,
      userLocation: `${document.getElementById("location").value}`,
      userFitnessPreference: `${
        document.getElementById("workout-preferences").value
      }`,
      userGoal: `${document.getElementById("fitness-goals").value}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  await loadUsersData();
}

async function loadUsersData() {
  await fetch(`${host}/user`)
    .then((res) => res.json())
    .then((resJson) => {
      const table = document.createElement("table");
      table.setAttribute("id", "userInfo");

      const tableRow = document.createElement("tr");

      const tableHeading1 = document.createElement("th");
      tableHeading1.innerHTML = "Full Name";
      tableRow.appendChild(tableHeading1);

      const tableHeading2 = document.createElement("th");
      tableHeading2.innerHTML = "Email";
      tableRow.appendChild(tableHeading2);

      const tableHeading3 = document.createElement("th");
      tableHeading3.innerHTML = "Availability";
      tableRow.appendChild(tableHeading3);

      const tableHeading4 = document.createElement("th");
      tableHeading4.innerHTML = "Location";
      tableRow.appendChild(tableHeading4);

      const tableHeading5 = document.createElement("th");
      tableHeading5.innerHTML = "Workout Preferences";
      tableRow.appendChild(tableHeading5);

      const tableHeading6 = document.createElement("th");
      tableHeading6.innerHTML = "Fitness Goals";
      tableRow.appendChild(tableHeading6);

      table.appendChild(tableRow);

      resJson.forEach((user) => {
        const userTableRow = document.createElement("tr");
        const userTableFullName = document.createElement("td");
        const userTableEmail = document.createElement("td");
        const userTableAvailability = document.createElement("td");
        const userTableLocation = document.createElement("td");
        const userTableWorkoutPreferences = document.createElement("td");
        const userTableFitnessGoals = document.createElement("td");

        userTableFullName.innerHTML = user.user_name;
        userTableEmail.innerHTML = user.user_email;
        userTableAvailability.innerHTML = user.user_availability;
        userTableLocation.innerHTML = user.user_location;
        userTableWorkoutPreferences.innerHTML = user.user_fitnessPreferences;
        userTableFitnessGoals.innerHTML = user.user_goals;

        userTableRow.appendChild(userTableFullName);
        userTableRow.appendChild(userTableEmail);
        userTableRow.appendChild(userTableAvailability);
        userTableRow.appendChild(userTableLocation);
        userTableRow.appendChild(userTableWorkoutPreferences);
        userTableRow.appendChild(userTableFitnessGoals);

        table.appendChild(userTableRow);
      });

      const preExistingTable = document.getElementById("userInfo");
      if (preExistingTable) {
        preExistingTable.remove();
      }

      document.body.appendChild(table);
    });
}

window.onload = loadUsersData;

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
