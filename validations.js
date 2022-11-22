/* window.addEventListener('load', (e) => {
    const form = document.querySelector('#form');
    const inputForm = document.querySelector('input.menu-input');
    form.addEventListener('submit', (e) => {
        const errores = []

        if (inputForm.value == "") {
            errores.push('*Es obligatorio ingresar un número');
        }

        if (inputForm.value != 1 && inputForm.value != 2 && inputForm.value != 3 && inputForm.value != 4 && inputForm.value != 5 && inputForm.value != 6) {
            errores.push('*Debe ingresar un número entre el 1 y el 6')
        }

        if (errores.length > 0) {
            e.preventDefault();
            let ulerrores = document.querySelector('div.errores ul')
            for (let i = 0; i < errores.length; index++) {
                ulerrores.innerHTML += '<li style="color:red">' + errores[i] + '</li>'

            }

        }



    });
});
 */










/* const menuContenedor = document.getElementsByClassName('menu-contenedor')

const renderPizza = ({ id, nombre, precio }) => {
    return 
    `<div class="menu-contenedor">
    <h2 class="pizza-name"> Pizza: ${nombre} $</h2>
    <h3 class="pizza-price"> Precio: ${precio}</h3>
    </div>]`
}

const renderId = () => {
    menuContenedor.innerHTML = pizzas.map(id => renderPizza(id)).join("")
} */