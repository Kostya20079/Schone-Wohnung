document.addEventListener("DOMContentLoaded", () => {
  const ERROR_MESSAGE = "Bitte geben Sie ein gültiges Formular ein";
  const SUCCESS_MESSAGE = "Sie haben Ihre Nachricht erfolgreich versendet!";
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add("_sending");
      let response = await fetch("./../php/sendEmail.php", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      if (response.ok) {
        colorMessage = "linear-gradient(to right, #00b09b, #96c93d)";
        showTostMessage(SUCCESS_MESSAGE, colorMessage);
        form.reset();
        form.classList.remove("_sending");
      } else {
        colorMessage = "linear-gradient(to right, red, red)";
        showTostMessage(ERROR_MESSAGE, colorMessage);
        form.classList.remove("_sending");
      }
    } else {
      colorMessage = "linear-gradient(to right, red, red)";
      showTostMessage(ERROR_MESSAGE, colorMessage);
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (test(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }

  function test(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});

function showTostMessage(message, colorMessage) {
  Toastify({
    text: message,
    duration: 5000,
    newWindow: true,
    className: "toast-message",
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: colorMessage,
    },
  }).showToast();
}
