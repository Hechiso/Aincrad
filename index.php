<html>
<head></head>
<body>
<p>hola si se puedo</p>



<script>
let ws = new WebSocket("ws://localhost:9000", "my-protocol");

ws.onopen = () => {
  console.log("Conectado!");
  ws.send("Hola desde cliente C++");
};

ws.onmessage = (msg) => {
  console.log("Recibido: ", msg.data);
};

ws.onclose = () => {
  console.log("Conexión cerrada");
};


</script>
</body>

</html>
