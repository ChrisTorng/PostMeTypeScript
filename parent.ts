const childFrame = <HTMLIFrameElement>document.getElementById('child');
const childWindow = childFrame.contentWindow;

const messenger = new PostMe.WindowMessenger({
  localWindow: window,
  remoteWindow: childWindow,
  remoteOrigin: '*'
});

PostMe.ParentHandshake(messenger).then((connection) => {
  const remoteHandle = connection.remoteHandle();

  remoteHandle.call('sum', 3, 4).then((result) => {
    console.log(result);
  });

  remoteHandle.addEventListener('ping', (payload) => {
    console.log(payload);
  });
});