# PokeHUB - MTM6302 Capstone Project

**Name:** Hanane Gouhmid  
**Student Number:** 041126257  
**Project:** Pokedex

---

## Overview

PokeHub is a web application that displays a gallery of Pokémon, allowing users to explore and mark Pokémon as "caught." The app utilizes HTML, CSS, JavaScript, and the PokeAPI to load Pokémon data dynamically.

---

## Mockup Design Decisions

### Key Considerations

- **User-friendliness:** A visually appealing and intuitive user interface.
- **Accessibility:** Designed to be inclusive, with clear and concise information and user-friendly interactions.
- **Functionality:** Prioritized core features such as browsing, catching, and releasing Pokémon.
- **Visual Appeal:** Inspired by the bright and colorful palette of the Pokémon universe.

### Design Elements

- **Navigation:**
  - A top navigation bar with three tabs: **ALL**, **Caught**, and **Free**, enabling easy filtering based on Pokémon status.
- **Pokémon Display:**
  - Pokémon are presented in square card formats with their images and names.
  - Tabs:
    - **ALL:** Displays all available Pokémon.
    - **Caught:** Shows the Pokémon that have been caught.
    - **Free:** Displays Pokémon still available to catch.
- **Pokémon Information:**
  - Clicking on a Pokémon card opens a modal displaying its details, including image, type, and abilities.
  - Users can "Catch" or "Close" the modal.
- **Actions:**
  - Prominent buttons for "Catch More" and "Release All" to manage Pokémon.
- **Color Scheme:**
  - A vibrant palette of blue, light blue, and white for a playful and clean feel.
- **Typography:**
  - **Irish Grover:** Used for buttons and titles, adding an energetic and fun vibe.
  - **Inria Sans:** Used for Pokémon names, creating a clean and modern aesthetic.

---

## Prototype Development Report

### Steps Taken

1. **Static Pokémon List:**  
   Created a static list in an HTML file to display the initial Pokémon gallery.
2. **Detail View:**  
   Added a `div` element to display details for a selected Pokémon. (Currently, this only shows details for one specific Pokémon regardless of selection, which will be improved.)
3. **Navigation Filters:**  
   Implemented navigation filters using JavaScript:
   - **All:** Displays all Pokémon.
   - **Caught:** Displays only caught Pokémon.
   - **Free:** Displays uncaught Pokémon.

### Challenges Faced

- **Dynamic Detail Display:**  
  The detail view currently doesn't update dynamically for the selected Pokémon. This will be refined in future iterations using JavaScript.

---

## Resources Used

- **HTML/CSS:** For building the app's structure and styling.
- **JavaScript:** For interactivity and functionality (e.g., navigation filters, Pokémon details).
- **PokeAPI:** Will be integrated to dynamically fetch Pokémon data in later stages of development.

---

## Future Enhancements

- Integrate the PokeAPI for real-time Pokémon data.
- Improve the detail view functionality to display the correct Pokémon information dynamically.
- Add features like a search bar, Pokémon sorting options, and user account management.

---

## Author

**Hanane Gouhmid**  
Student of Interactive Media Design  
Algonquin College
