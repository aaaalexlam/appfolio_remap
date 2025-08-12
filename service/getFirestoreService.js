(function () {
    // Your Firebase config here
    const firebaseConfig = {
        apiKey: "AIzaSyDiofUHEJxWqYt25sO8bwz8dRLyZLMCoFE",
        authDomain: "everest-51e18.firebaseapp.com",
        projectId: "everest-51e18",
        storageBucket: "everest-51e18.appspot.com",
        messagingSenderId: "848124670146",
        appId: "1:848124670146:web:f7fc6f4d9e2a60b47ecb5b",
        measurementId: "G-TR7Z090WV9"
    };


    // Check if Firebase app is already initialized to avoid errors
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    // Expose Firebase services on the global window object
    window.firebaseApp = firebase.app();
    window.firebaseAuth = firebase.auth();
    window.firebaseFirestore = firebase.firestore();
})();
