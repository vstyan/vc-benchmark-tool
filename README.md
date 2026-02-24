Benchmark Tool
A lightweight, high-performance Progressive Web App (PWA) designed to evaluate system stability and efficiency during loading workloads (i.e. video conferencing etc). This tool is specifically optimized for Chromebooks and provides deep insights into system performance under stress.

🚀 Features
Real-Time Performance Metrics: Tracks FPS, frame consistency, and "Total Jank" (stutters) to evaluate the smoothness of the video experience.

Threaded Stress Testing: Utilizes a dedicated Web Worker to simulate heavy CPU loads without freezing the UI, providing a realistic stress scenario.

Hardware-Aware Insights: Automatically detects system architecture (ARM64/x86_64), core count, and RAM.

Thermal & Pressure Monitoring: Leverages the PressureObserver API to monitor CPU pressure states (Nominal, Fair, Serious, Critical).

Battery Analytics: Estimates remaining video conferencing time based on real-time discharging rates.

PWA Ready: Can be installed directly on your device and works offline via Service Workers.

🛠️ Technical Stack
Frontend: HTML5, CSS3 (Custom MediaTek-themed UI), Vanilla JavaScript.

APIs:

PressureObserver for system load monitoring.

Battery Status API for energy efficiency tracking.

Service Workers for offline capabilities and caching.

Concurrency: Background threading via stress-worker.js.

📦 Installation
Since this is a PWA, no traditional "installation" is required:

Navigate to the hosted URL (e.g., GitHub Pages).

Click the Install icon in your browser's address bar or select "Add to Home Screen" from your mobile/tablet browser menu.

The app will now appear in your app drawer and can be launched without an internet connection.

📋 Admin Metrics Reset
To maintain the integrity of long-term testing, session metrics can be reset via the Admin Portal.

Default PIN: 1234 (Configurable in index.html).