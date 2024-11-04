# mtm6302-capstone-gouh0002

Name: Hanane Gouhmid
Student Number: 041126257
Project: Pokedex

## PokeHUB Mockup Design Decisions

**Key Considerations:**

- **User-friendliness:** The primary goal was to create a visually appealing and intuitive user interface.
- **Accessibility:** The design is designed to be accessible to a wide range of users, with clear and concise information and user-friendly interactions.
- **Functionality:** The mockup prioritizes core features such as browsing, catching, and releasing Pokemon.
- **Visual Appeal:** The design uses a bright and colorful palette, inspired by the Pokemon universe.

**Design Elements:**

- **Navigation:**
  - The top navigation bar offers three tabs: "ALL", "Caught", and "Free". This allows users to easily filter the Pokemon based on their status.
- **Pokemon Display:**
  - Each Pokemon is displayed in a square card format with its image and name.
  - The "ALL" tab shows all available Pokemon.
  - The "Caught" tab displays the Pokemon that the user has caught.
  - The "Free" tab shows the Pokemon that are still available to be caught.
- **Pokemon Information:**
  - When a user clicks on a Pokemon card, a modal appears displaying its image, types, and abilities.
  - Users can catch or close the modal based on their preference.
- **Actions:**
  - Buttons for "Catch More" and "Release All" are prominently displayed for users to manage their Pokemon.
- **Color Scheme:**
  - The color scheme utilizes a vibrant blue, light blue, and white combination, creating a clean and playful feel.
- **Typography:**
  - **Irish Grover:** Used for the buttons and the title, adding a playful and energetic feel.
  - **Inria Sans:** Used for the Pokemon names, providing a clean and modern look.

**Overall Design:**

- The design prioritizes simplicity and user-friendliness.
- The use of clear buttons, legible text, and engaging visuals ensures a positive user experience.
- The layout is visually appealing, with a focus on organization and clarity.

This mockup provides a starting point for the PokeHUB website, offering a user-friendly and engaging platform for Pokemon enthusiasts.

## Overview

PokeHub is a web application that displays a gallery of Pokémon, allowing users to explore and mark Pokémon as "caught." The app utilizes HTML, CSS, JavaScript, and the PokeAPI to load Pokémon data dynamically.

## Prototype Development Report

### Steps Taken

- **Static Pokémon List**: A list of Pokémon was initially created in a static HTML file to serve as the main gallery.
- **Detail View**: A `div` element was added to show details for a selected Pokémon. At this stage, this view only displays details for one specific Pokémon, regardless of which one is clicked.
- **Navigation Filters**: JavaScript was used to implement navigation filters for different Pokémon statuses — **All**, **Caught**, and **Free** — allowing users to view Pokémon based on their caught status.

### Challenges Faced

- **Dynamic Detail Display**: A challenge encountered is making the detail view update dynamically according to the selected Pokémon. Currently, the detail div displays only one Pokémon's information, which will be refined further with additional JavaScript functionality.

## Resources Used

- **HTML/CSS**: For building the basic structure and styling of the app.
- **JavaScript**: For implementing interactivity, including the navigation filters.
- **PokeAPI**: Will be used to dynamically load Pokémon data in future development.

---
