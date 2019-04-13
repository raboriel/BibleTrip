let bibleName = 'John';
let verseNumber = 1;
let languageBtn = 'kjv';
const cityArr= ['1. Jerusalem', '2. Nazareth', '3. Bethlehem', '4. Jerusalem', '5. Egypt', '6. Nazareth', '7. Jerusalem', '8. The Jordan River', '9. The Wilderness', '10. Cana of Galilee', '11. Jerusalem', '12. Samaria', '13.  Galilee', '14. Nazareth', '15. The Sea of Galilee', '16. All Galilee', '17. Capernaum', '18. Jerusalem', '19. Nain', '20. Capernaum', '21. Sea of Galilee', '22. Nazareth', '23. Sea of Galilee', '24. Tyre and Sidon', '25. Bethsaida', '26. Caesarea Philippi', '27. Capernaum', '28. Jerusalem', '29. Bethany', '30. Jerusalem', '31. Beyond the Jordan', '32. Bethany', '33. Ephraim', '34. Judea', '35. Jericho', '36. Bethany'];

$(() => {
  $('#startButton').on('click', (event) => {
    $('.container').empty(); // reset
    for (let i = 0; i < cityArr.length; i++) {  //generate div tag
    const $div = $('<div>').attr('class', i).text(cityArr[i]);
    $('.timeLine').append($div);
    }
});
//getting class name when click the list of text
$('div').on('click', (event) => {
    const $target = event.target.className;
      console.log($target);

});

});






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
