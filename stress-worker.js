/**
 * Synthetic Stress Engine v2.0
 * Optimized for MediaTek Client Computing Research
 */
let isRunning = false;

self.onmessage = function(e) {
    if (e.data === 'start') {
        isRunning = true;
        runHighStress();
    } else if (e.data === 'stop') {
        isRunning = false;
    }
};

function runHighStress() {
    if (!isRunning) return;

    // WORKLOAD A: Heavy Float Math
    for (let i = 0; i < 150000; i++) {
        Math.sqrt(Math.pow(Math.random(), Math.random()));
    }

    // WORKLOAD B: Large Integer Buffer & Memory Access
    // Simulates pixel-buffer manipulation during Video Conferencing
    const buffer = new Int32Array(50000);
    for (let j = 0; j < buffer.length; j++) {
        buffer[j] = Math.floor(Math.random() * 1000) * j;
        buffer[j] = (buffer[j] >> 2) ^ (buffer[j] << 1); // Bitwise operations
    }

    // Signal UI thread
    self.postMessage('heartbeat');

    // Immediate recursion to maintain 100% thread utilization
    setTimeout(runHighStress, 0);
}