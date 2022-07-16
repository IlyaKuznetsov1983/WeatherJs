document.body.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("overlay") ||
    e.target.classList.contains("burger-toggle")
  ) {
    this.classList.toggle("burger-open")
  } else if (e.targer.classList.contains("item")) {
    this.classList.remove("burger-open")
  }
})
