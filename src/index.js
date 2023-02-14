// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirebaseConfig } from './firebase-config'

const firebaseAppConfig = getFirebaseConfig()

// Initialize Firebase
const app = initializeApp(firebaseAppConfig)
const auth = getAuth()

window.onload = () => {

  // Seleccionar elementos de la página
  let btnLogin = document.getElementById('btnLogin')
  let inputEmail = document.getElementById('email')
  let inputPassword = document.getElementById('password')

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
        console.log(errorMessage)
      })
  })
}
