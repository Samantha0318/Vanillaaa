let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
}

function actualizarCarrito() {
    const lista = document.getElementById("carrito");
    if (!lista) return;
    lista.innerHTML = "";
    let total = 0;
    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio} MXN`;
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarDelCarrito(index);
        li.appendChild(botonEliminar);
        lista.appendChild(li);
        total += item.precio;
    });
    document.getElementById("total").textContent = `Total: $${total} MXN`;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

document.addEventListener("DOMContentLoaded", actualizarCarrito);
