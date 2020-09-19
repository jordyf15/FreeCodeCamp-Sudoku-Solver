// import { puzzlesAndSolutions } from './puzzle-strings.js';
// document.addEventListener('DOMContentLoaded', () => {
  $(function(){
  const textArea = document.getElementById('text-input');
  // Load a simple puzzle into the text area
  textArea.value = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  var textAreaVal=textArea.value;
$('#A1').val('');$('#A2').val('');$('#A3').val('9');  $('#A4').val('');$('#A5').val('');$('#A6').val('5');  $('#A7').val('');$('#A8').val('1');$('#A9').val('');
$('#B1').val('8');$('#B2').val('5');$('#B3').val(''); $('#B4').val('4');$('#B5').val('');$('#B6').val('');  $('#B7').val('');$('#B8').val('');$('#B9').val('2');
$('#C1').val('4');$('#C2').val('3');$('#C3').val('2');  $('#C4').val('');$('#C5').val('');$('#C6').val(''); $('#C7').val('');$('#C8').val('');$('#C9').val('');
$('#D1').val('1');$('#D2').val('');$('#D3').val('');  $('#D4').val('');$('#D5').val('6');$('#D6').val('9'); $('#D7').val('');$('#D8').val('8');$('#D9').val('3');
$('#E1').val('');$('#E2').val('9');$('#E3').val('');  $('#E4').val('');$('#E5').val('');$('#E6').val(''); $('#E7').val('');$('#E8').val('6');$('#E9').val('');
$('#F1').val('6');$('#F2').val('2');$('#F3').val('');  $('#F4').val('7');$('#F5').val('1');$('#F6').val('');  $('#F7').val('');$('#F8').val('');$('#F9').val('9');
$('#G1').val('');$('#G2').val('');$('#G3').val('');  $('#G4').val('');$('#G5').val('');$('#G6').val('');  $('#G7').val('1');$('#G8').val('9');$('#G9').val('4');
$('#H1').val('5');$('#H2').val('');$('#H3').val('');  $('#H4').val('');$('#H5').val('');$('#H6').val('4');  $('#H7').val('');$('#H8').val('3');$('#H9').val('7');
$('#I1').val('');$('#I2').val('4');$('#I3').val('');  $('#I4').val('3');$('#I5').val('');$('#I6').val('');  $('#I7').val('6');$('#I8').val('');$('#I9').val('');
  // function inputChecker
  // function gridToTextArea
  // function textAreaChangeChecker
  // function textAreatoGrid
  //Sudoku Grid
  $('#A1').on('input',()=>{
    if(inputChecker($("#A1").val())==true){
      gridToTextArea(0,$('#A1').val());
    }
  });

  $('#A2').on('input',()=>{
    if(inputChecker($("#A2").val())==true){
      gridToTextArea(1,$('#A2').val());
    }
  });

  $('#A3').on('input',()=>{
    if(inputChecker($("#A3").val())==true){
      gridToTextArea(2,$('#A3').val());
    
    }
  });

  $('#A4').on('input',()=>{
    if(inputChecker($("#A4").val())==true){
      gridToTextArea(3,$('#A4').val());
    }
  });

  $('#A5').on('input',()=>{
    if(inputChecker($("#A5").val())==true){
      gridToTextArea(4,$('#A5').val());
    }
  });

  $('#A6').on('input',()=>{
    if(inputChecker($("#A6").val())==true){
      gridToTextArea(5,$('#A6').val());
    }
  });

  $('#A7').on('input',()=>{
    if(inputChecker($("#A7").val())==true){
      gridToTextArea(6,$('#A7').val());
    }
  });

  $('#A8').on('input',()=>{
    if(inputChecker($("#A8").val())==true){
      gridToTextArea(7,$('#A8').val());
    }
  });

  $('#A9').on('input',()=>{
    if(inputChecker($("#A9").val())==true){
      gridToTextArea(8,$('#A9').val());
    }
  });

  //B row grid
  $('#B1').on('input',()=>{
    if(inputChecker($("#B1").val())==true){
      gridToTextArea(9,$('#B1').val());
    }
  });

  $('#B2').on('input',()=>{
    if(inputChecker($("#B2").val())==true){
      gridToTextArea(10,$('#B2').val());
    }
  });

  $('#B3').on('input',()=>{
    if(inputChecker($("#B3").val())==true){
      gridToTextArea(11,$('#B3').val());
    }
  });

  $('#B4').on('input',()=>{
    if(inputChecker($("#B4").val())==true){
      gridToTextArea(12,$('#B4').val());
    }
  });

  $('#B5').on('input',()=>{
    if(inputChecker($("#B5").val())==true){
      gridToTextArea(13,$('#B5').val());
    }
  });

  $('#B6').on('input',()=>{
    if(inputChecker($("#B6").val())==true){
      gridToTextArea(14,$('#B6').val());
    }
  });

  $('#B7').on('input',()=>{
    if(inputChecker($("#B7").val())==true){
      gridToTextArea(15,$('#B7').val());
    }
  });

  $('#B8').on('input',()=>{
    if(inputChecker($("#B8").val())==true){
      gridToTextArea(16,$('#B8').val());
    }
  });

  $('#B9').on('input',()=>{
    if(inputChecker($("#B9").val())==true){
      gridToTextArea(17,$('#B9').val());
    }
  });

  $('#C1').on('input',()=>{
    if(inputChecker($("#C1").val())==true){
      gridToTextArea(18,$('#C1').val());
    }
  });

  $('#C2').on('input',()=>{
    if(inputChecker($("#C2").val())==true){
      gridToTextArea(19,$('#C2').val());
    }
  });

  $('#C3').on('input',()=>{
    if(inputChecker($("#C3").val())==true){
      gridToTextArea(20,$('#C3').val());
    }
  });

  $('#C4').on('input',()=>{
    if(inputChecker($("#C4").val())==true){
      gridToTextArea(21,$('#C4').val());
    }
  });

  $('#C5').on('input',()=>{
    if(inputChecker($("#C5").val())==true){
      gridToTextArea(22,$('#C5').val());
    }
  });

  $('#C6').on('input',()=>{
    if(inputChecker($("#C6").val())==true){
      gridToTextArea(23,$('#C6').val());
    }
  });

  $('#C7').on('input',()=>{
    if(inputChecker($("#C7").val())==true){
      gridToTextArea(24,$('#C7').val());
    }
  });

  $('#C8').on('input',()=>{
    if(inputChecker($("#C8").val())==true){
      gridToTextArea(25,$('#C8').val());
    }
  });

  $('#C9').on('input',()=>{
    if(inputChecker($("#C9").val())==true){
      gridToTextArea(26,$('#C9').val());
    }
  });

  $('#D1').on('input',()=>{
    if(inputChecker($("#D1").val())==true){
      gridToTextArea(27,$('#D1').val());
    }
  });

  $('#D2').on('input',()=>{
    if(inputChecker($("#D2").val())==true){
      gridToTextArea(28,$('#D2').val());
    }
  });

  $('#D3').on('input',()=>{
    if(inputChecker($("#D3").val())==true){
      gridToTextArea(29,$('#D3').val());
    }
  });

  $('#D4').on('input',()=>{
    if(inputChecker($("#D4").val())==true){
      gridToTextArea(30,$('#D4').val());
    }
  });

  $('#D5').on('input',()=>{
    if(inputChecker($("#D5").val())==true){
      gridToTextArea(31,$('#D5').val());
    }
  });

  $('#D6').on('input',()=>{
    if(inputChecker($("#D6").val())==true){
      gridToTextArea(32,$('#D6').val());
    }
  });

  $('#D7').on('input',()=>{
    if(inputChecker($("#D7").val())==true){
      gridToTextArea(33,$('#D7').val());
    }
  });

  $('#D8').on('input',()=>{
    if(inputChecker($("#D8").val())==true){
      gridToTextArea(34,$('#D8').val());
    }
  });

  $('#D9').on('input',()=>{
    if(inputChecker($("#D9").val())==true){
      gridToTextArea(35,$('#D9').val());
    }
  });

  $('#E1').on('input',()=>{
    if(inputChecker($("#E1").val())==true){
      gridToTextArea(36,$('#E1').val());
    }
  });

  $('#E2').on('input',()=>{
    if(inputChecker($("#E2").val())==true){
      gridToTextArea(37,$('#E2').val());
    }
  });
  
  $('#E3').on('input',()=>{
    if(inputChecker($("#E3").val())==true){
      gridToTextArea(38,$('#E3').val());
    }
  });

  $('#E4').on('input',()=>{
    if(inputChecker($("#E4").val())==true){
      gridToTextArea(39,$('#E4').val());
    }
  });

  $('#E5').on('input',()=>{
    if(inputChecker($("#E5").val())==true){
      gridToTextArea(40,$('#E5').val());
    }
  });

  $('#E6').on('input',()=>{
    if(inputChecker($("#E6").val())==true){
      gridToTextArea(41,$('#E6').val());
    }
  });

  $('#E7').on('input',()=>{
    if(inputChecker($("#E7").val())==true){
      gridToTextArea(42,$('#E7').val());
    }
  });

  $('#E8').on('input',()=>{
    if(inputChecker($("#E8").val())==true){
      gridToTextArea(43,$('#E8').val());
    }
  });

  $('#E9').on('input',()=>{
    if(inputChecker($("#E9").val())==true){
      gridToTextArea(44,$('#E9').val());
    }
  });

  $('#F1').on('input',()=>{
    if(inputChecker($("#F1").val())==true){
      gridToTextArea(45,$('#F1').val());
    }
  });

  $('#F2').on('input',()=>{
    if(inputChecker($("#F2").val())==true){
      gridToTextArea(46,$('#F2').val());
    }
  });

  $('#F3').on('input',()=>{
    if(inputChecker($("#F3").val())==true){
      gridToTextArea(47,$('#F3').val());
    }
  });

  $('#F4').on('input',()=>{
    if(inputChecker($("#F4").val())==true){
      gridToTextArea(48,$('#F4').val());
    }
  });

  $('#F5').on('input',()=>{
    if(inputChecker($("#F5").val())==true){
      gridToTextArea(49,$('#F5').val());
    }
  });

  $('#F6').on('input',()=>{
    if(inputChecker($("#F6").val())==true){
      gridToTextArea(50,$('#F6').val());
    }
  });

  $('#F7').on('input',()=>{
    if(inputChecker($("#F7").val())==true){
      gridToTextArea(51,$('#F7').val());
    }
  });

  $('#F8').on('input',()=>{
    if(inputChecker($("#F8").val())==true){
      gridToTextArea(52,$('#F8').val());
    }
  });

  $('#F9').on('input',()=>{
    if(inputChecker($("#F9").val())==true){
      gridToTextArea(53,$('#F9').val());
    }
  });

  $('#G1').on('input',()=>{
    if(inputChecker($("#G1").val())==true){
      gridToTextArea(54,$('#G1').val());
    }
  });

  $('#G2').on('input',()=>{
    if(inputChecker($("#G2").val())==true){
      gridToTextArea(55,$('#G2').val());
    }
  });

  $('#G3').on('input',()=>{
    if(inputChecker($("#G3").val())==true){
      gridToTextArea(56,$('#G3').val());
    }
  });

  $('#G4').on('input',()=>{
    if(inputChecker($("#G4").val())==true){
      gridToTextArea(57,$('#G4').val());
    }
  });

  $('#G5').on('input',()=>{
    if(inputChecker($("#G5").val())==true){
      gridToTextArea(58,$('#G5').val());
    }
  });

  $('#G6').on('input',()=>{
    if(inputChecker($("#G6").val())==true){
      gridToTextArea(59,$('#G6').val());
    }
  });

  $('#G7').on('input',()=>{
    if(inputChecker($("#G7").val())==true){
      gridToTextArea(60,$('#G7').val());
    }
  });

  $('#G8').on('input',()=>{
    if(inputChecker($("#G8").val())==true){
      gridToTextArea(61,$('#G8').val());
    }
  });

  $('#G9').on('input',()=>{
    if(inputChecker($("#G9").val())==true){
      gridToTextArea(62,$('#G9').val());
    }
  });

  $('#H1').on('input',()=>{
    if(inputChecker($("#H1").val())==true){
      gridToTextArea(63,$('#H1').val());
    }
  });

  $('#H2').on('input',()=>{
    if(inputChecker($("#H2").val())==true){
      gridToTextArea(64,$('#H2').val());
    }
  });
  
  $('#H3').on('input',()=>{
    if(inputChecker($("#H3").val())==true){
      gridToTextArea(65,$('#H3').val());
    }
  });

  $('#H4').on('input',()=>{
    if(inputChecker($("#H4").val())==true){
      gridToTextArea(66,$('#H4').val());
    }
  });

  $('#H5').on('input',()=>{
    if(inputChecker($("#H5").val())==true){
      gridToTextArea(67,$('#H5').val());
    }
  });

  $('#H6').on('input',()=>{
    if(inputChecker($("#H6").val())==true){
      gridToTextArea(68,$('#H6').val());
    }
  });

  $('#H7').on('input',()=>{
    if(inputChecker($("#H7").val())==true){
      gridToTextArea(69,$('#H7').val());
    }
  });

  $('#H8').on('input',()=>{
    if(inputChecker($("#H8").val())==true){
      gridToTextArea(70,$('#H8').val());
    }
  });

  $('#H9').on('input',()=>{
    if(inputChecker($("#H9").val())==true){
      gridToTextArea(71,$('#H9').val());
    }
  });

  $('#I1').on('input',()=>{
    if(inputChecker($("#I1").val())==true){
      gridToTextArea(72,$('#I1').val());
    }
  });

  $('#I2').on('input',()=>{
    if(inputChecker($("#I2").val())==true){
      gridToTextArea(73,$('#I2').val());
    }
  });

  $('#I3').on('input',()=>{
    if(inputChecker($("#I3").val())==true){
      gridToTextArea(74,$('#I3').val());
    }
  });

  $('#I4').on('input',()=>{
    if(inputChecker($("#I4").val())==true){
      gridToTextArea(75,$('#I4').val());
    }
  });

  $('#I5').on('input',()=>{
    if(inputChecker($("#I5").val())==true){
      gridToTextArea(76,$('#I5').val());
    }
  });

  $('#I6').on('input',()=>{
    if(inputChecker($("#I6").val())==true){
      gridToTextArea(77,$('#I6').val());
    }
  });

  $('#I7').on('input',()=>{
    if(inputChecker($("#I7").val())==true){
      gridToTextArea(78,$('#I7').val());
    }
  });

  $('#I8').on('input',()=>{
    if(inputChecker($("#I8").val())==true){
      gridToTextArea(79,$('#I8').val());
    }
  });

  $('#I9').on('input',()=>{
    if(inputChecker($("#I9").val())==true){
      gridToTextArea(80,$('#I9').val());
    }
  });

  $('#text-input').on('input',()=>{
    if($('#text-input').val().length==81){
      textAreatoGrid();
    }   
  })

  $('#clear-button').on('click',()=>{
    clearInput();
  })
  $('#solve-button').on('click',()=>{
      sudokuSolver();
  })

});
function clearInput(){
  var clearValue='.................................................................................';
  document.getElementById('text-input').value=clearValue;
  $('.sudoku-input').val('');
}
function inputChecker(input){
  input=input.toString();//charCodeat only work on strings
  if(input.charCodeAt(0)>=49 && input.charCodeAt(0)<=57 && input.length==1 || input==' ' ){
    return true;
  }else{
    return false;
  }
}
function gridToTextArea(index,gridInput){
  // var newTextInput=$("#text-input").val();
  var newTextInput=document.getElementById('text-input').value;
  newTextInput=newTextInput.split('');
  if(gridInput==''){
    newTextInput.splice(index,1,'.');
  }else{
    newTextInput.splice(index,1,gridInput);
  }
  newTextInput=newTextInput.join('');
  document.getElementById('text-input').value=newTextInput;
  // $('#text-input').val(newTextInput);
}
function textAreatoGrid(){
  // var input=$('#text-input').val();
  var input=document.getElementById('text-input').value;
  if(input.length==81){
    input=input.split('')
  for(let i=0;i<81;i++){
    if(input[i]==' '){
      input.splice(input.indexOf(' '),1,'a');
    }
  }
  for(let i=0;i<81;i++){
    if(input[i]=='.'){
      input.splice(input.indexOf('.'),1,' ');
    }
  }
  input=input.join('');
  if(inputChecker(input[0])==true){
    document.getElementById('A1').value=input[0];}
  if(inputChecker(input[1])==true){
    document.getElementById('A2').value=input[1]; }
  if(inputChecker(input[2])==true){
    document.getElementById('A3').value=input[2];}
  if(inputChecker(input[3])==true){
    document.getElementById('A4').value=input[3];}
  if(inputChecker(input[4])==true){
    document.getElementById('A5').value=input[4];}
  if(inputChecker(input[5])==true){
    document.getElementById('A6').value=input[5];}
  if(inputChecker(input[6])==true){
    document.getElementById('A7').value=input[6];}
  if(inputChecker(input[7])==true){
    document.getElementById('A8').value=input[7];}
  if(inputChecker(input[8])==true){
  document.getElementById('A9').value=input[8];}
  if(inputChecker(input[9])==true){
  document.getElementById('B1').value=input[9];}
  if(inputChecker(input[10])==true){
  document.getElementById('B2').value=input[10];}
  if(inputChecker(input[11])==true){
  document.getElementById('B3').value=input[11];}
  if(inputChecker(input[12])==true){
  document.getElementById('B4').value=input[12];}
  if(inputChecker(input[13])==true){
  document.getElementById('B5').value=input[13];}
  if(inputChecker(input[14])==true){
  document.getElementById('B6').value=input[14];}
  if(inputChecker(input[15])==true){
  document.getElementById('B7').value=input[15];}
  if(inputChecker(input[16])==true){
  document.getElementById('B8').value=input[16];}
  if(inputChecker(input[17])==true){
  document.getElementById('B9').value=input[17];}
  if(inputChecker(input[18])==true){
  document.getElementById('C1').value=input[18];}
  if(inputChecker(input[19])==true){
  document.getElementById('C2').value=input[19];}
  if(inputChecker(input[20])==true){
  document.getElementById('C3').value=input[20];}
  if(inputChecker(input[21])==true){
  document.getElementById('C4').value=input[21];}
  if(inputChecker(input[22])==true){
  document.getElementById('C5').value=input[22];}
  if(inputChecker(input[23])==true){
  document.getElementById('C6').value=input[23];}
  if(inputChecker(input[24])==true){
  document.getElementById('C7').value=input[24];}
  if(inputChecker(input[25])==true){
  document.getElementById('C8').value=input[25];}
  if(inputChecker(input[26])==true){
  document.getElementById('C9').value=input[26];}
  if(inputChecker(input[27])==true){
  document.getElementById('D1').value=input[27];}
  if(inputChecker(input[28])==true){
  document.getElementById('D2').value=input[28];}
  if(inputChecker(input[29])==true){
  document.getElementById('D3').value=input[29];}
  if(inputChecker(input[30])==true){
  document.getElementById('D4').value=input[30];}
  if(inputChecker(input[31])==true){
  document.getElementById('D5').value=input[31];}
  if(inputChecker(input[32])==true){
  document.getElementById('D6').value=input[32];}
  if(inputChecker(input[33])==true){
  document.getElementById('D7').value=input[33];}
  if(inputChecker(input[34])==true){
  document.getElementById('D8').value=input[34];}
  if(inputChecker(input[35])==true){
  document.getElementById('D9').value=input[35];}
  if(inputChecker(input[36])==true){
  document.getElementById('E1').value=input[36];}
  if(inputChecker(input[37])==true){
  document.getElementById('E2').value=input[37];}
  if(inputChecker(input[38])==true){
  document.getElementById('E3').value=input[38];}
  if(inputChecker(input[39])==true){
  document.getElementById('E4').value=input[39];}
  if(inputChecker(input[40])==true){
  document.getElementById('E5').value=input[40];}
  if(inputChecker(input[41])==true){
  document.getElementById('E6').value=input[41];}
  if(inputChecker(input[42])==true){
  document.getElementById('E7').value=input[42];}
  if(inputChecker(input[43])==true){
  document.getElementById('E8').value=input[43];}
  if(inputChecker(input[44])==true){
  document.getElementById('E9').value=input[44];}
  if(inputChecker(input[45])==true){
  document.getElementById('F1').value=input[45];}
  if(inputChecker(input[46])==true){
  document.getElementById('F2').value=input[46];}
  if(inputChecker(input[47])==true){
  document.getElementById('F3').value=input[47];}
  if(inputChecker(input[48])==true){
  document.getElementById('F4').value=input[48];}
  if(inputChecker(input[49])==true){
  document.getElementById('F5').value=input[49];}
  if(inputChecker(input[50])==true){
  document.getElementById('F6').value=input[50];}
  if(inputChecker(input[51])==true){
  document.getElementById('F7').value=input[51];}
  if(inputChecker(input[52])==true){
  document.getElementById('F8').value=input[52];}
  if(inputChecker(input[53])==true){
  document.getElementById('F9').value=input[53];}
  if(inputChecker(input[54])==true){
  document.getElementById('G1').value=input[54];}
  if(inputChecker(input[55])==true){
  document.getElementById('G2').value=input[55];}
  if(inputChecker(input[56])==true){
  document.getElementById('G3').value=input[56];}
  if(inputChecker(input[57])==true){
  document.getElementById('G4').value=input[57];}
  if(inputChecker(input[58])==true){
  document.getElementById('G5').value=input[58];}
  if(inputChecker(input[59])==true){
  document.getElementById('G6').value=input[59];}
  if(inputChecker(input[60])==true){
  document.getElementById('G7').value=input[60];}
  if(inputChecker(input[61])==true){
  document.getElementById('G8').value=input[61];}
  if(inputChecker(input[62])==true){
  document.getElementById('G9').value=input[62];}
  if(inputChecker(input[63])==true){
  document.getElementById('H1').value=input[63];}
  if(inputChecker(input[64])==true){
  document.getElementById('H2').value=input[64];}
  if(inputChecker(input[65])==true){
  document.getElementById('H3').value=input[65];}
  if(inputChecker(input[66])==true){
  document.getElementById('H4').value=input[66];}
  if(inputChecker(input[67])==true){
  document.getElementById('H5').value=input[67];}
  if(inputChecker(input[68])==true){
  document.getElementById('H6').value=input[68];}
  if(inputChecker(input[69])==true){
  document.getElementById('H7').value=input[69];}
  if(inputChecker(input[70])==true){
  document.getElementById('H8').value=input[70];}
  if(inputChecker(input[71])==true){
  document.getElementById('H9').value=input[71];}
  if(inputChecker(input[72])==true){
  document.getElementById('I1').value=input[72];}
  if(inputChecker(input[73])==true){
  document.getElementById('I2').value=input[73];}
  if(inputChecker(input[74])==true){
  document.getElementById('I3').value=input[74];}
  if(inputChecker(input[75])==true){
  document.getElementById('I4').value=input[75];}
  if(inputChecker(input[76])==true){
  document.getElementById('I5').value=input[76];}
  if(inputChecker(input[77])==true){
  document.getElementById('I6').value=input[77];}
  if(inputChecker(input[78])==true){
  document.getElementById('I7').value=input[78];}
  if(inputChecker(input[79])==true){
  document.getElementById('I8').value=input[79];}
  if(inputChecker(input[80])==true){
  document.getElementById('I9').value=input[80];}
  }
}
//had to change some of the function from using jquery to javascript because mocha testing cant use it
var emptyIndex=[];
  var possibleNumberForIndexArray=[];
  function searchEmptyIndex(){//search for all empty index
    var input = document.getElementById('text-input').value;
    input=input.split('');
    input.forEach((ele,index)=>{
      if(ele=='.'){
        emptyIndex.push(index);
      }
    })
  }
  function prepPossibleNumberforIndexArr(){//preparing possible numbers 1-9 for each empty grid
    emptyIndex.forEach((ele,index)=>{
      var possibleNumberIndex={
        index:ele,
        possibleNumber:[1,2,3,4,5,6,7,8,9]
      }
      possibleNumberForIndexArray.push(possibleNumberIndex);
    })
  }
  function rowRightPossibleChecker(){//check the right row
    var sudoku=document.getElementById('text-input').value;
    possibleNumberForIndexArray.forEach((ele)=>{
      var row=Math.floor((ele.index)/9)+1;
      for(let i = ele.index;i<(9*row);i++){
        if(sudoku[i].charCodeAt(0)>=49 && sudoku[i].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[i]))!=-1){
          ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[i])),1);
        }
      }
    });
  }
  function rowLeftPossibleChecker(){//check the left row
    var sudoku = document.getElementById('text-input').value;
    possibleNumberForIndexArray.forEach((ele)=>{
      var row=Math.floor((ele.index)/9)+1;
      for(let i = 9*(row-1);i<ele.index;i++){
        if(sudoku[i].charCodeAt(0)>=49 && sudoku[i].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[i]))!=-1){
          ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[i])),1);
        }
      }
    })
  }
  function columnTopPossibleChecker(){// check the top columns
    var sudoku = document.getElementById('text-input').value;
    possibleNumberForIndexArray.forEach((ele)=>{
      var column=ele.index%9;
      for(let i =ele.index;i>=column;i-=9){
        if(sudoku[i].charCodeAt(0)>=49 && sudoku[i].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[i]))!=-1){
          ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[i])),1);
        }
      }
    })
  }
  function columnBottomPossibleChecker(){//check the bottom columns
    var sudoku = document.getElementById('text-input').value;
    possibleNumberForIndexArray.forEach((ele)=>{
      var column=(ele.index%9);
      for(let i = ele.index;i<=(72+column);i+=9){
        if(sudoku[i].charCodeAt(0)>=49 && sudoku[i].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[i]))!=-1){
            ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[i])),1);
        }
      }
    })
  }

function gridPossibleChecker(){//checking the 3x3 grid
  var sudoku = document.getElementById('text-input').value;
  possibleNumberForIndexArray.forEach((ele)=>{
    if(ele.index==0 || ele.index==3|| ele.index==6|| ele.index==27||ele.index==30||ele.index==33||ele.index==54||ele.index==57||ele.index==60){//top left corner grid
      if(sudoku[ele.index+1].charCodeAt(0)>=49 && sudoku[ele.index+1].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+1]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+1])),1);
      }
      if(sudoku[ele.index+2].charCodeAt(0)>=49 && sudoku[ele.index+2].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+2]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+2])),1);
      }
      if(sudoku[ele.index+9].charCodeAt(0)>=49 && sudoku[ele.index+9].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+9]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+9])),1);
      }
      if(sudoku[ele.index+10].charCodeAt(0)>=49 && sudoku[ele.index+10].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+10]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+10])),1);
      }
      if(sudoku[ele.index+11].charCodeAt(0)>=49 && sudoku[ele.index+11].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+11]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+11])),1);
      }
      if(sudoku[ele.index+18].charCodeAt(0)>=49 && sudoku[ele.index+18].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+18]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+18])),1);
      }
      if(sudoku[ele.index+19].charCodeAt(0)>=49 && sudoku[ele.index+19].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+19]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+19])),1);
      }
      if(sudoku[ele.index+20].charCodeAt(0)>=49 && sudoku[ele.index+20].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+20]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+20])),1);
      }
    }else if(ele.index==1 || ele.index==4|| ele.index==7|| ele.index==28||ele.index==31||ele.index==34||ele.index==55||ele.index==58||ele.index==61){//top center corner grid
      if(sudoku[ele.index-1].charCodeAt(0)>=49 && sudoku[ele.index-1].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-1]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-1])),1);
      }
      if(sudoku[ele.index+1].charCodeAt(0)>=49 && sudoku[ele.index+1].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+1]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+1])),1);
      }
      if(sudoku[ele.index+8].charCodeAt(0)>=49 && sudoku[ele.index+8].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+8]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+8])),1);
      }
      if(sudoku[ele.index+9].charCodeAt(0)>=49 && sudoku[ele.index+9].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+9]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+9])),1);
      }
      if(sudoku[ele.index+10].charCodeAt(0)>=49 && sudoku[ele.index+10].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+10]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+10])),1);
      }
      if(sudoku[ele.index+17].charCodeAt(0)>=49 && sudoku[ele.index+17].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+17]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+17])),1);
      }
      if(sudoku[ele.index+18].charCodeAt(0)>=49 && sudoku[ele.index+18].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+18]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+18])),1);
      }
      if(sudoku[ele.index+19].charCodeAt(0)>=49 && sudoku[ele.index+19].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+19]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+19])),1);
      }
    }else if(ele.index==2 || ele.index==5|| ele.index==8|| ele.index==29||ele.index==32||ele.index==35||ele.index==56||ele.index==59||ele.index==62){//top right corner grid
      if(sudoku[ele.index-2].charCodeAt(0)>=49 && sudoku[ele.index-2].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-2]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-2])),1);
      }
      if(sudoku[ele.index-1].charCodeAt(0)>=49 && sudoku[ele.index-1].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-1]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-1])),1);
      }
      if(sudoku[ele.index+7].charCodeAt(0)>=49 && sudoku[ele.index+7].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+7]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+7])),1);
      } 
      if(sudoku[ele.index+8].charCodeAt(0)>=49 && sudoku[ele.index+8].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+8]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+8])),1);
      }
      if(sudoku[ele.index+9].charCodeAt(0)>=49 && sudoku[ele.index+9].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+9]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+9])),1);
      }
      if(sudoku[ele.index+16].charCodeAt(0)>=49 && sudoku[ele.index+16].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+16]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+16])),1);
      }
      if(sudoku[ele.index+17].charCodeAt(0)>=49 && sudoku[ele.index+17].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+17]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+17])),1);
      }
      if(sudoku[ele.index+18].charCodeAt(0)>=49 && sudoku[ele.index+18].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+18]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+18])),1);
      }
    }else if(ele.index==9||ele.index==12||ele.index==15||ele.index==36||ele.index==39||ele.index==42||ele.index==63||ele.index==66||ele.index==69){//center left corner grid
      if(sudoku[ele.index-9].charCodeAt(0)>=49 && sudoku[ele.index-9].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-9]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-9])),1);
      }
      if(sudoku[ele.index-8].charCodeAt(0)>=49 && sudoku[ele.index-8].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-8]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-8])),1);
      }
      if(sudoku[ele.index-7].charCodeAt(0)>=49 && sudoku[ele.index-7].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-7]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-7])),1);
      }
      if(sudoku[ele.index+1].charCodeAt(0)>=49 && sudoku[ele.index+1].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+1]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+1])),1);
      }
      if(sudoku[ele.index+2].charCodeAt(0)>=49 && sudoku[ele.index+2].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+2]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+2])),1);
      }
      if(sudoku[ele.index+9].charCodeAt(0)>=49 && sudoku[ele.index+9].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+9]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+9])),1);
      }
      if(sudoku[ele.index+10].charCodeAt(0)>=49 && sudoku[ele.index+10].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+10]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+10])),1);
      }
      if(sudoku[ele.index+11].charCodeAt(0)>=49 && sudoku[ele.index+11].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+11]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+11])),1);
      }
    }else if(ele.index==10||ele.index==13||ele.index==16||ele.index==37||ele.index==40||ele.index==43||ele.index==64||ele.index==67||ele.index==70){//center center corner grid
      if(sudoku[ele.index-10].charCodeAt(0)>=49 && sudoku[ele.index-10].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-10]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-10])),1);
      }
      if(sudoku[ele.index-9].charCodeAt(0)>=49 && sudoku[ele.index-9].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-9]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-9])),1);
      }
      if(sudoku[ele.index-8].charCodeAt(0)>=49 && sudoku[ele.index-8].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-8]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-8])),1);
      }
      if(sudoku[ele.index-1].charCodeAt(0)>=49 && sudoku[ele.index-1].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-1]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-1])),1);
      }
      if(sudoku[ele.index+1].charCodeAt(0)>=49 && sudoku[ele.index+1].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+1]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+1])),1);
      }
      if(sudoku[ele.index+8].charCodeAt(0)>=49 && sudoku[ele.index+8].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+8]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+8])),1);
      }
      if(sudoku[ele.index+9].charCodeAt(0)>=49 && sudoku[ele.index+9].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+9]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+9])),1);
      }
      if(sudoku[ele.index+10].charCodeAt(0)>=49 && sudoku[ele.index+10].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+10]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+10])),1);
      }
    }else if(ele.index==11||ele.index==14||ele.index==17||ele.index==38||ele.index==41||ele.index==44||ele.index==65||ele.index==68||ele.index==71){//center right corner grid
      if(sudoku[ele.index-11].charCodeAt(0)>=49 && sudoku[ele.index-11].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-11]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-11])),1);
      }
      if(sudoku[ele.index-10].charCodeAt(0)>=49 && sudoku[ele.index-10].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-10]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-10])),1);
      }
      if(sudoku[ele.index-9].charCodeAt(0)>=49 && sudoku[ele.index-9].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-9]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-9])),1);
      }
      if(sudoku[ele.index-2].charCodeAt(0)>=49 && sudoku[ele.index-2].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-2]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-2])),1);
      }
      if(sudoku[ele.index-1].charCodeAt(0)>=49 && sudoku[ele.index-1].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-1]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-1])),1);
      }
      if(sudoku[ele.index+7].charCodeAt(0)>=49 && sudoku[ele.index+7].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+7]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+7])),1);
      }
      if(sudoku[ele.index+8].charCodeAt(0)>=49 && sudoku[ele.index+8].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+8]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+8])),1);
      }
      if(sudoku[ele.index+9].charCodeAt(0)>=49 && sudoku[ele.index+9].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+9]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+9])),1);
      }
    }else if(ele.index==18||ele.index==21||ele.index==24||ele.index==45||ele.index==48||ele.index==51||ele.index==72||ele.index==75||ele.index==78){//bottom left corner grid
      if(sudoku[ele.index-18].charCodeAt(0)>=49 && sudoku[ele.index-18].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-18]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-18])),1);
      }
      if(sudoku[ele.index-17].charCodeAt(0)>=49 && sudoku[ele.index-17].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-17]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-17])),1);
      }
      if(sudoku[ele.index-16].charCodeAt(0)>=49 && sudoku[ele.index-16].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-16]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-16])),1);
      }
      if(sudoku[ele.index-9].charCodeAt(0)>=49 && sudoku[ele.index-9].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-9]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-9])),1);
      }
      if(sudoku[ele.index-8].charCodeAt(0)>=49 && sudoku[ele.index-8].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-8]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-8])),1);
      }
      if(sudoku[ele.index-7].charCodeAt(0)>=49 && sudoku[ele.index-7].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-7]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-7])),1);
      }
      if(sudoku[ele.index+1].charCodeAt(0)>=49 && sudoku[ele.index+1].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+1]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+1])),1);
      }
      if(sudoku[ele.index+2].charCodeAt(0)>=49 && sudoku[ele.index+2].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+2]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+2])),1);
      }
    }else if(ele.index==19||ele.index==22||ele.index==25||ele.index==46||ele.index==49||ele.index==52||ele.index==73||ele.index==76||ele.index==79){//bottom center corner grid
      if(sudoku[ele.index-19].charCodeAt(0)>=49 && sudoku[ele.index-19].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-19]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-19])),1);
      }
      if(sudoku[ele.index-18].charCodeAt(0)>=49 && sudoku[ele.index-18].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-18]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-18])),1);
      }
      if(sudoku[ele.index-17].charCodeAt(0)>=49 && sudoku[ele.index-17].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-17]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-17])),1);
      }
      if(sudoku[ele.index-10].charCodeAt(0)>=49 && sudoku[ele.index-10].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-10]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-10])),1);
      }
      if(sudoku[ele.index-9].charCodeAt(0)>=49 && sudoku[ele.index-9].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-9]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-9])),1);
      }
      if(sudoku[ele.index-8].charCodeAt(0)>=49 && sudoku[ele.index-8].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-8]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-8])),1);
      }
      if(sudoku[ele.index-1].charCodeAt(0)>=49 && sudoku[ele.index-1].charCodeAt(0)<=57  && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-1]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-1])),1);
      }
      if(sudoku[ele.index+1].charCodeAt(0)>=49 && sudoku[ele.index+1].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+1]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index+1])),1);
      }
    }else{//bottom right corner grid
      if(sudoku[ele.index-20].charCodeAt(0)>=49 && sudoku[ele.index-20].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-20]))!=-1 ){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-20])),1);
      }
      if(sudoku[ele.index-19].charCodeAt(0)>=49 && sudoku[ele.index-19].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-19]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-19])),1);
      }
      if(sudoku[ele.index-18].charCodeAt(0)>=49 && sudoku[ele.index-18].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-18]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-18])),1);
      }
      if(sudoku[ele.index-11].charCodeAt(0)>=49 && sudoku[ele.index-11].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-11]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-11])),1);
      }
      if(sudoku[ele.index-10].charCodeAt(0)>=49 && sudoku[ele.index-10].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-10]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-10])),1);
      }
      if(sudoku[ele.index-9].charCodeAt(0)>=49 && sudoku[ele.index-9].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-9]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-9])),1);
      }
      if(sudoku[ele.index-2].charCodeAt(0)>=49 && sudoku[ele.index-2].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-2]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-2])),1);
      }
      if(sudoku[ele.index-1].charCodeAt(0)>=49 && sudoku[ele.index-1].charCodeAt(0)<=57 && ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-1]))!=-1){
        ele.possibleNumber.splice(ele.possibleNumber.indexOf(parseInt(sudoku[ele.index-1])),1);
      }
    }
  })
}

function setSinglePossible(){//if there is only one single possible then that is the number
  var singlePossibleExist=false;
  possibleNumberForIndexArray.forEach((ele,index)=>{
    if(ele.possibleNumber.length==1){
      var temp = document.getElementById('text-input').value;
      temp=temp.split('');
      temp[ele.index]=ele.possibleNumber[0];
      temp=temp.join('');
      document.getElementById('text-input').value=temp;
      $('#text-input').trigger('input');//we dont have to turnthis into native js since the testing wont use it
      singlePossibleExist=true;
    }
  })
  return singlePossibleExist;
}

function sudokuSolver(){
  if(document.getElementById('text-input').value.length==81){//if input is 81 long
  searchEmptyIndex();
  while(emptyIndex.length!=0){
    prepPossibleNumberforIndexArr();
    rowRightPossibleChecker();
    rowLeftPossibleChecker();
    columnBottomPossibleChecker();
    columnTopPossibleChecker();
    gridPossibleChecker();
    var singlePossibleExist=setSinglePossible();
    if(singlePossibleExist==false){
      document.getElementById('error-msg').innerHTML='This sudoku cant be solved yet by this sudoku solver'
      break;
    }
    emptyIndex=[];
    searchEmptyIndex();
  }
  possibleNumberForIndexArray=[]
  return document.getElementById('text-input').value;
  }else{
    document.getElementById('error-msg').innerHTML='Error: Expected puzzle to be 81 characters long.';
  }
}
try {
  module.exports = {
    inputChecker,
    gridToTextArea,
    textAreatoGrid,
    searchEmptyIndex,
    prepPossibleNumberforIndexArr,
    rowRightPossibleChecker,
    rowLeftPossibleChecker,
    columnTopPossibleChecker,
    columnBottomPossibleChecker,
    gridPossibleChecker,
    setSinglePossible,
    sudokuSolver,
    clearInput
  }
} catch (e) {}
