const express = require('express');
let router = express.Router();
const productos =  [];
// router.use(express.json());
//FORM
router.get('/', (req, res )=>{
  
    res.render('form.pug')
});

//TABLA PRODUCTOS
router.get('/productos', (req, res) =>{   

    res.render('productos.pug', {productos})
});

router.post('/productos/guardar', (req, res) =>{
      const body = req.body;
 if (!body.nombre ||
         !body.precio ||
         !body.thumbnail ||
         typeof body.nombre != 'string' ||
         typeof body.precio != 'number' ||
         typeof body.thumbnail != 'string'){
         res.status = 400;
  
           return res.json({
             msg: "ingresaste los datos del producto mal"
           });
         }
         const nuevoProducto = {
           id: productos.length + 1,
           nombre: body.nombre,
           precio: body.precio,
           thumbnail: body.thumbnail
         }
        
         productos.push(nuevoProducto); 
         console.log(productos); 
         res.status(201).json({
           data: nuevoProducto
         });
});

router.delete('/borrar/:id' , (req, res) => {
  
    const idBuscado = req.params.id;
    const producto = productos.find((aProduct) => aProduct.id == idBuscado);
  
    if (productos.includes(producto)){
      const indice = productos.indexOf(producto)
      if( indice > -1) {
          productos.splice(indice, 1)
          console.log("ok");
          // console.log(productos);
      }
  } else {
      console.log("bad");
  }
  
   if (!producto) {
     return res.status(404).json({
         msg: 'No existe un producto con este id',
       });
    }
    res.json({
      data: producto
    });
    });

    module.exports = router;