import React, {useEffect, useState} from 'react'
import { getUserLogin } from './api/userLogin'

const Login = () =>{
    const [users, setUsers] = useState(null);

    const fetchUser = async () => {
        try {
            const users = await getUserLogin()
            console.log('=>', users);
            setUsers(users);
        } catch (error) {
            console.error('Algo esta ocurriendo cuando se hace el llamado de la API de Users', error);
        }
    };

    useEffect(() => {
        fetchUser();
        console.log('=>', users);
    }, [])

    const loginView = () => {
        return (
            <div class="login-container">
                    <h2>Iniciar sesion</h2>
                    <from>
                        <div class="from-group">
                            <label for="username"></label>
                            <input type="username" id="username" name="username" placeholder="Usuario" required></input>
                        </div>
                        <div class="from-group">
                            <label for="password"></label>
                            <input type="password" id="password" name="password" placeholder="contraseña" required></input>
                        </div>
                        <div class="from-group">
                            <button type="submit">Ingresar </button>
                            <a href="/agenda.html"></a>
                        </div> 
                        <div class="login-href">
                        <a href="">olvidaste tu contraseña?</a> 
                        <a href="/registro.html">registrarse</a>  
                        </div>     
                    </from>
                </div>    
          )
    }
    const render = () => {
        return (
            <>
                {loginView()}
            </>
        )
    };

    return render();
};

export default Login;
