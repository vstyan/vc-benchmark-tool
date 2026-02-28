# Benchmark Tool
A lightweight, high-performance Progressive Web App (PWA) designed to evaluate system stability and efficiency during loading workloads (i.e. video conferencing etc).

🚀 **Key Update:** This tool defines **Jank** as any frame taking longer than **33.3ms**. While the standard UI definition is 16.7ms (60Hz), we relax this to 33.3ms to represent a "functional pass" for 30FPS video conferencing under heavy stress testing.

## Features
- **Real-Time Performance Metrics:** Tracks FPS and Jank counts.
- **Threaded Stress Testing:** Background CPU saturation via `stress-worker.js`.
- **Thermal Monitoring:** Uses the `PressureObserver` API.
- **Battery Analytics:** Estimates remaining run-time under stress.

## License
Copyright (c) 2026 Victor Tyan. Distributed under the MIT License.