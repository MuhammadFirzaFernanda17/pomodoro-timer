export function setupBackgroundChanges(workColor, breakColor) {
  const body = document.body;

  function setWorkBackground() {
    body.style.backgroundColor = workColor;
  }

  function setBreakBackground() {
    body.style.backgroundColor = breakColor;
  }

  return {
    setWorkBackground,
    setBreakBackground,
  };
}
