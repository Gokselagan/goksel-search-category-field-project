SEARCH CATEGORY

The Search Category web application allows users to search for images based on a specific category. Users can enter a category name, click the "SEARCH" button, and view a selection of images related to that category. The images are fetched from the Unsplash API.

Features

Search for images based on a category name.
Display a selection of images related to the category.
Automatically converts entered category names to uppercase.


Technologies Used

HTML
CSS
JavaScript


Unsplash API for fetching images


How to Use

Open the index.html file in a web browser.
Enter a category name in the "Please Enter Category Name" input field.
Click the "SEARCH" button to fetch images related to the entered category.
View the images displayed in the #image-container.
The entered category name is automatically converted to uppercase.
You can search for different categories by entering new names and clicking "SEARCH".


Available Scripts

index.html: Contains the main HTML structure of the application, including the input field and search button.
style.css: Provides styles for the application, such as input field styling and image container layout.
script.js: Handles user interactions, such as fetching images from the Unsplash API based on the entered category, displaying images in the UI, and converting entered category names to uppercase.


API Used

The application uses the Unsplash API to fetch images based on the user's entered category name.
The API requires an access key for authorization, which is included in the code (API_KEY variable).


Code Structure

The HTML file (index.html) contains the main structure of the application, including the input field, search button, and image container.
The CSS file (style.css) provides styles for elements in the application, such as input fields and image display.
The JavaScript file (script.js) handles user interactions, such as fetching images from the API, creating image elements, displaying images in the UI, and converting category names to uppercase.


Additional Notes

Images are fetched from Unsplash based on the user's entered category name.
The createImageElements function dynamically creates image elements and appends them to the #image-container div.
Users can search for a variety of images by entering different category names.
The application provides a simple and intuitive interface for searching and viewing images based on categories.


Enjoy using the Search Category app to discover a variety of images based on different categories of interest!
