export function setupButtonCallbacks(startCallback, stopCallback, resetCallback, breakCallback) {
  const startBtn = document.getElementById("start-btn");
  const stopBtn = document.getElementById("stop-btn");
  const resetBtn = document.getElementById("reset-btn");
  const breakBtn = document.getElementById("break-btn");

  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";
    breakBtn.style.display = "inline-block";
    startCallback();
  });

  stopBtn.addEventListener("click", () => {
    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
    resetBtn.style.display = "none";
    breakBtn.style.display = "none";
    stopCallback();
  });

  resetBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";
    breakBtn.style.display = "inline-block";
    resetCallback();
  });

  breakBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";
    breakBtn.style.display = "inline-block";
    breakCallback();
  });
}
