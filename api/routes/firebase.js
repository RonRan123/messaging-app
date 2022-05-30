const { initializeApp, cert } = require("firebase-admin/app"); 
const {getFirestore} = require("firebase-admin/firestore");
// https://indepth.dev/posts/1084/building-an-api-with-firebase#database-calls
// var admin = require("firebase-admin");

var serviceAccount = require("./permissions.json");


const app = initializeApp({credential: cert(serviceAccount)});
const db = getFirestore(app);

//const db = admin.firestore();
// const db = admin;

module.exports = db;