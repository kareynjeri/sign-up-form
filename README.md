# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.jpg)

![](./Screenshot%202022-06-30%20at%2018.43.02.png)


**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript
- Mobile-first workflow
-



### What I learned
I learnt more about javascript functions like how to use  parameters

```css

.form-input-fields.error{
   
    border:1px solid var(--background-color);

  }

.form-input-fields.success {
    border: 1px solid rgb(56, 193, 56);

 /* i learnt about how to use pseudoclasses. like the success and error classes which would be applied one there is an error or success suing js */
}

```
```js
const setErrorFor = (element , message ) => {
    const forminputfields = element.parentElement ;
    const small = forminputfields.querySelector("small");
    forminputfields.className = 'form-input-fields error';
    small.innerText = message;

    // this function sets and error message and changes the color of input border once there is incorrect input 
}
```

```js

    if (firstName === '' || firstName === null  || firstName === 'karey') {
        setErrorFor(firstNameInput, 'first-name field cannot be empty' )

        // I learnt than i can castom write an error message in the function parameter.
        // i can also use variables as function parameter like this setErrorFor(firstNameInput).
    }
```



## Continued development


In the future i would like to store the error messages in an array. 
i would like to add more features such as when the use submits the form it shows a congartulation card  

## Author

- Frontend Mentor - [@kareynjeri](https://www.frontendmentor.io/profile/kareynjeri)
- Twitter - [kareynjeri1](https://www.twitter.com/Kareynjeri1)


