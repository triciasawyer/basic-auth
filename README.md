# Basic auth

## Author: Tricia Sawyer

### Project Overview

This project involves the deployment of an Express server that implements Basic Authentication, providing both signup and signin capabilities. The server uses a Postgres database for secure and efficient data storage.

### Setup

#### Environment Variables

Ensure you have the following environment variable defined in your `.env` file:

- `PORT`: Port variable to specify the server's listening port.

#### Initializing and Running the Application

To get the application up and running, follow these steps:

1. Clone the repository to your local machine.
2. Install project dependencies using `npm install`.
3. Start the server by running `nodemon` in your terminal.
4. To run tests, execute the command `npm test` in your terminal.

### Routes

The application provides the following routes:

- **POST** `/signin`: Endpoint for user sign-in.
- **POST** `/signup`: Endpoint for user sign-up.

### Deployement

Access the deployed version of the application at [Render deploy](https://basic-auth-prod.onrender.com)

### UML Diagram

![UML Diagram](./assets/basic-auth.png)

### Collaborators

Daniel Frey

### Links and Resources

- GitHub Actions: [View CI/CD Workflow](https://github.com/triciasawyer/basic-auth/actions)
- Backend Production Server: [Access Backend Server](https://basic-auth-prod.onrender.com)
