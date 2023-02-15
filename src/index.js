// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut} from 'firebase/auth'
import { getFirebaseConfig } from './firebase-config'

const firebaseAppConfig = getFirebaseConfig()

// Initialize Firebase
const app = initializeApp(firebaseAppConfig)
const auth = getAuth()

onAuthStateChanged(auth, (user)=>{
  if(user){
    //Login
    //alert(auth.currentUser.displayName)
  }else{
    alert("cerrando sesión");
    //logout
  }
});

window.onload = () => {

  // Seleccionar elementos de la página
  let btnLogin = document.getElementById('btnLogin');
  let btnGoogle=document.getElementById("btnGoogle");
  let btnCerrar=document.getElementById("btnCerrar");
  let inputEmail = document.getElementById('email');
  let inputPassword = document.getElementById('password');
  let sectionLogin = document.getElementById("section_login");
  let sectionMain = document.getElementById("section_main");

  // Asociamos eventos
  btnLogin.addEventListener('click', () => {
    let email = inputEmail.value;
    let password = inputPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user
        // ...
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        alert(errorMessage);
      });
  })

  btnGoogle.addEventListener("click", () => {
    signIn();
  })

  btnCerrar.addEventListener("click",()=>{
    signOut(auth);
  })
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //Login

      sectionLogin.hidden = true;
      sectionMain.hidden = false;
    } else {

      sectionLogin.hidden = false;
      sectionMain.hidden = true;
      //logout
    }
  });
}
async function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}