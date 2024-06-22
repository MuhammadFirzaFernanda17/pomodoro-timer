import { Timer } from "./src/utils/timer.js";
import { setupButtonCallbacks } from "./src/utils/button.js";
import { setupBackgroundChanges } from "./src/utils/background.js";

const workDuration = 25; // durasi kerja dalam menit
const breakDuration = 5; // durasi istirahat dalam menit

let currentTimer;
let currentState = "work"; // 'work' atau 'break'

const timerDisplay = document.getElementById("timer");

const { setWorkBackground, setBreakBackground } = setupBackgroundChanges("#2C3E50", "#16A085");

function initializeWorkTimer() {
  currentTimer = new Timer(workDuration, updateTimerDisplay, onWorkTimerComplete);
  updateTimerDisplay(workDuration, 0);
  setWorkBackground();
  currentState = "work";
}

function initializeBreakTimer() {
  currentTimer = new Timer(breakDuration, updateTimerDisplay, onBreakTimerComplete);
  updateTimerDisplay(breakDuration, 0);
  setBreakBackground();
  currentState = "break";
}

function startTimer() {
  if (currentTimer) {
    currentTimer.start();
  }
}

function pauseTimer() {
  if (currentTimer) {
    currentTimer.pause();
  }
}

function stopTimer() {
  if (currentTimer) {
    currentTimer.stop();
  }
}

function updateTimerDisplay(minutes, seconds) {
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function onWorkTimerComplete() {
  notifyUser("Work session completed!");
  initializeBreakTimer();
}

function onBreakTimerComplete() {
  notifyUser("Break session completed! Back to work.");
  initializeWorkTimer();
}

function notifyUser(message) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(message);
  }
}

setupButtonCallbacks(startTimer, pauseTimer, stopTimer, initializeWorkTimer, initializeBreakTimer);

// Request permission for notifications
if ("Notification" in window) {
  Notification.requestPermission();
}

// Initial display
initializeWorkTimer();
