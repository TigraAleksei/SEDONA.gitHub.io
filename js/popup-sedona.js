var link = document.querySelector(".to-an-order-form-button");
var popup = document.querySelector(".form-sedona-order");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-overlay");
var form = popup.querySelector("form");
var entrance = popup.querySelector(".form-input-in");
var departure = popup.querySelector(".form-input-out");
  
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("entrance");
  } catch (err) {
    isStorageSupport = false;
  }
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-show");
    if (storage) {
      entrance.value = storage;
      departure.focus();
    } else {
      entrance.focus();
    }
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-show");
  });
  
  form.addEventListener("submit", function (evt) {
    if (!entrance.value || !departure.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("entrance", entrance.value);
      }
    }
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("modal-show");
      }
    }
  });