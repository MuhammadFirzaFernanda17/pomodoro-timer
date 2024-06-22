export class Timer {
  constructor(minutes, onTick, onComplete) {
    this.secondsRemaining = minutes * 60;
    this.onTick = onTick;
    this.onComplete = onComplete;
    this.interval = null;
    this.isRunning = false;
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.interval = setInterval(() => {
        this.tick();
        if (this.secondsRemaining <= 0) {
          this.stop();
          this.onComplete();
        }
      }, 1000);
    }
  }

  pause() {
    clearInterval(this.interval);
    this.isRunning = false;
  }

  stop() {
    this.pause();
    this.secondsRemaining = 0;
    this.onTick(0, 0);
  }

  reset(minutes) {
    this.pause();
    this.secondsRemaining = minutes * 60;
    this.onTick(minutes, 0);
    this.isRunning = false;
  }

  tick() {
    this.secondsRemaining--;
    const minutes = Math.floor(this.secondsRemaining / 60);
    const seconds = this.secondsRemaining % 60;
    this.onTick(minutes, seconds);
  }
}
