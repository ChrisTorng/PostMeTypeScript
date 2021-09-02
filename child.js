var methods = {
    sum: function (x, y) { return x + y; },
    mul: function (x, y) { return x * y; }
};
var childMessenger = new PostMe.WindowMessenger({
    localWindow: window,
    remoteWindow: window.parent,
    remoteOrigin: '*'
});
PostMe.ChildHandshake(childMessenger, methods).then(function (connection) {
    var localHandle = connection.localHandle();
    localHandle.emit('ping', 'Oh, hi!');
});
//# sourceMappingURL=child.js.map