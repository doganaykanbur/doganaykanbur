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
    isim.focus();
    isValid = false;
  } else {
    errorIsim.textContent = "";
  }
  if (Mesaj.value.trim() === "") {
    errorMesaj.textContent = "Boş bırakılamaz";
    Mesaj.focus();
    isValid = false;
  } else {
    errorMesaj.textContent = "";
  }
  if (eposta.value.trim() === "") {
    errorEposta.textContent = "Boş bırakılamaz";
    eposta.focus();
    isValid = false;
  } else if (!eposta.value.trim().includes("@")) {
    errorEposta.textContent = "E-posta adresi '@' içermelidir.";
    eposta.focus();
    isValid = false;
  } else {
    errorEposta.textContent = "";
  }
  return isValid;
}
