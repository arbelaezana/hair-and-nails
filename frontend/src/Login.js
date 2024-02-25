import React from 'react'

export default function Login() {
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
