
import { useState } from "react";

const Register = () =>{
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmar_contraseña, setConfirmar_contraseña] = useState('');

    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)

    const validarDatos = (e) => {
        e.preventDefault()
        //Validación
        console.log(email.length)
        if (!email.trim() || !contraseña.trim() || !confirmar_contraseña.trim()) {
            setError1(true);
            if (contraseña.length<6) {
                setError2(true);
            return;
            } else{
                setError2(false);
            }
        return;
        }
        if (contraseña.length<6) {
            setError2(true);
            setError1(false);
        return;
        }

        setError1(false);
        setError2(false);
        setEmail('');
        setContraseña('');
        setConfirmar_contraseña('');
    }
        


    return(
        <>
        <form onSubmit={validarDatos} className="formulario">
            {error1 ? <p>Todos los campos son obligatorios</p> : null}
            {error2 ? <p>El password debe tener al menos 6 caracteres</p> : null}
            <div className="form-group">
                <label>Email</label>
                <input
                type="text"
                name="nombre"
                className="form-control"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                />
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input
                type="text"
                name="apellido"
                className="form-control"
                onChange={(e)=> setContraseña(e.target.value)}
                value={contraseña}
                />
            </div>
            <div className="form-group">
                <label>Confirmar contraseña</label>
                <input
                type="text"
                name="edad"
                className="form-control"
                onChange={(e)=> setConfirmar_contraseña(e.target.value)}
                value={confirmar_contraseña}
                />
            </div>
            
            <button type="submit" className="btn
            btn-primary">Enviar</button>
            </form>
        </>
    )
}

export default Register