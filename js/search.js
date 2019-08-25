import find from "https://raw.githack.com/Dan6erbond/Fuzzle/master/javascript/fuzzle.js";

var url = new URL(document.location.href).searchParams;

if (url.get("q") != "" && url.get("q") != null) {
  $.get('pages.json', function(data) {
    var array = JSON.parse(data);
    var query = url.get("q");
    var timeStarted = new Date();
    var results = find(array, query, ["description"], true);
    var timeEnded = new Date();

    $("#title").html(`Suchresultate für '${query}'...`);
    $("#time").html(`${results.length} Resultate in ${timeEnded - timeStarted}ms`);

    if (results.length < 1){
      $("#no-results").css({display: "block"});
    }

    for (var i in results){
      var li = $("<li>");
      var a = $("<a>");
      a.html(results[i]["key"]);
      a.attr("href", results[i]["url"]);
      var p = $("<p>");
      p.html(results[i]["description"]);
      li.append(a);
      li.append(p)
      $("#results").append(li);
    }
  }, 'text');
}
