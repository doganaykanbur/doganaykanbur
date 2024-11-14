function gonder() {
  const isim = document.getElementById("isim");
  const mesaj = document.getElementById("mesaj");
  const eposta = document.getElementById("eposta");
  const errorIsim = document.getElementById("error-isim");
  const errorMesaj = document.getElementById("error-mesaj");
  const errorEposta = document.getElementById("error-eposta");
  const successMessage = document.getElementById("success-message");

  let isValid = true;

  if (isim.value.trim() === "") {
    errorIsim.textContent = "Boş bırakılamaz";
    isim.focus();
    isValid = false;
  } else {
    errorIsim.textContent = "";
  }

  if (mesaj.value.trim() === "") {
    errorMesaj.textContent = "Boş bırakılamaz";
    mesaj.focus();
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

  if (isValid) {
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
  }

  return isValid;
}
