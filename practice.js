var firebaseConfig = {
    apiKey: "AIzaSyCSXltsqcj2sOJSIG2z8TQ9my6B5qC616E",
    authDomain: "kwitter-78875.firebaseapp.com",
    databaseURL: "https://kwitter-78875-default-rtdb.firebaseio.com",
    projectId: "kwitter-78875",
    storageBucket: "kwitter-78875.appspot.com",
    messagingSenderId: "226382584287",
    appId: "1:226382584287:web:b4f2bc7352ae270ce68c6a"
  };
  firebase.initializeApp(firebaseConfig);
  function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user",
      sport:"cricket",
      food:"pasta"
    })
  }