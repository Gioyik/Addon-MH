/*
* FeedEk jQuery RSS/ATOM Feed Plugin 
* http://jquery-plugins.net/FeedEk/FeedEk.html
* Author : Engin KIZIL 
* http://www.enginkizil.com
*/

(function ($) {
    $.fn.FeedEk = function (opt) {
        var def = {
            FeedUrl: '',
            MaxCount: 5,
            ShowDesc: true,
            ShowPubDate: true
        };
        if (opt) {
            $.extend(def, opt)
        }
        var idd = $(this).attr('id');
        if (def.FeedUrl == null || def.FeedUrl == '') {
            $('#' + idd).empty();
            return
        }
        var pubdt;
        $('#' + idd).empty().append('<div style="text-align:left; padding:3px;"><img src="loader.gif" /></div>');
        $.ajax({
            url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + def.MaxCount + '&output=json&q=' + encodeURIComponent(def.FeedUrl) + '&callback=?',
            dataType: 'json',
            success: function (data) {
                $('#' + idd).empty();
                $.each(data.responseData.feed.entries, function (i, entry) {
					var title = entry.title;
                    title = title.replace("David Bengoa (YouWoTMA) :", " ");
                    title = title.replace("Felipe Lerena (L1pe) :", " ");
                    title = title.replace("Francisco Picolini (FrancJP) :", " ");
                    title = title.replace("Giovanny G\u00f3ngora (Gioyik) :", " ");
                    title = title.replace("Gloria Meneses (Izel) :", " ");
                    title = title.replace("Guillermo L\u00f3pez (Willyaranda) :", " ");
                    title = title.replace("Guillermo Movia (Deimidis) :", " ");
                    title = title.replace("Jorge Villalobos (jorgev) :", " ");
                    title = title.replace("Jusa\u00ed Prieto :", " ");
                    title = title.replace("Lourdes Castillo :", " ");
                    title = title.replace("Noctuido :", " "); 
                    title = title.replace("Pascal Chevrel (Pascalc) :", " "); 
                    title = title.replace("Ricardo Palomares (rickiees) :", " "); 
                    title = title.replace("Rub\u00e9n Mart\u00edn (Nukeador) :", " "); 
                    title = title.replace("Santiago Hollmann (Nuno) :", " ");
                    title = title.replace("Willy Aguirre :", " ");               
                    /*title = title.replace(/(\w+)(\s\w+\s:)|(\w+)(\s:)|(\w+)/, " ");
                    title = title.replace(/\u00ed/, " ");
                    title = title.replace(/\w+\s:/, " ");    */                
                    $('#' + idd).append('<div class="ItemTitle"><a id="rtitle" href="' + entry.link + '" target="_blank" >' + title + '</a></div>');
                    
                    //$("#rtitle").html(title);
                    console.log(entry.title);                    
                    if (def.ShowPubDate) {
                        pubdt = new Date(entry.publishedDate);
                        $('#' + idd).append('<!--div class="ItemDate">' + pubdt.toLocaleDateString() + '</div-->')
                    }
                    if (def.ShowDesc) $('#' + idd).append('<!--div class="ItemContent">' + entry.content + '</div-->')
                })
            }
        })
    }
})(jQuery);
