document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");
  const sortButton = document.getElementById("sortButton");
  const items = Array.from(gallery.getElementsByClassName("gallery-item"));
  let showAll = true;

  sortButton.addEventListener("click", function () {
    gallery.innerHTML = "";
    if (showAll) {
      gallery.appendChild(items[1]);
      gallery.appendChild(items[0]);
      sortButton.innerText = "Tüm Projeleri Göster";
    } else {
      items.forEach((item) => gallery.appendChild(item));
      sortButton.innerText = "En Beğenilene Göre Sırala";
    }
    showAll = !showAll;
  });

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", function () {
      const imgSrc = this.querySelector("img").src;
      const description = this.querySelector(".caption p").innerText;
      document.getElementById("modalImg").src = imgSrc;
      document.getElementById("modalCaption").innerText = description;
      document.getElementById("modal").style.display = "block";
    });
  });

  document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });

  window.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
