$(document).ready(function(){


  var resultArray = []

  function appendButton(){
    var target = (event.target).innerText;
    if (target === '÷'){
      $('#screen').append(target);
      resultArray.push('/');
      return;
    }if(target === 'x'){
      $('#screen').append(target);
      resultArray.push('*');
      return;
    }else if (target != "C" && target != "=" ){
      $('#screen').append(target);
      resultArray.push(target);
    }
  }
  function clear(){
    $('#screen').empty();
    resultArray = [];
  }
  function equals(){
    var joinedArray = resultArray.join('');
    if (joinedArray.includes('/0')){
      $('#screen').empty();
      $('#screen').append('ERROR DUMB DUMB');
    }else if(joinedArray.endsWith('/')||joinedArray.endsWith('+') ||joinedArray.endsWith('-')||joinedArray.endsWith('*')){
      $('#screen').empty();
      $('#screen').append('ERROR DUMB DUMB');
    }else if (joinedArray.startsWith('+')||joinedArray.startsWith('/')||joinedArray.startsWith('*')){
      $('#screen').empty();
      $('#screen').append('ERROR DUMB DUMB');
    }else{
      var sum = eval(joinedArray);
      $('#screen').empty();
      $('#screen').append(sum);
    }
  }


  $('#equals').click(equals)
  $('#clear').click(clear);
  $('span').click(appendButton);
});
