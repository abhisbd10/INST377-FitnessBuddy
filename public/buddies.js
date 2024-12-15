document.getElementById('zipcodeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const zipcode = document.getElementById('zipcode').value;

  const geocodeUrl = `https://nominatim.openstreetmap.org/search?postalcode=${zipcode}&format=json&countrycodes=US`;

  fetch(geocodeUrl)
      .then(response => response.json())
      .then(data => {
          if (data.length === 0) {
              alert('No results found for this zipcode.');
              return;
          }

          const location = data[0];
          const lat = location.lat;
          const lon = location.lon;

          const overpassUrl = `
              https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];nwr["leisure"="fitness_centre"](around:16093,${lat},${lon});out geom;
          `;

          fetch(overpassUrl)
              .then(response => response.json())
              .then(placesData => {
                  if (placesData.elements.length === 0) {
                      document.getElementById('gymResults').innerHTML = 'No fitness centres found in your area. Please try a different location.';
                  } else {
                      displayGyms(placesData.elements);
                  }
              })
              .catch(error => {
                  console.error('Error fetching fitness centres:', error);
                  document.getElementById('gymResults').innerHTML = 'An error occurred while fetching fitness centre data.';
              });
      })
      .catch(error => {
          console.error('Error geocoding zipcode:', error);
          document.getElementById('gymResults').innerHTML = 'An error occurred while geocoding the zipcode.';
      });
});

function displayGyms(placesData) {
  const gymResultsDiv = document.getElementById('gymResults');
  gymResultsDiv.innerHTML = ''; 

  const gymNames = placesData.map(place => place.tags.name || 'Unnamed Fitness Centre');

  const gymCount = gymNames.reduce((acc, gym) => {
      acc[gym] = (acc[gym] || 0) + 1;
      return acc;
  }, {});

  const gymLabels = Object.keys(gymCount);
  const gymData = Object.values(gymCount);

  createGymChart(gymLabels, gymData);
}

function createGymChart(labels, data) {
  const ctx = document.getElementById('gymChart').getContext('2d');
  new Chart(ctx, {
      type: 'bar', 
      data: {
          labels: labels,
          datasets: [{
              label: 'Number of Fitness Centres',
              data: data,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
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

