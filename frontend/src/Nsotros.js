import React from 'react'

export default function Nsotros() {
  return (
    <main>
        <section id="quienes-somos">
            <h1>QUIENES SOMOS</h1>
            <p>Somos un spa especializado en servicios de uñas y cabello. Nuestro equipo de profesionales está comprometido con brindar experiencias de belleza y relajación excepcionales a nuestros clientes. Con años de experiencia, nos esforzamos por ofrecer servicios de alta calidad en un ambiente acogedor y relajante.</p>
        </section>
        <div class="contenedor-footer">
            <div class="info">
               <h3>Contacto</h3>
               <p>Dirección: Dg 59 A # 36 B - 16, Bello-Niquia</p>
               <p>Teléfono: +57 3054671463</p>
               <p>Teléfono: +57 3146844142</p>
            </div>
        </div>
        <section id="contacto" class="formulario">
            <form class="asd" action="procesar_contacto.php" method="post">
                <label for="nombre"></label>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre" required></input>

                <label for="email"></label>
                <input type="email" id="email" name="email" placeholder="Email" required></input>

                <label for="mensaje"></label>
                <textarea id="mensaje" name="mensaje" rows="4" placeholder="Mensaje:" required></textarea>

                <button class="enviar" type="submit">Enviar</button>
            </form>
        </section>
    </main>

  )
}
//en este componente se muestra un formulario para que los usuarios 
//puedan contyactersen 

