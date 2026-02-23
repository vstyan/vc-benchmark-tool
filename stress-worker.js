let isRunning = false;
self.onmessage = function(e) {
    if (e.data === 'start') {
        isRunning = true;
        runStress();
    } else if (e.data === 'stop') {
        isRunning = false;
    }
};

function runStress() {
    if (!isRunning) return;
    for (let i = 0; i < 60000; i++) {
        Math.sqrt(Math.random() * Math.random());
    }
    self.postMessage('heartbeat');
    setTimeout(runStress, 1);
}