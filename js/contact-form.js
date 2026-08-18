(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var wrap = form.closest(".cf-send-message-form");
  var success = wrap && wrap.querySelector(".w-form-done");
  var fail = wrap && wrap.querySelector(".w-form-fail");
  var nextField = form.querySelector('input[name="_next"]');

  if (success && /[?&]sent=1(?:&|$)/.test(window.location.search)) {
    form.style.display = "none";
    success.style.display = "block";
    if (fail) fail.style.display = "none";
    wrap.classList.add("is-success");
  }

  form.addEventListener("submit", function () {
    var existing = form.querySelector('input[name="_replyto"]');
    if (existing) existing.remove();

    var replyTo = document.createElement("input");
    replyTo.type = "hidden";
    replyTo.name = "_replyto";
    replyTo.value = document.getElementById("Message-Form-Email-Address").value.trim();
    form.appendChild(replyTo);

    if (nextField) {
      nextField.value =
        window.location.origin +
        window.location.pathname.replace(/index\.html$/, "") +
        "?sent=1#contact_us";
    }
  });
})();
