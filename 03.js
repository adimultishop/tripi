//<![CDATA[
var classicMode = false;
    var summary = 20;
    var indent = 3;
    imgr = new Array();
    showRandomImg = true;
    aBold = true;
    summaryPost = 170;
    summaryTitle = 25;
    numposts1 = 8;
    numposts2 = 8;
    numposts3=3;
    var classicMode = false;
    var summary = 50;
    var indent = 3;
    var relatedTitles = new Array();
    var relatedTitlesNum = 0;
    var relatedUrls = new Array();
    var thumburl = new Array();
    imgr = new Array();
    imgr[0] = "https://3.bp.blogspot.com/-l6mLadzuSpU/V81xcwvWeEI/AAAAAAAAA3Y/T0yIVIIbrSY03NQ6yx5EY2O6KIhXcCyRwCLcB/s1600/default.jpg"; // set your own image 
    showRandomImg = true;
    aBold = true;
    summaryPost = 150; 
    summaryTitle = 50; 
    anumposts1 = 10;
    abnumpost = '4';
    featured_numposts = '4';
    function topslider(json) {
      j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
      img = new Array();
      if (numposts3 <= json.feed.entry.length) {
        maxpost = numposts1
      } else {
        maxpost = json.feed.entry.length
      }
      document.write('<div id="main-slider">');
      for (var i = 0; i < maxpost; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var feat_cat = entry.category[0].term;
        var thumbnail_size = 1600;
        var pcm;
        var posturl;
        var cate = '';
        for (var e = 0; e < json.feed.entry[i].category.length; e++) {
          cate = cate + '<a href="/search/label/' + json.feed.entry[i].category[e].term + '?max-results=6">' + json.feed.entry[i].category[e].term + '</a>, '
        }
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
          if (entry.link[k].rel == 'alternate') {
            posturl = entry.link[k].href;
            break
          }
        }
        for (var k = 0; k < entry.link.length; k++) {
          if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
            pcm = entry.link[k].title.split(" ")[0];
            break
          }
        }
        if ("content" in entry) {
          var postcontent = entry.content.$t
          } else if ("summary" in entry) {
            var postcontent = entry.summary.$t
            } else var postcontent = "";
        postdate = entry.published.$t;
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        s = postcontent;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var month2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = postdate.split("-")[2].substring(0, 2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for (var u2 = 0; u2 < month.length; u2++) {
          if (parseInt(m) == month[u2]) {
            m = month2[u2];
            break
          }
        }
        var tmb = img[i];
        var daystr = day + ' ' + m + ' ' + y;
        var trtd = '<div class="item"><a class="thumb-owl" href="' + posturl + '"><img height="490px" src="' + tmb.replace(/s\B\d{2,4}/, 's' + thumbnail_size + '') + '" /></a><div class="feat-wrapper"><div class="feat-wrapper-inner"><div class="feat--inner"><div class="feat-header"><span class="feat-cat"><a href="/search/label/' + feat_cat + '">' + feat_cat + '</a></span><h2 class="feat-title"><a href="' + posturl + '">' + posttitle + '</a></h2></div> <div class="feat-readmore"><a href="' + posturl + '">Informações</a></div>  </div></div></div> <span class="border-feat"></span></div>';
        document.write(trtd);
        j++
      }
      document.write('</div>')
    }
	//]]>