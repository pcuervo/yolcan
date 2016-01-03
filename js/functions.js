function imgToSvg(){
    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a').removeAttr('width').removeAttr('height');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

} //imgToSvg


/*------------------------------------*\
    #TOGGLE FUNCTIONS
\*------------------------------------*/

function init_masonry(){
    var $container = $('#content');

    $container.imagesLoaded( function(){
        $container.masonry({
          itemSelector: '.box-content',
          isAnimated: true
        });
    });
}


/*------------------------------------*\

\*------------------------------------*/


// Customized check-box

var input = document.querySelectorAll("label.check input");
if(input !== null) {
  [].forEach.call(input, function(el) {
    if(el.checked) {
      el.parentNode.classList.add('c_on');
    }
    el.addEventListener("click", function(event) {
      event.preventDefault();
      el.parentNode.classList.toggle('c_on');
    }, false);
  });
}

// Customized radio

var input = document.querySelectorAll("label.radio input");
if(input !== null) {
  [].forEach.call(input, function(el) {
    if(el.checked) {
      el.parentNode.classList.add('r_on');
    }
    el.addEventListener("click", function(event) {
      event.preventDefault();
      el.parentNode.classList.toggle('r_on');
    }, false);
  });
}

