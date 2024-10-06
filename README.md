# User Data Management API

This is a Node.js and Express.js-based REST API for managing user data (including creating, reading, updating, and deleting user records). The API uses MongoDB for database storage and Mongoose for interacting with the database.

## Features
- **POST**: Create a new user record
- **GET**: Retrieve all user records
- **PUT**: Update a specific user record by ID
- **DELETE**: Delete a specific user record by ID

## Setup and Installation

### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v12 or later)
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
   
## Api Routes

1. post
   ```bash
   method put: http://localhost:5000/api/user/
   ```

2. get
  ```bash
  method get: http://localhost:5000/api/user/
  ```

3. update
   ```bash
   method put: http://localhost:5000/api/user/:id
   ```
   
4. delete
   ```bash
   method: delete: http://localhost:5000/api/user/:id
   ```

