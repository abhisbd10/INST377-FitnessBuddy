async function createUsers(){
    console.log('Creating Users')
    await fetch('http://localhost:3000/Users', {
        method: 'POST',
        body: JSON.stringify({
            userName: `${document.getElementById('name').value}`,
            userEmail: `${document.getElementById('email').value}`,
            userAvailability: `${document.getElementById('availability').value}`,
            userLocation: `${document.getElementById('location').value}`,
            userFitnessPreference: `${document.getElementById('workout-preferences').value}`,
            userGoal: `${document.getElementById('fitness-goals').value}`
        }),
        headers:{
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());

await loadUsersData();
}

async function loadUsersData() {
    await fetch(`${host}/Users`)
      .then((res) => res.json())
      .then((resJson) => {
        const table = document.createElement('table');
        table.setAttribute('id', 'userInfo');
  
        const tableRow = document.createElement('tr');
  
        const tableHeading1 = document.createElement('th');
        tableHeading1.innerHTML = 'Full Name';
        tableRow.appendChild(tableHeading1);
  
        const tableHeading2 = document.createElement('th');
        tableHeading2.innerHTML = 'Email';
        tableRow.appendChild(tableHeading2);
  
        const tableHeading3 = document.createElement('th');
        tableHeading3.innerHTML = 'Availability';
        tableRow.appendChild(tableHeading3);

        const tableHeading4 = document.createElement('th');
        tableHeading4.innerHTML = 'Location';
        tableRow.appendChild(tableHeading4);

        const tableHeading5 = document.createElement('th');
        tableHeading5.innerHTML = 'Workout Preferences';
        tableRow.appendChild(tableHeading5);

        const tableHeading6 = document.createElement('th');
        tableHeading6.innerHTML = 'Fitness Goals';
        tableRow.appendChild(tableHeading6);
  
        table.appendChild(tableRow);
  
        resJson.forEach((user) => {
          const userTableRow = document.createElement('tr');
          const userTableFullName = document.createElement('td');
          const userTableEmail = document.createElement('td');
          const userTableAvailability = document.createElement('td');
          const userTableLocation = document.createElement('td');
          const userTableWorkoutPreferences = document.createElement('td');
          const userTableFitnessGoals= document.createElement('td');
  
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
  
        const preExistingTable = document.getElementById('userInfo');
        if (preExistingTable) {
          preExistingTable.remove();
        }
  
        document.body.appendChild(table);
      });
  }
  
  window.onload = loadUsersData;