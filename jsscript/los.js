var players = ["MARIUSZ.N",
      "MAREK.M",
      "SŁAWEK.M",
      "STASIU.M",
      "ARTUR.M",
      "MAREK.O",
      "ADAM.C",
      "RYSIU.N",
      "JUREK.Ł",
      "ZBYSZEK.A",
      "HUBERT.K",
      "KRZYSZTOF.W",
      "JACEK.D",
      "RYSIU.CH",
      "HUBERT.Z",
      "GENIU.Z",
      "KUBA.C",
      "ROBERT",
      "KAROL",
      "ANDRZEJ.Z"
    ];
      players.sort();
      var a = 1;
      var b = 18;
      for (var i = 0; i < players.length; i++) {
        checkBoxDisplay.innerHTML+='<input id="ch'+a+'" type="checkbox" name="playername" value="'+players[i]+'">'+'<label for="ch'+a+'">'+players[i]+'</label>'+"<br>";
        a++;
      }
    function getCheckedCheckboxesFor(checkboxName) {
          var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), playerpick = [];
          Array.prototype.forEach.call(checkboxes, function(el) {-
              playerpick.push(el.value);
          });
          return playerpick;
        }
      button1.onclick = function(){

        var playerpick = getCheckedCheckboxesFor('playername');


        if(playerpick.length==0){

          alert("Nie wybrano żadnego zawodnika");
        }else if( playerpick.length<2){
          alert("Trzeba wybrać co najmniej  dwóch zawodników")
        }else{


          const valuesToRemove = playerpick;
          const filteredItems = players.filter(item => !valuesToRemove.includes(item));

          console.log(filteredItems);

          checkBoxDisplay.style.display="none";
          result1.style.display="block";
          button1.style.display="none";
          button2.style.display="block";

          for (var i = 0; i < filteredItems.length; i++) {
            result1.innerHTML+='<input id="ch'+b+'" type="checkbox" name="playername2" value="'+filteredItems[i]+'">'+'<label for="ch'+b+'">'+filteredItems[i]+'</label>'+"<br>";
            b++;
          }
          console.log(playerpick);
          window.scrollTo(0, 0);
        }
      }
        function getCheckedSecondPick(checkboxName2){
          var checkboxes = document.querySelectorAll('input[name="' + checkboxName2 + '"]:checked'), secplayerpick = [];
          Array.prototype.forEach.call(checkboxes, function(el) {
            secplayerpick.push(el.value);
          });
          console.log(secplayerpick);
          var playerpick = getCheckedCheckboxesFor('playername');
          var counter = 1;
          var pl = playerpick.length;
          var sc = secplayerpick.length;
          function* shuffle(array1) {
              var i = array1.length;
              while (i--) {
                  yield array1.splice(Math.floor(Math.random() * (i+1)), 1)[0];
              }
          }
          if(secplayerpick.length==0){
            alert("Nie wybrano żadnego zawodnika!!");
          }else if(secplayerpick.length<playerpick.length) alert("Wybrano za mało zawodników");
          //else if(secplayerpick.length>playerpick.length+1) alert("Wbrano za dużo zawodników");
          else{
            cntvis.style.display="none";
            var random1 = shuffle(secplayerpick);
            var random2 = shuffle(playerpick);
            var table = document.getElementById("myTable");

            //for (var i = 0; i < sc; i++) {
            var i=0;


            function tloop(){
              var both = pl+sc;
            setTimeout(function(){

              var row = table.insertRow(0);
              var cell2 = row.insertCell(0);
              var cell3 = row.insertCell(1);
              var cell1 = row.insertCell(0);

            //  if(playerpick.length==0){
              //  cell2.innerHTML="PARA NR.1";
            //  }else


            if(playerpick.length==0){
              if(secplayerpick.length==1){
                cell2.innerHTML = random1.next().value;
                cell3.innerHTML = "PARA NR.1";
              }else{
                cell2.innerHTML = random1.next().value;
                cell3.innerHTML = random1.next().value;
              }
            }else{
              cell3.innerHTML = random1.next().value;
              cell2.innerHTML = random2.next().value;
            }


              cell1.innerHTML = counter;
              counter++;
              i++;


              if(i<both/2){
                tloop();
              }else reloadbutton.style.display="block";
            },1000);
            //}
          }


            tloop();







            reloadbutton.onclick = function(){
              location.reload();
            }
            window.scrollTo(0,0);
            console.log(secplayerpick);
            console.log(playerpick);
          }


        }
