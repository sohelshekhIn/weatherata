window.onscroll = function () {
  myFunction();
};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
$(".search-button").click(function () {
  $(this).parent().toggleClass("open");
});
document.getElementById("dst").click = function requestDesktopSite() {
  if (
    document.getElementsByTagName("meta")["viewport"].content ==
    "width= 1440px;"
  ) {
    document.getElementsByTagName("meta")["viewport"].content = "width= 400px;";
  } else {
    document.getElementsByTagName("meta")["viewport"].content =
      "width= 1440px;";
  }
};
