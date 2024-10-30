# Student Grade Catalog

This project implements a student grade catalog, where you can manage a list of students, add grades, and sort both students and their grades based on certain criteria.

## Project Requirements

### I. HTML Page Structure

1. **Create an HTML page** that includes references to two external files:

   - `style.css` for styling.
   - `app.js` for functionality.

2. Inside the HTML page, create a `div` with the ID `student_list_wrapper`, which will contain three main areas:

   1. **Functionality Title:** "Student Catalog"
   2. **Add Student Form:**
      - The form contains a text input for the student name and an "Add" button.
      - A new student can be added either by clicking the "Add" button or by pressing the "Enter" key on the keyboard.
   3. **Table Displaying Added Students:**
      - The table should contain three columns:
        1. Student name.
        2. Average grade.
        3. A "View Grades" button.
        4. A Delete button.
      - Two buttons should be added to sort the students based on their average grade: ascending and descending.
      - Implement the "View Grades" button so that when pressed, a new `div` appears on the screen (requirement 3).

### II. Student Grades Section

1. **Add another `div`** inside the HTML page with the ID `student_grades_wrapper`, which will contain four main areas:

   1. **A button to "Hide Grades",** which when pressed will hide the `student_grades_wrapper` `div`.
   2. **Area for Displaying the Selected Student's Name.**
   3. **Form to Add New Grades** for the selected student:
      - The form contains a `number` input and an "Add" button.
      - A grade can be added by either clicking the "Add" button or by pressing the "Enter" key on the keyboard.
   4. **Table Showing the Selected Student's Grades:**
      - The table contains two columns: `Grade`and `Delete`.
      - Two buttons should be added to sort the grades displayed on the screen: ascending and descending.

   The above requirements are represented in the gifs below:

![Hidden grades](https://github.com/user-attachments/assets/39b688ea-6daa-4334-8bfe-571e28608534)
![Visible grades](https://github.com/user-attachments/assets/6f3ff9bf-c3e7-43db-bfae-c5659e9db87e)

