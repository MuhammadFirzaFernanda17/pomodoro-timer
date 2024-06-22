import { Timer } from "./src/utils/timer.js";
import { setupButtonCallbacks } from "./src/utils/button.js";
import { setupBackgroundChanges } from "./src/utils/background.js";

const workDuration = 25; // durasi kerja dalam menit
const breakDuration = 5; // durasi istirahat dalam menit

let currentTimer;
let currentState = "work"; // 'work' atau 'break'

const timerDisplay = document.getElementById("timer");

const { setWorkBackground, setBreakBackground } = setupBackgroundChanges("#FF6347", "#4CAF50");

function startWorkTimer() {
  currentTimer = new Timer(workDuration, updateTimerDisplay, onWorkTimerComplete);
  currentTimer.start();
  setWorkBackground();
  currentState = "work";
}

function startBreakTimer() {
  currentTimer = new Timer(breakDuration, updateTimerDisplay, onBreakTimerComplete);
  currentTimer.start();
  setBreakBackground();
  currentState = "break";
}

function stopTimer() {
  if (currentTimer) {
    currentTimer.stop();
  }
}

function resetTimer() {
  stopTimer();
  if (currentState === "work") {
    startWorkTimer();
  } else {
    startBreakTimer();
  }
}

function updateTimerDisplay(minutes, seconds) {
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function onWorkTimerComplete() {
  notifyUser("Waktu Kerja Selesai!");
  startBreakTimer();
}

function onBreakTimerComplete() {
  notifyUser("Waktu Istirahat Selesai! Kembali bekerja.");
  startWorkTimer();
}

function notifyUser(message) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(message);
  }
}

setupButtonCallbacks(startWorkTimer, stopTimer, resetTimer, startBreakTimer);

// Request permission for notifications
if ("Notification" in window) {
  Notification.requestPermission();
}

// Initial display
updateTimerDisplay(workDuration, 0);
