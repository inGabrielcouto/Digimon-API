DIGIMON PROJECT

This project is a simple web application that displays information about Digimons (digital monsters) from the popular Digimon anime. It fetches information about Digimons from a public API, displaying their names, levels, types, and images. Additionally, it offers the functionality to filter Digimons by type.

Key Features

*Listing Digimons: It displays a list of Digimons, each with its name, level, type, and image.

*Type Filtering: It allows the user to enter a Digimon type in the search bar and filter the displayed Digimon list. When the user clicks the magnifying glass, only Digimons with the specified type are shown.

*Random Type Information: A unique feature of this project is that the types of Digimons are assigned randomly. This means that the displayed types do not necessarily correspond to the real types of Digimons from the anime. It's an interesting addition to make the project more fun.

Technologies Used
The project utilizes the following technologies:

React: It's the JavaScript library for building the user interface.

Axios: It's used to make requests to the API that provides Digimon data.

CSS: For styling the components.

React Hooks: To manage the application's state and effects.

External API: Digimon data is obtained from the public API at "https://digimon-api.vercel.app."

Project Structure
App.js: The root component of the application that handles search and primary rendering.

Header.js: Component that includes the search bar for filtering Digimons.

Main.js: Component that renders the list of Digimons.

DigimonCard.js: Component representing an individual Digimon card.

types.js: Contains an array of possible Digimon types.

Important Note
The public API used in this project does not provide the actual types of Digimons as per the Digimon anime series. Instead, the selection of types is random and may not match the TV series. Therefore, the types displayed in the project are generated randomly for fun and not for accuracy.

How to Run the Project
To run the project in your local environment, follow these steps:

Clone this repository to your machine.

Ensure you have Node.js installed.

Open your terminal in the project folder and run the command npm install to install the dependencies.

After installation, execute npm start. The application should start in your default web browser.