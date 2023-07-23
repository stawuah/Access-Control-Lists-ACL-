# Access-Control-Lists-ACL-

Developed an ACL system to enable granular control over resource access. Implemented ACL rules to restrict or allow specific actions on resources based on user roles, attributes, or custom conditions. Integrated libraries like node-acl to manage ACL rules and enforce access restrictions.

## Key Features

:closed_lock_with_key: User registration and authentication

:closed_lock_with_key: Role-based access control (RBAC)

:bulb: Fine-grained access control at the resource level

:shield: Secure session management

:mag: Error handling and logging

## :rocket: Getting Started

Clone this repository :

` git clone <repository-url>`

### Install Dependencies

` cd backend` and `npm install` all in the package.json

# Set up environment variables:

Create a `.env` file in the root directory.

Define the following environment variables in the .env file:

SECRET_KEY : Secret key used for JWT token signing.

Other configuration variables if required.

###Start the server:

:rocket: `npm start`

The server will start running on http://localhost:9000.

## API Endpoints

:rocket: POST /registerAsAdmin - Register an admin user. Requires authentication and admin role.

:parachute: Usage and Authorization :

Use the `/registerAsAdmin ` endpoint to register an admin user by providing the required data in the request body. You need to authenticate with a valid token and have the admin role to access this endpoint.

For authentication, include the token in the Authorization header of the request using the Bearer scheme.
