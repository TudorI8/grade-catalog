# Student Grade Catalog

This project implements a student grade catalog, where you can manage a list of students, add grades, and sort both students and their grades based on certain criteria.

## Project Requirements

### I. HTML Page Structure

1. **Create an HTML page** that includes references to two external files:
   - `style.css` for styling.
   - `script.js` for functionality.

2. Inside the HTML page, create a `div` with the ID `lista_elevi_wrapper`, which will contain three main areas:

   1. **Functionality Title:** "Student List"
   2. **Add Student Form:** 
      - The form contains a text input for the student name and an "Add" button.
      - A new student can be added either by clicking the "Add" button or by pressing the "Enter" key on the keyboard.
   3. **Table Displaying Added Students:**
      - The table should contain three columns: 
        1. Student name.
        2. Average grade.
        3. A "View Grades" button.
      - Two buttons should be added to sort the students based on their average grade: ascending and descending.
      - Implement the "View Grades" button so that when pressed, a new `div` appears on the screen (requirement III).

### II. Student Grades Section

1. **Add another `div`** inside the HTML page with the ID `note_elev_wrapper`, which will contain four main areas:

   1. **A button to "Hide Grades",** which when pressed will hide the `note_elev_wrapper` `div`.
   2. **Area for Displaying the Selected Student's Name.**
   3. **Form to Add New Grades** for the selected student:
      - The form contains a `number` input and an "Add" button.
      - A grade can be added by either clicking the "Add" button or by pressing the "Enter" key on the keyboard.
   4. **Table Showing the Selected Student's Grades:**
      - The table contains a single column: `Grade`.
      - Two buttons should be added to sort the grades displayed on the screen: ascending and descending.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- Basic understanding of HTML, CSS, and JavaScript.

![Note ascunse](https://github.com/user-attachments/assets/ce0e5629-4540-42f3-96f3-9163eb4bdd1d)

![Note vizibile](https://github.com/user-attachments/assets/317f8761-0463-4fc0-afeb-3a82f02ce990)

### How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Courageuser/08-js-dom-Courageuser
