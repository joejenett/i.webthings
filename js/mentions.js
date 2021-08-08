jQuery(function($){
  var urls = [];
  var base;

  $("*[data-webmention-mentions]").each(function(i,e){
    var parser = document.createElement('a');
    parser.href = $(e).data('url');
    base = parser.protocol + "//" + parser.hostname;
    urls.push(parser.pathname+parser.search);
  });

    });
});
