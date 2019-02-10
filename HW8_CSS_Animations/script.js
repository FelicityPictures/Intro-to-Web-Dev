let cookie = document.querySelector("#cookie");
cookie.addEventListener("click", eat);

function eat(){
  cookie.removeEventListener("click", eat);
  document.querySelector("#bite").classList.remove("hidden");
  document.querySelector("#instructions").textContent="";
  cookie.classList.add("bite-cookie");
  let tear = document.querySelector("#tear");
  setTimeout(function(){
    document.querySelector("#textbox").textContent=":(";
    tear.classList.add("tear-drop");
  }, 1000);
}
