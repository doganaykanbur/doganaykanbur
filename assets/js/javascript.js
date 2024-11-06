document.addEventListener("DOMContentLoaded", () => {
  
  function saatigoster() {
    const date = new Date();
    const saat = date.getHours().toString().padStart(2, "0");
    const dakika = date.getMinutes().toString().padStart(2, "0");
    const saniye = date.getSeconds().toString().padStart(2, "0");

    const timeString = `${saat}:${dakika}:${saniye}`;
    document.getElementById("saat").textContent = timeString;
  }

  
  setInterval(saatigoster, 1000);
  saatigoster();


  const showMoreButton = document.getElementById("showMoreButton");
  const extraInfo = document.getElementById("extraInfo");

  if (showMoreButton && extraInfo) {
    
    showMoreButton.addEventListener("click", () => {
      if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
     
        extraInfo.style.display = "block";
        showMoreButton.textContent = "Daha Az Göster";
      } else {
        
        extraInfo.style.display = "none";
        showMoreButton.textContent = "Daha Fazla Göster";
      }
    });
  }
});