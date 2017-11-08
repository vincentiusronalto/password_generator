$(document).ready(function() {

  //for clipboard js
  new Clipboard('.btn');

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
    //initialize select tag-- ignore this
    $('select').material_select();

    // alert($('#digit').val());

    //variable for password length
    var passwordLength;
    setInterval(function(){

      passwordLength = $('#digit').val();
      // $('#pass-length').html($('#digit').val());
      $('#pass-length').html(passwordLength);



      }, 10);






/*Allowed password characters
Learn@UW - Use of Special Characters in Passwords
This document describes what special characters,
besides letters and digits (A-Z, a-z, 0-9), are allowed in passwords.
Any of the standard printable ASCII characters except white space,
with ASCII codes between 33 and 126 inclusive, are allowed in passwords.
Thus, all of these special characters are allowed in passwords:
! 	" 	# 	$ 	% 	& 	' 	( 	) 	* 	+ 	, 	- 	. 	:
; 	< 	= 	> 	? 	@ 	[ 	\ 	] 	^ 	_ 	` 	{ 	| 	} 	~
*/

  //variable for symbols,num,lower,upper
  var initArr = [];
  var resultArr = [];
  var symbolsArr = ["!",'"',"#","$", "%", "&", "'", 	"(", 	")", "*", "+", ",", "-", ".", ":",
  ";",	"<", "=", ">", 	"?", "@", 	"[", 	"\\", 	"]", 	"^", "_", "`", 	"{", 	"|", 	"}", 	"~"];

  var numberArr = ["0","1","2","3","4","5","6","7","8","9"];

  var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCaseArr = lowerCaseArr.map(function(chara){return chara.toUpperCase();});


  //If generate button clicked

  $( "#generate" ).click(function() {

    initArr = [];
    resultArr = [];

    if($("#lowercase-btn").prop( "checked")){
      initArr = initArr.concat(lowerCaseArr);
    }
    if($("#uppercase-btn").prop( "checked")){
      initArr = initArr.concat(upperCaseArr);
    }
    if($("#number-btn").prop( "checked")){
      initArr = initArr.concat(numberArr);
    }
    if($("#symbol-btn").prop( "checked")){
      initArr = initArr.concat(symbolsArr);
    }

    // //initialize random to empty
    // var ranSymbols = "";
    // var ranNum = "";
    // var ranLow = "";
    // var ranUpp = "";
    //
    // //generate random symbols,num, lower,upper
    //
    // ranSymbols = getRandomIntInclusive(0, symbolsArr.length-1);
    // ranNum = getRandomIntInclusive(0, numberArr.length-1);
    // ranLow = getRandomIntInclusive(0, lowerCaseArr.length-1);
    // ranUpp = getRandomIntInclusive(0, upperCaseArr.length-1);
    // console.log(passwordLength);
    // for(let i=0; i <= passwordLength; i++){
    //   console.log(passwordLength);
    //   resultArr.push(initArr[getRandomIntInclusive(0,initArr.length-1)]);
    // }

    for(let j = 0 ; j < passwordLength; j++){
      resultArr[j] = initArr[getRandomIntInclusive(0,initArr.length-1)];
    }




    //Generate output
    $("#foo").val(resultArr.join(""));
    $("#output").html(resultArr.join(""));
    console.log(resultArr.length);
    initArr = [];
    resultArr = [];
  });

























  });
