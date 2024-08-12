Installation and Setup

Prerequisites
•	Node.js and npm installed on your machine.
•	MongoDB Atlas or a local MongoDB server set up.
•	Git installed to clone the repository.

Environment Variables
Create a .env file at the root of your project to store your MongoDB connection string:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
Replace <username>, <password>, and <dbname> with your actual MongoDB credentials.

Installing Dependencies
1.	Clone the repository:
git clone https://github.com/your-repo/smedashboardapp.git
cd sme_dashboard

2.	Install the dependencies:
npm install

Running the Application
1.	Start the server:
npm run dev
This will concurrently run both the Express backend and React frontend.
2.	Open your browser and navigate to:
http://localhost:3000
Usage
Accessing the Dashboard
Once the application is running, you can access the dashboard through your browser at http://localhost:3000. The dashboard will display resource allocation data in a line chart.
Adding New Data
To add new data:
1.	Enter the date and allocation amount in the form provided.
2.	Click "Add Data" to submit.
The new data will be added to the MongoDB database and automatically updated on the chart.

