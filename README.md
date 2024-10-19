# registration-app-
## Prerequisites
- Node.js
- MySQL

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory.
2. Run npm install to install dependencies.
3. Configure MySQL credentials in db.js.
4. Create the database and table:
   - Open a MySQL terminal and run:
     sql
     CREATE DATABASE registration_db;
     USE registration_db;
     SOURCE backend/models/registrationModel.sql;
     
5. Start the backend server:
   ```bash
   npx nodemon backend/index.js
