//gloval val for next and previous button
let actionCount = 0;

$(() => {
  // start button
  $('#startButton').on('click', (event) => {
    $('.textArea').empty();
    actionCount = 0
    startBtn(event);
  });
  // next button
  $('#Next').on('click', (event) => {
    startBtn(event);
    const target = actionCount;
    moveFish(target);
    actionCount++;
    if (actionCount >= detailArr.length) {
      actionCount = 0;
    }
  });
  // back button
  $('#Back').on('click', (event) => {
    // prevent error when click this button on start
    let target = actionCount;
    if (target > 2) {
      target -= 2;
    } else target = 0;
    moveFish(target);
    actionCount--;
    if (actionCount <= 2) {
      actionCount = 1;
    }
  });
  // for clik, timeline list
  $('div').on('click', '.timeLine', (event) => {
    const target = event.target.className ;
    actionCount = parseInt(target)+1;
    moveFish(target);
  });


  // on click call AJAX function
  $('.textArea').on('click', (event) => {
    const target = event.target.className ;
    for (let i = 0; i < verseArr.length; i++) {
      if (target == 'text'+i) {
      let idx = i;
      //call bible api
      callAjax(idx);
    }
  }
  });
});

const startBtn = (event) => {
  $('.timeLine').empty();
  // generate timeline
  for (let i = 0; i < cityArr.length; i++) {
  const $div = $('<button>').attr('class', i).html(cityArr[i]);
  $('.timeLine').append($div);
  }
  event.stopPropagation();
};


  // moving the fish
const moveFish = (target) => {
  $('.textArea').empty();
  const $div = $('<div>').attr('class', "text"+target).html('<h4>- '+(cityArr[target])+' -</h4>'+detailArr[target]+'<h5>Click for relevant verses</h5>');
  $('.textArea').append($div);
  if (target == 0 || target == 3 || target == 6 || target == 10 || target == 17 || target == 27 || target == 29 || target == 36 || target == 37 || target == 38 || target == 39 ||
    target == 40 || target == 41 || target == 42 || target == 43 || target == 44 || target == 45) {
    $('#fish').animate(jerusalem);}
  else if (target == 1 || target == 5 || target == 13 || target == 21) {
    $('#fish').animate(nazareth);}
  else if (target == 28 || target == 31 || target == 35) {
    $('#fish').animate(bethany);}
  else if (target == 16 || target == 19 || target == 26) {
    $('#fish').animate(capernaum);}
  else if (target == 12 || target == 14 || target == 15 || target == 20 || target == 22 || target == 46) {
    $('#fish').animate(seaOfGalilee);}
  else if (target == 7 || target == 30) {$('#fish').animate(jordan);}
  else if (target == 2) {$('#fish').animate(bethlehem);}
  else if (target == 4) {$('#fish').animate(egypt);}
  else if (target == 11) {$('#fish').animate(samaria);}
  else if (target == 18) {$('#fish').animate(nain);}
  else if (target == 9) {$('#fish').animate(cana);}
  else if (target == 23) {$('#fish').animate(tyre);}
  else if (target == 24) {$('#fish').animate(bethsaida);}
  else if (target == 25) {$('#fish').animate(caesarea);}
  else if (target == 32) {$('#fish').animate(ephraim);}
  else if (target == 8 || target == 33) {$('#fish').animate(judea);}
  else if (target == 34) {$('#fish').animate(jericho);}
}



//bible api ajax function
const callAjax = (idx) => {
  jQuery.ajax({
      url:'https://getbible.net/json',
      dataType: 'jsonp',
      data: 'scrip='+verseArr[idx],
      jsonp: 'getbible',
      success:function(json){
          // set text direction
          if (json.direction == 'RTL'){
          	var direction = 'rtl';
          } else {
          	var direction = 'ltr';
          }
          // check response type
          if (json.type == 'verse'){
              var output = '';
              	jQuery.each(json.book, (index, value) => {
                  	output += '<center><b>'+value.book_name+' '+value.chapter_nr+'</b></center><br/><p class="'+direction+'">';
                      jQuery.each(value.chapter, (index, value) => {
                          output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
                          output += value.verse;
                          output += '<br/>';
                      });
                      output += '</p>';

              	});
              const $div = $('<div>').html(output);
              $('.textArea').empty();
              $('.textArea').append($div);
              // jQuery('#scripture').html(output);
          } else if (json.type == 'chapter'){
              var output = '<center><b>'+json.book_name+' '+json.chapter_nr+'</b></center><br/><p class="'+direction+'">';
              jQuery.each(json.chapter, (index, value) => {
                  output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
                  output += value.verse;
                  output += '<br/>';
              });
              const $div = $('<div>').html(output);
              $('.textArea').empty();
              $('.textArea').append($div);
          } else if (json.type == 'book'){
              var output = '';
              jQuery.each(json.book, (index, value) => {
                  output += '<center><b>'+json.book_name+' '+value.chapter_nr+'</b></center><br/><p class="'+direction+'">';
                  jQuery.each(value.chapter, (index, value) => {
                      output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
                      output += value.verse;
                      output += '<br/>';
                  });
              output += '</p>';
          });
          if(addTo){
          	$('.textArea').html(output);
          }
        }
      },
      error: () => {
          $('.textArea').html('<h2>No scripture was returned, please try again!</h2>');
       },
  });

}
