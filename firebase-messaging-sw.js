// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
         apiKey: "AIzaSyBUeXJ6jW-h-1H6JGuYUHK7gjQwtgVknkU",
         authDomain: "grand-boulder-202209.firebaseapp.com",
         databaseURL: "https://grand-boulder-202209.firebaseio.com",
         projectId: "grand-boulder-202209",
         storageBucket: "grand-boulder-202209.appspot.com",
         messagingSenderId: "953079188383",
         appId: "1:953079188383:web:bf3a6b8a0dac7fa72a0baa",
         measurementId: "G-47PWNW532V"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});