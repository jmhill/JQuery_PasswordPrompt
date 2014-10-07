//Problem: Hints are shown all the time, even when fields valid
//Solution: Hide and Show them at appropriate times.

var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//Hide hints

$("form span").hide();

function isPasswordValid () {
  return $password.val().length > 8;
}

function arePasswordsMatching () {
  return $password.val() === $confirmPassword.val();
}

function canSubmit () {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent () {
  //Find out if password is valid
  if (isPasswordValid()) {
    //Hide hint if valid
    $password.next().hide();
    //else show Hint
  } else {
    $password.next().show();
  }
}

function confirmPasswordEvent () {
  //Find out if password and confirmation match
  if (arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }   
}

function enableSubmitEvent () {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
  
//when event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();