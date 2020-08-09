// Make connection
const socket = io.connect("http://localhost:5000");

//query DOM
const message = document.querySelector("#message");
const handle = document.querySelector("#handle");
const btn = document.querySelector("#send");
const output = document.querySelector("#output");
const feedback = document.querySelector("#feedback");
//Emit events
btn.addEventListener("click", (e) => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
});

message.addEventListener("keypress", () => {
  socket.emit("typing", { user: handle.value });
});

socket.on("chat", (data) => {
  console.log(data);
  output.innerHTML += `<p><strong>${data.handle}</strong> : ${data.message}`;
});

socket.on("typing", (data) => {
  feedback.innerHTML = `${data.user} is typing`;
});
