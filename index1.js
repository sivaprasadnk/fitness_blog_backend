const admin = require("firebase-admin");
const serviceAccount = require("./path/to/your-service-account-file.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://your-database-name.firebaseio.com" // Replace with your database URL
});


console.log("Firebase is initialized!");
