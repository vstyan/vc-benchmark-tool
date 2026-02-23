/**
 * Background worker to handle intensive CPU tasks
 * safely away from the main UI thread.
 */
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

    // Perform heavy math in small chunks to allow 
    // the worker thread to remain manageable
    for (let i = 0; i < 50000; i++) {
        Math.sqrt(Math.random() * Math.random());
    }

    // Use a very short delay to prevent hardware saturation
    setTimeout(runStress, 1);
}