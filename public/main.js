let btn = document.getElementById("btn");
let alerta = document.getElementById("alerta");
// let btndelete = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    // setTimeout(() =>{
    //     window.location.href ="http://localhost:8080/"
    // },2000)
let nombre = document.getElementById("nombre").value;
let precio = Number(document.getElementById("precio").value);
let thumbnail = document.getElementById("thumbnail").value;

    console.log("funcionando el boton");
    console.log(typeof nombre);
    console.log(typeof precio);
    console.log(typeof thumbnail);
  
    fetch('/productos/guardar', {
        method: 'POST',
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            thumbnail: thumbnail
        }),
        headers: { "Content-Type": "application/json" }
    })

    .then((response) =>{
        if(response.ok) {
            alerta.innerHTML=`<div class="alert alert-success" role="alert">Producto agregado correctamente</div>`
            return response.json()
        } else {
            console.log(response);
            alerta.innerHTML = `<div class="alert alert-danger" role="alert">Error al agregar producto</div>`
            throw 'error en la llamada'
        }
    })
    .then((texto) =>{
        console.log(texto);
    })
    .catch((err)=>{
        console.log(err);
    })
   
})


// btndelete.addEventListener("click", () =>{
//     console.log("funcando");
//     setTimeout(() =>{
//         window.location.href ="http://localhost:8080/productos/vista/"
//     },2000)
//     let id = Number(document.getElementById("iddelete").value);

//     fetch('/borrar/' + id, {
//         method: 'DELETE',
//     })
//     .then((response) =>{
//         if(response.ok) {
//             alerta.innerHTML=`<div class="alert alert-success" role="alert">Producto borrado correctamente</div>`
            
//         } else {
//             alerta.innerHTML = `<div class="alert alert-danger" role="alert">Error al borrar el producto</div>`

//         }
//     })

// })