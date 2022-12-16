
import {signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js'

import {toastifyMessage} from './toastify-message.js'

import { auth } from './firebase.js';



const signInForm= document.querySelector('#login-form');

signInForm.addEventListener('submit', async(e)=>{

    e.preventDefault();
    
    const email= document.querySelector('#login-email').value;
    const password= document.querySelector('#login-password').value;

    try {
        const userCredentials = await signInWithEmailAndPassword(auth,email,password)
        console.log(userCredentials)

        toastifyMessage("Hola de nuevo   !  " + userCredentials.user.email)

    } catch (error) {
        

        if(error.code === 'auth/email-already-in-use'){

            toastifyMessage("El correo ya está registrado","error")

        }else if(error.code==='auth/wrong-password'){

            toastifyMessage("Contraseña incorrecta","error")
            
        }else if(error.code==='auth/user-not-found'){

            toastifyMessage("Usuario desconocido","error")
        }else{

            toastifyMessage("Algo salió mal","error")

        }
    }
})