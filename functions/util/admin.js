const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

// Import admin and db to other files
module.exports = { admin, db };