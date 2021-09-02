const methods = {
  sum: (x, y) => x + y,
  mul: (x, y) => x * y
}

const childMessenger = new PostMe.WindowMessenger({
  localWindow: window,
  remoteWindow: window.parent,
  remoteOrigin: '*'
});

PostMe.ChildHandshake(childMessenger, methods).then((connection) => {
  const localHandle = connection.localHandle();

  localHandle.emit('ping',  'Oh, hi!');
});