# Description of Project

**MyFitnessBuddy**

[Go to Developer Manual](#developer-manual)

## Our goal
Our project aims to solve the problem of individuals feeling lonely when working out. We've created a website called _MyFitnessBuddy_ that leverages APIs, JavaScript Libraries, databases, and more to enable like-minded individuals to find a workout buddy based on their preferences and location. Our website also offers helpful tips and useful articles about getting fit and staying healthy.

## Targeted browsers & audience
Our targeted browsers are iOS, Android, and Google Chrome. iOS and Android devices are very popular amongst everyone ranging from adolescents to seniors and it's never too late to begin working out and staying fit. We've also targeted Google Chrome as an additional browser as it offers us complete functionality and control over our website without having to worry about glitches or bugs. With those browsers in mind, we aim to target a diverse audience with all kinds of fitness goals.

# Developer Manual

## Technical aspects & notes
a. To install MyFitnessBuddy and its dependencies, you need to clone the project repository using Git. Open your terminal, navigate to the directory where you want to store MyFitnessBuddy, and type git clone <repository_url>. Then, you need to install npm which you can do by running this command, install npm. It's simple as that.


b. To run our application on a server, you can run this command npm start on any software of your choice, I recommend using VS Code. 


c. To run our application for any tests written for our software, you would have to utilize a source code editor like Visual Studio Code with all of our files opened as well as a live server extension installed in your source code editor in order to run our application and conduct testing. In order to test APIs, you would have to have access to your API key and use Insomnia to test commands like GET.


d. Our main Api returns nearby gyms that are in a 10-mile radius when a user enters their Zip code, and it displays a chart with familiar gym names. Our other Api return user's information, like how many have signed in or part of our community. So whenever, users input their information, and hit submit, it will generate a table with their information plus other users. 


e. As of current date, known bugs only include certain web browser and JavaScript library conflicts. For example, our audio JavaScript library works perfectly fine when testing it in Google Chrome but when testing it in Microsoft Edge, it doesn't seem to work which has posed troubles and issues in the past. This may occur with just the audio JavaScript library or more libraries. We plan to deploy our website within the next 2 weeks after conducting more tests and finding the most optimal solutions.
