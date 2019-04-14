

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
    $('.textArea').empty();
    const $target = event.target.className ;
    const $div = $('<div>').html(detailArr[$target]);
    $('.textArea').append($div);
    $('#fish').animate(jerusalem);
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
