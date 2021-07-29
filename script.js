  // TODO: Replace the following with your app's Firebase project configuration
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  const firebaseConfig = {
      apiKey: //,
      authDomain: "//,
      projectId: "workshop-1b1f4",
      storageBucket: //,
      messagingSenderId: //,
      appId: //,
      measurementId: //
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const email = document.getElementById('txtEmail');
  const Password = document.getElementById('txtpwd');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');

  btnSignup.addEventListener('click', e => {
      const auth = firebase.auth();
      //sign in with firebase auth
      const promise = auth.createUserWithEmailAndPassword(email.value, Password.value).then(user => {
          alert("Signup Successful :) :", user.email)
      }).catch(err => {
          console.log(err.message);
      });
  })
  btnLogin.addEventListener('click', e => {
      const auth = firebase.auth();
      auth.signInWithEmailAndPassword(email.value, Password.value).then(user => {
          alert("signup ok ! :", user.email)
      }).catch(err => {
          console.log(err);
      })

  })
