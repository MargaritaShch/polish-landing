# Project: Twój urok

## Overview

Twój urok is a landing page dedicated to beauty and self-care, designed to showcase a revolutionary eyelash growth product. The site offers a unique product that promotes intense growth, strengthening, and volumizing of eyelashes.

### Key Features:

- **Dynamic Date Updates:** All dates on the site are automatically updated to display the current information to the user.
- **Order Form:** Users can quickly and easily place an order through a convenient form, providing their name and phone number.
- **Countdown Timer:** The site features a dynamic countdown timer, encouraging users to make a purchase.
- **Phone Number Validation:** The order form includes phone number validation to prevent the input of incorrect data.

## Technologies

The following technologies and approaches were used in the development of the landing page:

- HTML and CSS for page layout.
- JavaScript for dynamic elements such as the countdown timer and form validation.
- PHP for form data processing.

## Changes

During the project, the following changes were made:

- **Automatic Date Updates:** In `dtime_nums.js`, the script monitors the complete loading of DOM content and updates date elements. If the text content indicates "yesterday" or "the day before yesterday," the script adjusts the displayed date accordingly.
  
  ![Dynamic Date Updates](https://github.com/MargaritaShch/polish-landing/assets/109623903/f1ee67b3-134e-455a-8ca0-1e169c24c2af)
  
- **Replacement of Text Block with Order Form:** In `simple_timer.js`, the script starts a 25-minute countdown timer after the document content is fully loaded.
  
  ![Countdown Timer](https://github.com/MargaritaShch/polish-landing/assets/109623903/a0caae83-e72c-48c2-8097-a2551cd307ed)
- **Removal of Right Information Menu:** The right informational menu was removed to simplify the design.
- **Replacement of All Links with Anchor Links:** All links were replaced with anchor links to improve site navigation.
- **Phone Number Validation:** In the HTML, the script ensures that only numbers, plus signs, parentheses, and dashes can be entered in the phone number field. It removes all characters that do not match the specified pattern.
  
   ![Phone Number Validation](https://github.com/MargaritaShch/polish-landing/assets/109623903/75578942-534e-485d-a7cf-d6b383845c6b)
