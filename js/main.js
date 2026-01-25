document.addEventListener("DOMContentLoaded", function () {

  const startBtn = document.getElementById("startProgramBtn");
  const viewBtn = document.getElementById("viewProgramBtn");

  if (startBtn) {
    startBtn.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "Programs.html";
    });
  }

  if (viewBtn) {
    viewBtn.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "Programs.html";
    });
  }

});
