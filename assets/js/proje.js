document.addEventListener("DOMContentLoaded", function () {
  const galeri = document.getElementById("galeri");
  const siralabuton = document.getElementById("siralabutonu");
  const items = Array.from(galeri.getElementsByClassName("galeri-item"));
  let showAll = true;

  siralabuton.addEventListener("click", function () {
    galeri.innerHTML = "";
    if (showAll) {
      galeri.appendChild(items[1]);
      galeri.appendChild(items[0]);
      siralabuton.innerText = "Tüm Projeleri Göster";
    } else {
      items.forEach((item) => galeri.appendChild(item));
      siralabuton.innerText = "En Beğenilene Göre Sırala";
    }
    showAll = !showAll;
  });

  document.querySelectorAll(".galeri-item").forEach((item) => {
    item.addEventListener("click", function () {
      const imgSrc = this.querySelector("img").src;
      const description = this.querySelector(".aciklama p").innerText;
      document.getElementById("modalImg").src = imgSrc;
      document.getElementById("modalaciklama").innerText = description;
      document.getElementById("modal").style.display = "block";
    });
  });

  window.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
