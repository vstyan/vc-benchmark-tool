/**
 * Synthetic Stress Engine v2.1 - High Intensity
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

/**
 * Recursive Fibonacci
 * Stresses call stack and instruction throughput.
 */
function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

function runHighStress() {
    if (!isRunning) return;

    // WORKLOAD A: High-Density Float Math (1.5M iterations)
    for (let i = 0; i < 1500000; i++) {
        Math.sqrt(Math.pow(Math.random(), Math.random()));
    }

    // WORKLOAD B: Deep Recursion Logic
    fib(30);

    // WORKLOAD C: Large Buffer Manipulation (1M elements)
    const buffer = new Int32Array(1000000);
    for (let j = 0; j < buffer.length; j++) {
        buffer[j] = Math.floor(Math.random() * 1000) * j;
        buffer[j] = (buffer[j] >> 2) ^ (buffer[j] << 1);
    }

    self.postMessage('heartbeat');

    // Immediate recursion for 100% thread saturation
    setTimeout(runHighStress, 0);
}