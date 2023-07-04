# Access-Control-Lists-ACL-

Developed an ACL system to enable granular control over resource access. Implemented ACL rules to restrict or allow specific actions on resources based on user roles, attributes, or custom conditions. Integrated libraries like node-acl to manage ACL rules and enforce access restrictions.

## Key Features

- Implemented an ACL system to enable granular control over resource access based on user roles, attributes, or custom conditions.

- Developed an ACL rule management system using the acl library to define and enforce access restrictions.

- Integrated the ACL system into the existing Express.js server for seamless functionality.

### Technologies Used

`Node.js , Express.js , bcrypt ,jwt , acl`

### Run It

`cd backend`
`npm install`
`npm start`

##Set up environment variables:

## Create a .env file in the root directory.

## Define the following environment variables in the .env file:

## SECRET_KEY: Secret key used for JWT token signing.

## Other configuration variables if required.

- Usage and Authorization
- Use the /registerAsAdmin endpoint to register an admin user by providing the required data in the request body. You need to authenticate with a valid token and have the admin role to access this endpoint.

- For authentication, include the token in the Authorization header of the request using the Bearer scheme.
