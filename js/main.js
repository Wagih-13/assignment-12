$(".singer h3").click(function () {
  $(".singer p").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

window.onload = function () {
  countDownToTime("10 october 2024 9:56:00");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $("#day").html(`${days} D`);
  $("#hour").html(`${hours} h`);
  $("#mint").html(`${mins} m`);
  $("#second").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}

$("#clos").click(function () {
  $(".sideBar").css("left", "-240px");
});

$("#open").click(function () {
  $(".sideBar").css("left", "0px ");
});
