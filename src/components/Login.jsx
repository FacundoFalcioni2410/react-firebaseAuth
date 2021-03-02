import React,{useState} from 'react'
import {auth} from '../firebase-config.js'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const historial = useHistory()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgError, setMsgError] = useState(null)

    const registrarUsuario = (e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,pass)
        .then( (r) =>{
            historial.push("/")
        })
        .catch(e =>{
            if(e.code == 'auth/invalid-email')
            {
                setMsgError('Formato Email incorrecto')
            }
            if(e.code == 'auth/weak-password')
            {
                setMsgError('La contraseña debe tener 6 caracteres o mas')
            }
        })
    }

    const LoginUsuario = () =>{
        auth.signInWithEmailAndPassword(email,pass)
        .then( (r) =>{
            historial.push("/")
        })
        .catch( (error) =>{
            if(error.code === 'auth/wrong-password')
            {
                setMsgError('Contraseña incorrecta')
            }
            if (error.code === "auth/user-not-found") {
                setMsgError("Usuario no registrado");
            }
        })
    }

    return (
        <div className="row mt-5">
        <div className="col"></div>
        <div className="col">
                <form onSubmit={registrarUsuario} className="form-group">
                    <input
                    onChange={(e) => {setEmail(e.target.value)}}
                    className="form-control"
                    placeholder="Introduce el email"
                    type="email" required/>
                    <input
                    onChange={(e) => {setPass(e.target.value)}}
                    min="6"
                    className="form-control mt-4" 
                    placeholder="Introduce la contraseña"
                    type="password" required/>
                    <input
                    className="btn btn-dark btn-block mt-4"
                    value="Registrar Usuario"
                    type="submit"/>                        
                </form>
                <button
                className="btn btn-success btn-block"
                onClick={LoginUsuario}
                >Iniciar sesion
                </button>
                {
                    msgError != null ?
                    (
                        <div>
                            {msgError}
                        </div>
                    )
                    :
                    (
                        <span></span>
                    )
                }
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Login
