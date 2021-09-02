const methods: methodsType = {
  sum: (x, y) => x + y,
  mul: (x, y) => x * y
}

const childMessenger: PostMe.WindowMessenger = new PostMe.WindowMessenger({
  localWindow: window,
  remoteWindow: window.parent,
  remoteOrigin: '*'
});

PostMe.ChildHandshake(childMessenger, methods).then((connection) => {
  const localHandle: PostMe.LocalHandle<methodsType, eventsType>
    = connection.localHandle();

  localHandle.emit('ping',  'Oh, hi!');
});