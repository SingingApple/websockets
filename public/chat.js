// Make connection
const socket = io.connect("http://localhost:5000");

//query DOM
const message = document.querySelector("#message");
const handle = document.querySelector("#handle");
const btn = document.querySelector("#send");
const output = document.querySelector("#output");

//Emit events
btn.addEventListener("click", (e) => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
});

socket.on("chat", (data) => {
  console.log(data);
  output.innerHTML += `<p><strong>${data.handle}</strong> : ${data.message}`;
});
