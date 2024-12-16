// const firebaseAdmin = require('firebase-admin');
// const serviceAccount = require('../config/lastone-4425e-firebase-adminsdk-pyuqq-3fca50fab4.json');   // Ensure correct path

// firebaseAdmin.initializeApp({
//   credential: firebaseAdmin.credential.cert(serviceAccount),  // Passing the service account JSON directly
//   databaseURL: 'https://lastone-4425e-default-rtdb.firebaseio.com/' // Replace with your actual Firebase database URL
// });

// module.exports = firebaseAdmin;



const firebaseAdmin = require('firebase-admin');
require('dotenv').config(); // Load environment variables from .env

// Fetch the service account path from the environment variables
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;

// Validate service account path
if (!serviceAccountPath) {
  throw new Error('FIREBASE_SERVICE_ACCOUNT_PATH is not defined in .env');
}

// Import the service account JSON using the path from the environment variables
const serviceAccount = require(serviceAccountPath);

// Initialize Firebase Admin SDK
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount), // Use the loaded service account JSON
  databaseURL: process.env.FIREBASE_DATABASE_URL, // Use the database URL from the environment variables
});

module.exports = firebaseAdmin;


