const express = require('express');
const supabaseClient = require('@supabase/supabase-js');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://sqibpvhtdhgtekapgdeg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxaWJwdmh0ZGhndGVrYXBnZGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MTk5MzgsImV4cCI6MjA0ODk5NTkzOH0.Zu41ZFKZgUsaiyK98RX9S7XnHxphTD0gZE1lElYaHHg'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/users', async (req, res) => {
    console.log('Attempting to get all the users.');

    const {data, error} = await supabase
    .from('Users')
    .select()
    

    if (error) {
        console.log('Error:', error);  
        res.send(error);
    } else {
        console.log('Successfully Retrieved Data');
    res.send(data);

    }

});

app.post('/user', async (req, res) => {
    console.log('Attempting to add users.');

    console.log('Request', req.body)

    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    const userAvailability = req.body.userAvailability;
    const userLocation = req.body.userLocation;
    const userFitnessPreference = req.body.userFitnessPreference;
    const userGoal = req.body.userGoal;


    const {data, error} = await supabase.from('Users')
    .insert({'user_name': userName, 'user_email': userEmail, 'user_availability': userAvailability,
        'user_location': userLocation, 'user_fitnessPreferences' : userFitnessPreference,
        'user_goals': userGoal

    })
    .select();

    if (error) {
        console.log('Error:', error);  
        res.send(error);
    } else {
        console.log('Successfully Retrieved Data');
    res.send(data);

    }
});

app.listen(port, () => {
    console.log('App is working');
});
