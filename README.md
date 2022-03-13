![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Interactive Frontend Development Resume - Walkthrough Project

In this project, an online resume is built for Rosie Odenkirk (fictitious developer). This project is extension of the [Bootstrap Resume Project](https://github.com/kmadjei/MiniProjectWithBootstrap4). 

The features of this project allows users to not only view Rosie's skills, but also send her an email, search and view her github projects, as well as view google map markers  of conferences Rosie has attended.

👉 [Quick Preview](https://kmadjei.github.io/InteractiveFrontendDevelopment-Resume/)

## Features
 
### Existing Features
- Home - Provides information about Rosie's background for users / clients
- Resume Page - showcases Rosie's experiences
- Contact - shows an online form for users to send an email to Rosie
- Download link - opens a new webpage for downloading an electronic copy of Rosie's CV
- 404 file - Sends user's error notification of pages that do not exist
- Interests page - shows google maps with  cluster location markers of meetups and conferences that Rosie has been involved with
- Github page - Allows for users to search for Rosie's github portfolio repositories without opening a new window 

## Technologies Used

- [HTML](https://www.w3schools.com/html/default.asp)
    - **HTML** served as the building block for this project

- [CSS](https://www.w3schools.com/css/default.asp)
    - **CSS** was used in this project to develop the aesthetics of the web pages

- [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
    - This project uses **Bootstrap 4** for the responsive web design to enhance the UX
    
- [Font Awesome 4.7](https://fontawesome.com/)
    - **Font Awesome** provides this website project, access to its library of icons 

- [JavaScript](https://www.w3schools.com/js/default.asp)
    - The project uses **JavaScript** to create dynamic content for  the website.

- [Google Maps API](https://developers.google.com/maps/gmp-get-started#quickstart)
    - The project uses **Google Maps API** to build a custom map for Rosie.
  
- [GitHub API](https://docs.github.com/en/rest)
    - The project uses the **GitHub API** to showcase Rosie's portfolio by linking to her repositories.

- [EmailJS SDK](https://www.emailjs.com/docs/)
    - The project uses **EmailJS SDK** to provide email services for the contact form.

## Testing

1. EmailJS SDK FormData test
     - implemented automated tests for HTTP API requests using promise functions
     -  Logs if request is successful or reveals error status 
     - Example:
     ```js
        myPromise.then(
        function(value) { /* code if successful */ },
        function(error) { /* code if some error */ }
        );
     ```

2. Contact Form:
    1. User tries to submit form with invalid information
    2. Inbuilt validation validates iin correct information has been inputted by user
    3. Prompts user to make sure all required form fields are filled

3. Responsiveness:
    1. As a user I expect the information presented in the project to be responsive on all devices
    2. Use chrome dev tools to check responsiveness of each web page  

4. User API Tests:
    1. On interest page, users is able to view custom map with clear location markers
    2. On GitHub page, when user searches for any github user name, it returns profile avatar along with list of repositories
    3. When users send email via contact form, Rosie must receive email sent

## Deployment

The project is uploaded on Github it can be view via github pages 👉 [HERE](https://kmadjei.github.io/InteractiveFrontendDevelopment-Resume/)


## Credits

### Content
- The contents presented in this project were provided by Code Institute as this was a [Walkthrough Project](https://github.com/Code-Institute-Solutions/GoogleMaps/tree/master/01-adding_the_map_element).

-  I added modifications to the JavaScript files and updated the navigation contents to look presentable and function as it should

### Acknowledgements

- I thank Matt Rudge, Instructor at The Code Institute, for his guidance on this project and piecing together all the lessons from the Interactive Frontend Development Module.

