function validateForm() {
    let x = document.forms["myform"]["un"].value;
    if (x == "" || x == 0) {
        alert("نام کاربری نباید خالی باشد ");
      return false;
    }}
    function validateForm() {
    let y = document.forms["myform"]["pw"].value;
    if (y == "" || y == 0) {
        alert("لطفا رمز عبور خود را تعیین کنید      ");
      return false;
    }
  }
  "use strict";
  const input = document.querySelector("input");
  const text = document.querySelector("span");
  input.addEventListener('input', validPassword);
  let regExpWeak = /[a-z]/;
  let regExpMedium = /\d+/;
  let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
  let min_week_password = 3;
  let min_medium_password = 6;
  let min_strong_password = 6;
  function validPassword() {
    let input_week = input.value.match(regExpWeak);
    let input_medium = input.value.match(regExpMedium);
    let input_strong = input.value.match(regExpStrong);
    if (input.value) {
      if (input.value.length <= min_week_password && (input_week || input_medium || input_strong)) {
        text.textContent = "Your password is too week";
      }
      if (input.value.length >= min_medium_password && ((input_week && input_medium) || (input_medium && input_strong) || (input_week && input_strong))) {
        text.textContent = "Your password is medium";
      }
      if (input.value.length >= min_strong_password && input_week && input_medium && input_strong) {
        text.textContent = "Your password is strong";
      }
    }
  }

  