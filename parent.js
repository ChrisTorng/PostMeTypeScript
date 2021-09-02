var childFrame = document.getElementById('child');
var childWindow = childFrame.contentWindow;
var messenger = new PostMe.WindowMessenger({
    localWindow: window,
    remoteWindow: childWindow,
    remoteOrigin: '*'
});
PostMe.ParentHandshake(messenger).then(function (connection) {
    var remoteHandle = connection.remoteHandle();
    remoteHandle.call('sum', 3, 4).then(function (result) {
        console.log(result);
    });
    remoteHandle.addEventListener('ping', function (payload) {
        console.log(payload);
    });
});
//# sourceMappingURL=parent.js.map