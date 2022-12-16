import {createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js'

import {toastifyMessage} from './toastify-message.js'
import './facebookLogin.js'
import './googleLogin.js'
import { auth } from './firebase.js';



const signupForm= document.querySelector('#signup-form');

signupForm.addEventListener('submit', async(e)=>{

    e.preventDefault();
    
    const email= document.querySelector('#signup-email').value;
    const password= document.querySelector('#signup-password').value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
        console.log(userCredentials)

        toastifyMessage("Bienvenido al club CineMax!  " + userCredentials.user.email)
        
    } catch (error) {
        

        if(error.code === 'auth/email-already-in-use'){

            toastifyMessage("El correo ya está registrado","error")

        } else if (error.code === 'auth/invalid-email'){

           toastifyMessage("Formato de e-mail inválido","error")

        }else if(error.code === 'auth/weak-password'){

            toastifyMessage("Contraseña poco segura","error")

        }else if(error.code){
            
            toastifyMessage("Vaya, algo salió mal","error")
            
        }
    }
})