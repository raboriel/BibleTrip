

$(() => {
  $('#startButton').on('click', (event) => {
    $('.timeLine').empty();
    $('.timeLine').append().html("<h4>Jesus Christ Timeline</h4>");
    // generate timeline
    for (let i = 0; i < cityArr.length; i++) {
    const $div = $('<div>').attr('class', i).html(cityArr[i]);
    $('.timeLine').append($div);
    }
    event.stopPropagation();
});

$('div').on('click', '.timeLine', (event) => {
    //getting class name when click the list of text
    const $target = event.target.className ;
    $('.textArea').empty();
    const $div = $('<div>').attr('class', "text"+$target).html(detailArr[$target]);
    $('.textArea').append($div);
    // moving the fish
    if ($target == 0 || $target == 3 || $target == 6 || $target == 10 || $target == 17 || $target == 27 || $target == 29 || $target == 36 || $target == 37 || $target == 38 || $target == 39 ||
      $target == 40 || $target == 41 || $target == 42 || $target == 43 || $target == 44 || $target == 45) {
      $('#fish').animate(jerusalem);}
    else if ($target == 1 || $target == 5 || $target == 13 || $target == 21) {
      $('#fish').animate(nazareth);}
    else if ($target == 28 || $target == 31 || $target == 35) {
      $('#fish').animate(bethany);}
    else if ($target == 16 || $target == 19 || $target == 26) {
      $('#fish').animate(capernaum);}
    else if ($target == 12 || $target == 14 || $target == 15 || $target == 20 || $target == 22 || $target == 46) {
      $('#fish').animate(seaOfGalilee);}
    else if ($target == 7 || $target == 30) {$('#fish').animate(jordan);}
    else if ($target == 2) {$('#fish').animate(bethlehem);}
    else if ($target == 4) {$('#fish').animate(egypt);}
    else if ($target == 11) {$('#fish').animate(samaria);}
    else if ($target == 18) {$('#fish').animate(nain);}
    else if ($target == 9) {$('#fish').animate(cana);}
    else if ($target == 23) {$('#fish').animate(tyre);}
    else if ($target == 24) {$('#fish').animate(bethsaida);}
    else if ($target == 25) {$('#fish').animate(caesarea);}
    else if ($target == 32) {$('#fish').animate(ephraim);}
    else if ($target == 8 || $target == 33) {$('#fish').animate(judea);}
    else if ($target == 34) {$('#fish').animate(jericho);}
    event.stopPropagation();
});

// on click call AJAX function 
$('.textArea').on('click', (event) => {
  const $target = event.target.className ;
  for (let i = 0; i < verseArr.length; i++) {
    if ($target == 'text'+i) {
    idx = i;
    callAjax();
  }
}

});
});
