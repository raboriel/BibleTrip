

$(() => {
  $('#startButton').on('click', (event) => {
    $('.timeLine').empty(); // reset
    for (let i = 0; i < cityArr.length; i++) {
    const $div = $('<div>').attr('class', i).text(cityArr[i]);
    $('.timeLine').append($div);
    }
    event.stopPropagation();
});
//getting class name when click the list of text
$('div').on('click', (event) => {
    const $target = event.target.className ;
    $('.textArea').empty();
    const $div = $('<div>').html(detailArr[$target]);
    $('.textArea').append($div);
    console.log($target);
    if ($target == 0 || $target == 3 || $target == 6 || $target == 10 || $target == 17 || $target == 27 || $target == 29 || $target == 36 || $target == 37 || $target == 38 || $target == 39 ||
      $target == 40 || $target == 41 || $target == 42 || $target == 43 || $target == 44) {
      $('#fish').animate(jerusalem);
    }
    else if ($target == 1 || $target == 5 || $target == 13 || $target == 21) {
      $('#fish').animate(nazareth);
    }
    else if ($target == 28 || $target == 31 || $target == 35) {
      $('#fish').animate(bethany);
    }
    else if ($target == 16 || $target == 19 || $target == 26) {
      $('#fish').animate(capernaum);
    }
    else if ($target == 12 || $target == 14 || $target == 15 || $target == 20 || $target == 22) {
      $('#fish').animate(seaOfGalilee);
    }
    else if ($target == 7 || $target == 30) {
      $('#fish').animate(jordan);
    }
    else if ($target == 2) {
      $('#fish').animate(bethlehem);
    }
    else if ($target == 4) {
      $('#fish').animate(egypt);
    }
    else if ($target == 11) {
      $('#fish').animate(samaria);
    }
    else if ($target == 18) {
      $('#fish').animate(nain);
    }
    else if ($target == 9) {
      $('#fish').animate(cana);
    }
    else if ($target == 23) {
      $('#fish').animate(tyre);
    }
    else if ($target == 24) {
      $('#fish').animate(bethsaida);
    }
    else if ($target == 25) {
      $('#fish').animate(caesarea);
    }
    else if ($target == 32) {
      $('#fish').animate(ephraim);
    }
    else if ($target == 8 || $target == 33) {
      $('#fish').animate(judea);
    }
    else if ($target == 34) {
      $('#fish').animate(jericho);
    }

    event.stopPropagation();
});

});





// let bibleName = 'John';
// let verseNumber = 1;
// let languageBtn = 'kjv';
// jQuery.ajax({
//     url:'http://getbible.net/json',
//     dataType: 'jsonp',
//     data: 'p='+bibleName+verseNumber+'&v='+languageBtn+'',
//     jsonp: 'getbible',
//     success:function(json){
//         // set text direction
//         if (json.direction == 'RTL'){
//         	var direction = 'rtl';
//         } else {
//         	var direction = 'ltr';
//         }
//         // check response type
//         if (json.type == 'verse'){
//             var output = '';
//             	jQuery.each(json.book, (index, value) => {
//                 	output += '<center><b>'+value.book_name+' '+value.chapter_nr+'</b></center><br/><p class="'+direction+'">';
//                     jQuery.each(value.chapter, (index, value) => {
//                         output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
//                         output += value.verse;
//                         output += '<br/>';
//                     });
//                     output += '</p>';
//
//             	});
//             jQuery('#scripture').html(output);
//         } else if (json.type == 'chapter'){
//             var output = '<center><b>'+json.book_name+' '+json.chapter_nr+'</b></center><br/><p class="'+direction+'">';
//             jQuery.each(json.chapter, (index, value) => {
//                 output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
//                 output += value.verse;
//                 output += '<br/>';
//             });
//             output += '</p>';
//             jQuery('#scripture').html(output);
//         } else if (json.type == 'book'){
//             var output = '';
//             jQuery.each(json.book, (index, value) => {
//                 output += '<center><b>'+json.book_name+' '+value.chapter_nr+'</b></center><br/><p class="'+direction+'">';
//                 jQuery.each(value.chapter, (index, value) => {
//                     output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
//                     output += value.verse;
//                     output += '<br/>';
//                 });
//             output += '</p>';
//         });
//         if(addTo){
//         	jQuery('#scripture').html(output);
//         }
//       }
//     },
//     error: () => {
//         jQuery('#scripture').html('<h2>No scripture was returned, please try again!</h2>');
//      },
// });
