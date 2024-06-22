export function setupButtonCallbacks(startCallback, pauseCallback, stopCallback, workCallback, breakCallback) {
  const startBtn = document.getElementById("start-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const stopBtn = document.getElementById("stop-btn");
  const workBtn = document.getElementById("work-btn");
  const breakBtn = document.getElementById("break-btn");

  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
    stopBtn.style.display = "inline-block";
    startCallback();
  });

  pauseBtn.addEventListener("click", () => {
    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    pauseCallback();
  });

  stopBtn.addEventListener("click", () => {
    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    stopBtn.style.display = "none";
    stopCallback();
  });

  workBtn.addEventListener("click", () => {
    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    stopBtn.style.display = "none";
    workCallback();
  });

  breakBtn.addEventListener("click", () => {
    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    stopBtn.style.display = "none";
    breakCallback();
  });
}
