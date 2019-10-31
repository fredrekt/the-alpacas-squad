const paymentSocket = (socket, io) => {
  socket.on("eta/running", () =>
    io.emit("running-ongoing", "Runner is now forwarding your LTO fee.")
  );

  socket.on("eta/unclamping", eta => {
    io.emit("unclamping-ongoing", "LTO is now unclamping your car");
  });

  socket.on("eta/finished", () => {
    io.emit("unclamping-finished", "LTO has now finished unclamping your car.");
  });
};

module.exports = paymentSocket;
