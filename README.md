# Ecommerce Store

This is a fully scalable ecommerce store project created for my portfolio. It is not intended for real-world commercial use but demonstrates a complete, functional application.

## Demo

![Ecommerce Store Screenshot](./src/assets/EcommerceStore.png)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React.
- **Redux**: A predictable state container for JavaScript apps.
- **Firebase**: A comprehensive app development platform.
- **Stripe API**: A payment processing platform.
- **Jest**: A delightful JavaScript testing framework.
- **CSS in JS (Styled Components)**: Utilizes tagged template literals to style your components.
- **Redux-Saga**: A middleware library to handle side effects in Redux.
- **GraphQL**: A data query language for APIs.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

## Features

- **User Authentication**: Utilizes Firebase for user sign up, sign in, and authentication.
- **Product Management**: Allows browsing of different product categories like hats, jackets, sneakers, mens, and womens.
- **Shopping Cart**: Add, remove, and adjust product quantities in the cart.
- **Stripe Payments**: Integrated with Stripe for secure payments.
- **Responsive Design**: Ensures the store looks great on both desktop and mobile devices.
- **GraphQL Integration**: Uses GraphQL for efficient data fetching.
- **State Management**: Employs Redux and Redux-Saga for state management.
- **Type Safety**: Written in TypeScript to ensure type safety.
- **Testing**: Includes Jest for unit testing components.
- **Progressive Web App**: Supports offline capabilities and can be installed on the home screen of mobile devices.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or above)
- [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Depth-Hoar/depth-store.git
   cd ecommerce-store
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Set up Stripe:

Create a Stripe account and get your Stripe API keys. Create a .env file in the root directory.

```bash
 REACT_APP_STRIPE_PUBLISHABLE_KEY=your_key
 STRIPE_SECRET_KEY=your_key
```

### Running the Application

1. Start the development server:

```bash
 yarn start
```

Open your browser and navigate to http://localhost:3000.

## Contact

Created by [Your Name](https://depthhoar.com/) - feel free to contact me!

## Acknowledgements

Special thanks to all the open-source projects and libraries that made this project possible.

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Firebase](https://firebase.google.com/)
- [Stripe](https://stripe.com/)
- [Jest](https://jestjs.io/)
- [Styled Components](https://styled-components.com/)
- [Redux-Saga](https://redux-saga.js.org/)
- [GraphQL](https://graphql.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

Thank you for checking out my project!
