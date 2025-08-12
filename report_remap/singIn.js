document.addEventListener("DOMContentLoaded", function () {
    // 1. Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDiofUHEJxWqYt25sO8bwz8dRLyZLMCoFE",
        authDomain: "everest-51e18.firebaseapp.com",
        projectId: "everest-51e18",
        storageBucket: "everest-51e18.appspot.com",
        messagingSenderId: "848124670146",
        appId: "1:848124670146:web:f7fc6f4d9e2a60b47ecb5b",
        measurementId: "G-TR7Z090WV9"
    };

    // 2. Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();

    // 3. Keep user signed in
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .catch(error => {
            console.error("Persistence error:", error);
        });

    // 4. Fetch account list function (reusable)
    function fetchAccountList() {
        db.collection("adminManagement")
            .doc("IIPMwsQfXSzrASo8qjFO")
            .collection("accounting")
            .get()
            .then(snapshot => {
                const data = [];
                snapshot.forEach(doc => {
                    data.push({ id: doc.id, ...doc.data() });
                });
                console.log("Account List data:", data);
                document.getElementById("output").textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error("Error fetching account list:", error.message);
            });
    }

    // 5. Auto-detect if user is already signed in
    auth.onAuthStateChanged(user => {
        const message = document.getElementById("message");
        if (user) {
            message.style.color = "green";
            message.textContent = "Welcome back, " + user.email;
            fetchAccountList();
        } else {
            message.style.color = "gray";
            message.textContent = "Please log in.";
            document.getElementById("output").textContent = ""; // Clear output if logged out
        }
    });

    // 6. Login button click
    document.getElementById("loginBtn").addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                message.style.color = "green";
                message.textContent = "Login successful! Welcome " + userCredential.user.email;
                fetchAccountList();
            })
            .catch(error => {
                message.style.color = "red";
                message.textContent = "Error: " + error.message;
            });
    });
});