import React from 'react'

export default function Registro() {
  return (
    <div class="registrarse">
            <h2>Crear una cuenta</h2>
            <form>
                <div class="group">
                    <label for="name"></label>
                    <input type="name" id="name" name="name" placeholder="Nombre" required></input>
                </div>
                <div class="group">
                    <label for="lasname"></label>
                    <input type="lasname" id="lasname" name="lasname" placeholder="Apellido" required></input>
                </div>
                <div class="group">
                    <label for="email"></label>
                    <input type="email" id="email" name="email" placeholder="Correo" required></input>
                </div>
                <div class="group">
                    <label for="phone"></label>
                    <input type="phone" id="phone" name="phone" placeholder="Telefono" required></input>
                </div>
                <div class="group">
                    <label for="password"></label>
                    <input type="password" id="password" name="password" placeholder="contraseña" required></input>
                </div>
                <div class="group">
                    <label for="password"></label>
                    <input type="password" id="password" name="password" placeholder="Confirmar contraseña" required></input>
                </div>
                <div class="from-group">
                    <button type="submit">Registrarse</button>
                </div>
            </form>
        </div>    
  )
}
