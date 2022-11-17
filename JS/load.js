  let betolto = "Éppentölt"
  eppentolt()
  console.log(betolto);
  var loader = document.querySelector(".loader")

  window.addEventListener("load", vanish);
  window.addEventListener("loadedmetadata", eppentolt)

  function eppentolt() {
    
    console.log(betolto)
  }

  function vanish() {
    loader.classList.add("disppear");
  }
