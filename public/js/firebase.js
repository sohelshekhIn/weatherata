const firebaseConfig = {
  apiKey: "AIzaSyAu5bwcwzZaGcd_L5WGIpPzdjWzMLgJ3jQ",
  authDomain: "weatherapp-d4787.firebaseapp.com",
  databaseURL: "https://weatherapp-d4787.firebaseio.com",
  projectId: "weatherapp-d4787",
  storageBucket: "weatherapp-d4787.appspot.com",
  messagingSenderId: "438246168992",
  appId: "1:438246168992:web:ce180f83096091f54cacc5",
  measurementId: "G-P9CQFTHS6C",
};
let viewingTime;
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
window.addEventListener("beforeunload", function () {
  NotiflixConfirm(
    "Exit",
    "Do you really want to exit/reload the page",
    "Exit",
    "No",
    exitOnConfirm(),
    exitOnFailure()
  );
  window.stop();
  function exitOnConfirm() {
    var viewingTime = sessionStorage.ViewingTime;
    viewingTime = viewingTime / 1000;
    analytics.logEvent("surfingTime", { time: "viewingTime" });
  }
  function exitOnFailure() {}
});
