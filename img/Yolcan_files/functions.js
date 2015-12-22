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

// external js: isotope.pkgd.js

// function emptyVideo(){
//     $grid.isotope({

//         var $grid = $('.grid').isotope({
//   // main isotope options
//   itemSelector: '.grid-item',
//   // set layoutMode
//   layoutMode: 'cellsByRow',
//   // options for cellsByRow layout mode
//   cellsByRow: {
//     columnWidth: 200,
//     rowHeight: 150
//   },
//   // options for masonry layout mode
//   masonry: {
//     columnWidth: '.grid-sizer'
//   }
// });

// $(document).ready( function() {

//   $('.grid').isotope({
//     itemSelector: '.grid-item',
//     masonry: {
//       columnWidth: 100
//     }
//   });

// });


//     });
// };
