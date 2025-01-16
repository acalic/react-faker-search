## React Faker Search App

A responsive and dynamic web application built with React, TypeScript, and Vite, designed to provide fast and efficient search functionality.

### Features

- **Search Input**: Dynamic search bar with query and clearing functionality.
- **Search Results**: Simulated data generation and filtering using faker.js.
- **Sticky Header**: Always-visible header with conditional content based on the current route.
- **Responsive Design**: Adaptable layout for desktop and mobile screens.
- **Dynamic Routing**: Utilizes React Router for seamless navigation.

### Tech Stack

- **React**: Frontend library for building the user interface.
- **TypeScript**: Ensures type safety throughout the application.
- **Vite**: Lightning-fast development environment.
- **SCSS**: For styling and responsive design.
- **React Router**: For dynamic routing.
- **Jest & React Testing Library**: For unit and integration testing.
- **faker.js**: To generate mock data for search results.

### Installation

#### Prerequisites

- Node.js (v16 or later)
- npm or yarn

#### Steps

1. Clone the repository:
  ```bash
  git clone https://github.com/acalic/react-faker-search.git
  ```
2. Navigate to the project directory:
  ```bash
  cd react-faker-search
  ```
3. Install dependencies:
  ```bash
  yarn install
  ```
4. Start the development server:
  ```bash
  yarn dev
  ```

### Available Commands

| Command         | Description                              |
|-----------------|------------------------------------------|
| `yarn dev`   | Starts the development server.           |
| `yarn build` | Builds the application for production.   |
| `yarn preview` | Previews the production build locally. |
| `yarn test`  | Runs the test suite.                     |
| `yarn lint`  | Lints the codebase for errors.           |

### Project Structure

```bash
src/
├── assets/          # Static assets like images and icons
├── components/      # Reusable React components
├── pages/           # Application pages
├── styles/          # Global and modular SCSS files
├── types/           # TypeScript type definitions
├── App.tsx          # Root component
├── main.tsx         # Application entry point
```

### Testing

The app includes few unit tests as an example for some of the components using Jest and React Testing Library.

#### Running Tests

```bash
yarn test
```

Example test files are located alongside their respective components in the `__tests__` folder or within the component directory.

### Future Improvements

- Add support for backend API integration.
- Implement advanced search filters.
- Add pagination for search results.

### License

This project is licensed under the MIT License.