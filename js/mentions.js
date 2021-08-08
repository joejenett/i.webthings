jQuery(function($){
  var urls = [];
  var base;

  $("*[data-webmention-mentions]").each(function(i,e){
    var parser = document.createElement('a');
    parser.href = $(e).data('url');
    base = parser.protocol + "//" + parser.hostname;
    urls.push(parser.pathname+parser.search);
  });

  $.getJSON("https://webmention.io/api/mentions", {
    base: base,
    targets: urls.join(",")
  }, function(data){
    $("*[data-webmention-mentions]").each(function(i,e){
      $(e).text(data.mentions[$(e).data('url')]);
    });
  });
});
