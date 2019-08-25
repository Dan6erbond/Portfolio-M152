$(document).ready(function(){
  $(".nav-link").each(function(){
    if ($(this).attr("href").indexOf(window.location.pathname) !== -1){
      $(this).parent().addClass("active");
    }
  });
  $(".dropdown-item").each(function(){
    if ($(this).attr("href").indexOf(window.location.pathname) !== -1){
      $(this).addClass("active");
    }
  });
});

$(window).on('scroll', function(){
  var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

  var scrollPercent = (s / (d - c)) * 100;

  $("#progress-bar").css({width: `${scrollPercent}%`});
  console.log(scrollPercent);
})

function copyToClipboard(str){
  const el = document.createElement('textarea');
  el.value = !str.startsWith("#") ? str : document.location.href.split("#")[0] + str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  div = document.createElement("div");
  div.innerHTML = "Zur Zwischenablage kopiert!";
  document.getElementsByTagName("body")[0].appendChild(div);
  div.className = "copyText";

  setTimeout(function(){
    div.classList.add("active");
    setTimeout(function(){
      div.classList.remove("active");
    }, 1000);
  }, 5);
}
