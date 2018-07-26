  var link = document.querySelector(".btn-feedback");
  
  var popup = document.querySelector(".modal-window");
  var close = popup.querySelector(".modal-close");
  
  var form = popup.querySelector("form");
  var input-name = popup.querySelector("[name=input-name]");
  var input-email = popup.querySelector("[name=input-email]");
  
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("input-name");
  } catch (err) {
    isStorageSupport = false;
  }
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storage) {
      input-name.value = storage;
      password.focus();
    } else {
      input-name.focus();
    }
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
  
  form.addEventListener("submit", function (evt) {
    if (!input-name.value || !input-email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("input-name", input-name.value);
      }
    }
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });