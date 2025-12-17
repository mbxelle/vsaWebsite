# How to Run the VSA React App

This project was built using **React** and **Vite**. Follow the steps below to set up the development environment and run the application on your local machine.

## Prerequisites

Ensure you have **Node.js** (version 18 or higher) and **npm** installed. You can check by running:

```bash
node -v
npm -v
```

## Setup Instructions

1.  **Navigate to the project directory:**
    Open your terminal and enter the `vsa-react` folder where the React code lives:
    ```bash
    cd vsa-react
    ```

2.  **Install dependencies:**
    Run the following command to download the necessary packages:
    ```bash
    npm install
    ```

## Running the Application

### Development Mode
To start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
After running this, the terminal will provide a local URL (usually `http://localhost:5173`). Open this in your browser to view the site.

### Building for Production
To generate a production-ready build in the `dist/` folder:
```bash
npm run build
```

### Previewing the Production Build
To test the production build locally before deploying:
```bash
npm run preview
```

## Project Structure Notes
- **`src/`**: Contains all React components, hooks, and styles.
- **`public/`**: Stores static assets like images (`vsaTeam.png`, social icons, etc.).
- **`src/styles/components/`**: Individual CSS files for each section.


