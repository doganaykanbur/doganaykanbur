document.addEventListener("DOMContentLoaded", () => {
  function toggleExtraInfo() {
    const dahafazlabutton = document.getElementById("dahafazlabutton");
    const text = document.getElementById("text");

    if (dahafazlabutton && text) {
      dahafazlabutton.addEventListener("click", () => {
        if (text.style.display === "none" || text.style.display === "") {
          text.style.display = "inline";
          dahafazlabutton.textContent = "Daha Az Göster";
        } else {
          text.style.display = "none";
          dahafazlabutton.textContent = "Daha Fazla Göster";
        }
      });
    }
  }

  toggleExtraInfo();
});
