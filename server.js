const express = require('express');
const app = express();

const datos = [
  { nombre: "tomate", color: "rojo", tipo: "verdura" },
  { nombre: "manzana", color: "verde", tipo: "fruta" },
  { nombre: "zanahoria", color: "naranja", tipo: "verdura" }
];

app.get('/productos', (req, res) => {
  res.json(datos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
