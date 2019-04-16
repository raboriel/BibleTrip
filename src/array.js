//global variable for position of city
const jerusalem = {top: '66%', left: '38%'};
const bethlehem = {top: '70%', left: '40%'};
const bethany = {top: '67%', left: '43%'};
const jericho = {top: '62%', left: '50%'};
const jordan = {top: '61%', left: '58%'};
const samaria = {top: '42%', left: '38%'};
const nain = {top: '30%', left: '42%'};
const nazareth = {top: '26%', left: '40%'};
const cana = {top: '21%', left: '40%'};
const capernaum = {top: '17%', left: '52%'};
const seaOfGalilee = {top: '20%', left: '56%'};
const bethsaida = {top: '17%', left: '59%'};
const tyre = {top: '2%', left: '33%'};
const caesarea = {top: '9%', left: '63%'};
const ephraim = {top: '57%', left: '50%'};
const judea = {top: '64%', left: '32%'};
const egypt = {top: '80%', left: '5%'};


//bible verse array
const cityArr = ['1. Jerusalem', '2. Nazareth', '3. Bethlehem', '4. Jerusalem', '5. Egypt', '6. Nazareth', '7. Jerusalem', '8. The Jordan River', '9. The Wilderness', '10. Cana of Galilee', '11. Jerusalem', '12. Samaria', '13.  Galilee', '14. Nazareth', '15. The Sea of Galilee', '16. All Galilee', '17. Capernaum', '18. Jerusalem', '19. Nain', '20. Capernaum', '21. Sea of Galilee', '22. Nazareth', '23. Sea of Galilee', '24. Tyre and Sidon', '25. Bethsaida', '26. Caesarea Philippi', '27. Capernaum', '28. Jerusalem', '29. Bethany', '30. Jerusalem', '31. Beyond the Jordan', '32. Bethany', '33. Ephraim', '34. Judea', '35. Jericho', '36. Bethany', '37. The Golden Gate', '38. The Temple', '39. The Court of the Gentiles', '40. The Last Supper', '41. The Garden of Gethsemane', '42. Fortress of Antonia', "43. Herod's Palace", '44. Hasmonaean Palace', '45. Golgotha', '46. Tomb', '47. Galilee'];


//bible verse array
const verseArr = ["Luke%201:5-25", "Luke%201:26-38",  "Luke%202:1-7", "Luke%202:21-38", "Mat%202:13-23", "Mat%202:13-23", "Luke%202:41-52", "Mat%203:13-17", "Mat%204:1-11", "Jn%202:1-12", "Jn%202:13-25", "Jn%204:4-42", "Mat%204:17", "Jn%204:46-54", "Mat%204:18-22", "Mat%204:23-25", "Mat%208:14-17", "Jn%205:1-47", "Luke%207:11-17", "Luke%207:36-50", "Mat%208:18-27", "Mat%209:10-17", "Mat%2014:22-36", "Mat%2015:21-28", "Mat%2015:32-39", "Mat%2016:21-28", "Mat%2017:24-27", "Luke%2010:1-16", "Luke%2010:38-42", "Jn%209:1-41", "Jn%2010:40-42", "Jn%2011:1-46", "Jn%2011:47-54", "Mat%2019:1-2", "Luke%2019:1-10", "Jn%2012:1-9", "Mat%2021:1-11", "Mat%2021:12", "Mat%2021:12,13", "Mat%2026:17-30", "Mat%2026:30", "Mat%2027:1", "Luke%2023:6-12", "Mat%2027:15-26", "Mat%2027:35-56", "Mat%2027:35-56", "Mat%2028:19-20"];


const detailArr = ["The Birth of John the Baptist Foretold (Lk 1:5-25)", "Gabriel Announces to Mary (Lk 1:26-38)</br> Mary's Visits Elizabeth (Lk 1:26-56)</br> An Angel Comes to Joseph (Mat 1:18-25)", "The Decree of Augustus Caesar and the Birth of Christ (Lk 2:1-7)", "Jesus is Circumcised in the Temple in Jerusalem and Presented before the LORD in the Temple (Lk 2:21-38)", "The Escape to Egypt (Mat 2:13-23)", "Jesus' Early Years. Growing up in Nazareth (Mat 2:13-23)", "The Boy Jesus at the Temple (Lk 2:41-52)", "Jesus is baptized in the Jordan (Mat 3:13-17)", "Jesus is tempted in the wilderness (Mat 4:1-11)", "Turning Water to Wine (Jn 2:1-12)", "A House of Merchandise (Jn 2:13-25)</br>Unless One is Born Again (Jn 3:1-21)</br>Jesus Baptizes (Jn 3:22, with Jn 4:2)</br>", "Jesus comes to Samaria and Meets a Samaritan Woman (Jn 4:4-42)", "Jesus Taught in Their Synagogues (Mt 4:17)", "A Certain Nobleman (Jn 4:46-54)", "Peter, Andrew, James, and John (Mat 4:18-22", "Jesus Went About All Galilee . . Teaching (Mat 4:23-25)", "Simon's Wife's Mother Lay Sick, Then a Leper Came to Him (Mat 8:14-17; Mk 1:29-34; Lk 4:38-41)</br> They Brought to Him a Paralytic (Mat 9:2-8; Mk 2:1-12; Lk 5:17-26)</br> Matthew the Tax Collector(Mat 9:9; Mk 2:13, 14; Lk 5:27, 28)", "Healing at the Pool of Bethesda on the Sabbath day (Jn 5:1-47)</br> Healing in the Synagogue on the Sabbath day (Mat 12:9-14)</br> And in His Name Gentiles Will Trust (Mat 12:15-21)</br> Then He Appointed Twelve (Mat 10:2-4)</br> A Certain Centurion's Servant (Mat 8:5-13)" ,"Raises the Dead Son at Nain (Lk 7:11-17)</br> Are You the Coming One? (Mat 11:2-19)</br> My Yoke is Easy and My Burden is Light (Mat 11:20-30)", "The Woman With the Alabaster Flask (Lk 7:36-50)</br> Mary Called Magdalene (Lk 8:1-3)</br> The Blasphemy of the Holy Spirit (Mat 12:22-37; Mk 3: 19-30; Lk 11:14-20), Many Such Parables (Mat 13:24-53; Mk 4:26-34)", "Jesus Rebukes the Storm (Mat 8:18-27; Mk 4:35-41; Lk 8:22-25)</br> The Herd of Many Swine (Mat 8:28-33; Mk 5:1-21; Lk 8:26-40)", "The Parable of the Wineskins (Mat 9:10-17; Mk 2:15-22; Lk 5:29-39)</br> Jairus' Daughter and the Woman With the Flow of Blood (Mat 9:18-26; Mk 5:22-43; Lk 8:41-56)</br> The Blind and the Mute (Mat 9:27-34)", "They Saw Him Walking on the Sea (Mat 14:22-36; Mk 6:45-56; Jn 6:15-21)</br> I Am the Bread of Life (Jn 6:22-65)</br> Do you also want to go away? (Jn 6:66-71)", "A Woman of Canaan (Mat 15:21-28; Mk 7:24-30)", "Feeding Four Thousand (Mat 15:32-39; Mk 8:1-9)</br> The Leaven of the Pharisees and Sadducees (Mat 16:4-12; Mk 8:13-21)</br> Heals a Blind Man at Bethsaida (Mk 8:22-26)", "He Must Go to Jerusalem and Be Killed (Mat 16:21-28; Mk 8:31-3; 9:1; Lk 9:21-27)</br> And He Was Transfigured (Mat 17:1-13; Mk 9:2-13; Lk 9:28-36)</br> And Jesus Rebuked the Demon (Mat 17:14-21; Mk 9:14-29; Lk 9:37-43)" ,"Miracle of the Coin in the Fish's Mouth (Mat 17:24-27)", "The Lord Appointed Seventy Others (Lk 10:1-16), The Ten Lepers (Lk 17:11-19)</br> Teaches in the Temple at the Feast of Tabernacles (Jn 7:14-53)</br> The Parable of the Good Samaritan (Lk 10:25-37)", "The House of Mary and Martha (Lk 10:38-42)</br> Jesus Teaches His Disciples to Pray (Lk 11:1-13)", "I Was Blind, Now I See (Jn 9:1-41)</br> My Sheep Hear My Voice (Jn 9:39-41; 10:1-21)", "Beyond the Jordan (Jn 10:40-42; 11:3-16)", "Jesus Raises Lazarus from the Dead (Jn 11:1-46)", "The Declaration of Caiaphas (Jn 11:47-54)", "The Woman Who Was Bent Over (Mat 19:1, 2; Mk 10:1; Lk 13:10-35)</br> More Parables (Prodigal Son, The Rich Man and Lazarus, Increase Our Faith, The Pharisee and the Tax Collector ..)", "Blind Bartimaeus (Mat 20:29-34; Mk 10:46-50; Lk 18:35-43)</br> Zacchaeus who was a Chief Tax Collector (Lk 19:1-10)", "Mary Anoints the Feet of Jesus (Jn 12:1-9)", "Jesus Enters the Eastern (Golden) Gate on a Donkey(Mat 21:1-11; Mk 11:1-11; Lk 19:29-44; Jn 12:12-19)</br> Jesus and His Disciples Go to Bethany in the Evening (Mk 11:11)", "Jesus Comes to the Temple (Mat 21:12; Mk 11:11; Lk 19:45)", "Jesus Drives the Vendors Out of the Temple (Mat 21:12,13; Lk 19:45, 46)</br> The Blind and Lame Come to Jesus (Mat 21:14),", "The Last Passover with His Disciples (Mat 26:17-30; Mk 14:12-25; Lk 22:7-20), Jesus Washes the Disciples' Feet (Jn 13:1-17)", "Jesus' Prayer in Gethsemane (Mat 26:30, 36-46; Mk 14:26, 32-42; Lk 22:39-46; Jn 18:1)</br> Jesus is Betrayed and Taken (Mat 26:47-56; Mk 14:43-54, 66-72; Lk 22:47-53; Jn 18:2-12)", "Jesus is Delivered to Pilate (Mat 27:1, 2, 11-14; Mk 15:1-5; Lk 23:1-5; Jn 18:28-38)", "Pilate Sends Jesus to Herod (Lk 23:6-12)", "Pilate's Judgment. Jesus is Tried Before Pilate (Mat 27:15-26; Mk 15:6-15; Lk 23:13-25; Jn 18:39-40; 19:1-16), Jesus is Mocked by the Soldiers (Mat 27:27-31; Mk 15:16-20)", "The Crucifixion of Jesus (Mat 27:35-56; Mk 15:24-41; Lk 23:33-49; Jn 19:18-30)", "Jesus has Risen (Mat 28:1-10)","The Great Commission is given to disciples (Mat 28:19-20)"]



let idx = 0;

const callAjax = () => {
  jQuery.ajax({
      url:'http://getbible.net/json',
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
              output += '</p>';
              jQuery('#scripture').html(output);
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
          	jQuery('#scripture').html(output);
          }
        }
      },
      error: () => {
          jQuery('#scripture').html('<h2>No scripture was returned, please try again!</h2>');
       },
  });

}
