# Gadget Heaven

**Live Website**: [Live Website Link](https://gadget-heaven01.netlify.app/)  
**Requirement Document**: [Requirement Document Link](https://drive.google.com/file/d/1aBLaCDyupQj7Zt5C2uB2e9cPP2h0hP-s/view?usp=sharing)

## Project Overview

This project is a dynamic e-commerce website designed for users to explore, sort, and purchase a wide range of tech gadgets and accessories. Built with React, the site offers a responsive interface and prioritizes an intuitive user experience. Users can view detailed information on each product, add items to their shopping cart or wishlist, and sort or filter products by different attributes such as price and rating.

## React Fundamentals Used

- **Components**: Modular and reusable components are used throughout the application, making the code organized and scalable.
- **State Management**: Utilized both `useState` and `useReducer` hooks for local component state management.
- **Props**: Leveraged props to pass data between parent and child components, allowing flexible data handling.
- **Conditional Rendering**: Displayed UI elements conditionally based on user interactions and application state.
- **React Hooks**: Implemented `useEffect`, `useState`, and `useContext` to handle side effects, manage component lifecycle, and share global data.

## Data Handling and Management

- **Data Fetching**: The product data is fetched dynamically from an external API, ensuring that the user always has access to the latest information and updates.
- **useState**: Used for local state management within components, such as keeping track of the cart, wishlist, and product details.
- **useEffect**: Used to handle side effects like fetching data when the component mounts or when dependencies change.

## Key Features

1. **Product Details and Rating**: Each product displays detailed information along with a star rating feature, allowing users to quickly gauge product quality.
2. **Wishlist and Cart Management**: Users can add products to their wishlist or shopping cart, which are managed using Context API for a seamless experience.
3. **Sorting and Filtering**: Enables users to sort products by various criteria (e.g., price, rating) and filter based on categories, making it easy to find desired items.
4. **Responsive Design**: The website is fully responsive and optimized for desktop, tablet, and mobile devices.
5. **Dynamic Page Titles**: Each page dynamically updates the browser tab title to reflect the current view, enhancing the user experience.

## Technologies Used

- **React**
- **React Router**
- **Tailwind CSS**
- **useState, useEffect, useContext**
- **Data Fetching (API Integration)**
