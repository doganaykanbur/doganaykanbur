function gonder() {
  const isim = document.getElementById("isim");
  const Mesaj = document.getElementById("mesaj");
  const eposta = document.getElementById("eposta");

  const errorIsim = document.getElementById("error-isim");
  const errorMesaj = document.getElementById("error-mesaj");
  const errorEposta = document.getElementById("error-eposta");

  let isValid = true;

  if (isim.value.trim() === "") {
    errorIsim.textContent = "Boş bırakılamaz";
    errorIsim.classList.add("blink");
    isim.focus();
    isValid = false;
  } else {
    errorIsim.textContent = "";
    errorIsim.classList.remove("blink");
  }

  if (Mesaj.value.trim() === "") {
    errorMesaj.textContent = "Boş bırakılamaz";
    errorMesaj.classList.add("blink");
    Mesaj.focus();
    isValid = false;
  } else {
    errorMesaj.textContent = "";
    errorMesaj.classList.remove("blink");
  }

  if (eposta.value.trim() === "") {
    errorEposta.textContent = "Boş bırakılamaz";
    errorEposta.classList.add("blink");
    eposta.focus();
    isValid = false;
  } else if (!eposta.value.trim().includes("@")) {
    errorEposta.textContent = "E-posta adresi '@' içermelidir.";
    errorEposta.classList.add("blink");
    eposta.focus();
    isValid = false;
  } else {
    errorEposta.textContent = "";
    errorEposta.classList.remove("blink");
  }

  return isValid;
}
