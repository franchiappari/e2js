/* ARRAY DE PIZZAS */
let pizzas = [
    {
        id: 1,
        nombre: "Hightower",
        precio: 500,
        ingredientes: ["Salsa de tomate", "Jamón Crudo", "Rúcula", "Queso Parmesano"],
    },

    {
        id: 2,
        nombre: "Targaryen",
        precio: 800,
        ingredientes: ["Salsa picante", "Peperonni", "Queso Muzzarella"]
    },

    {
        id: 3,
        nombre: "Tully",
        precio: 800,
        ingredientes: ["Salsa de tomate", "Jamón Cocido", "Queso Muzzarella", "Anchoas"],
    },

    {
        id: 4,
        nombre: "Stark",
        precio: 1000,
        ingredientes: ["Salsa de tomate", "Jamón Cocido", "Queso Muzzarella", "Huevos Fritos"],
    },

    {
        id: 5,
        nombre: "Arryn",
        precio: 500,
        ingredientes: ["Salsa picante", "Jamón Cocido", "Queso Muzzarella", "Pollo"],
    },

    {
        id: 6,
        nombre: "Lannister",
        precio: 700,
        ingredientes: ["Salsa picante", "Jamón Cocido", "Queso Muzzarella", "Aceitunas", "Tomtate"],
    }
]


const form = document.querySelector('#form');
const inputForm = document.querySelector('input.menu-input');
const menuContenedor = document.querySelector('.menu-contenedor');
const pizzaName = document.querySelector('.pizza-name')
const pizzaPrice = document.querySelector('.pizza-price')
const contenedorError = document.querySelector(".error");

const getPizzaName = (nombre) => {
    pizzaName.textContent = `${nombre}`;
}

const getPizzaPrice = (precio) => {
    pizzaPrice.textContent = `$${precio}`;
}

const error = (id) => {
    menuContenedor.style.display = "none";
    if (id.value !== ""){
      contenedorError.innerHTML = '* Se debe ingresar un número entre el número 1 y 6.'
      } else  contenedorError.textContent = '* Es obligatorio ingresar un número.';

  }

const buscarPizza = () => {
    const pizzaId = pizzas.find((pizzas) => pizzas.id == inputForm.value);
    if (pizzaId) {
        menuContenedor.style.display = "flex";
        menuContenedor.style.flexDirection = "column";
        getPizzaName(pizzaId.nombre)
        getPizzaPrice(pizzaId.precio)
    } else {
        error(inputForm);
        contenedorError.style.display = "flex";
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    buscarPizza()
    form.reset()
})




