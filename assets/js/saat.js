document.addEventListener("DOMContentLoaded", () => {
  // Function to show the current time
  function saatigoster() {
    const date = new Date();
    const saat = date.getHours().toString().padStart(2, "0");
    const dakika = date.getMinutes().toString().padStart(2, "0");
    const saniye = date.getSeconds().toString().padStart(2, "0");

    const timeString = `${saat}:${dakika}:${saniye}`;
    document.getElementById("saat").textContent = timeString;
  }

  // Update time every second
  setInterval(saatigoster, 1000);
  saatigoster();

  // Function to toggle extra information visibility
});
