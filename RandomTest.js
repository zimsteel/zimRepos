$(document).ready(() => {
    mainFun.init();
});

var startFun = (
  function(){
      const count = 18;
      return{
        reCount : count
      }
  }()
);

var mainFun = {
  init : () => {
    $('#bd').css('backgroundColor','#495057');
    $('#gridArea').empty();
    let grid = "";
    grid = "<button type='button' id='btn1' class='btn btn-primary btn-lg btn-block'>D.lots</button>";
    $('#gridArea').html(grid);
    $('button').click((e) => { mainFun.test(e.target.id); });
  },
  test : (id) => {
      console.clear();
      let reVal = total = 0 ;
      let datas = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      //let datas = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      for(let j = 0 ; j < 1000000 ; j++){
          //4294967295, 4294967296, 4294967300
          reVal = Math.floor( ( window.crypto.getRandomValues( new Uint32Array(1) )/4294967333 ) * startFun.reCount );
          switch(reVal){
              case 0:
                  datas[0]++; break;
              case 1:
                  datas[1]++; break;
              case 2:
                  datas[2]++; break;
              case 3:
                  datas[3]++; break;
              case 4:
                  datas[4]++; break;
              case 5:
                  datas[5]++; break;
              case 6:
                  datas[6]++; break;
              case 7:
                  datas[7]++; break;
              case 8:
                  datas[8]++; break;
              case 9:
                  datas[9]++; break;
              case 10:
                  datas[10]++; break;
              case 11:
                  datas[11]++; break;
              case 12:
                  datas[12]++; break;
              case 13:
                  datas[13]++; break;
              case 14:
                  datas[14]++; break;
              case 15:
                  datas[15]++; break;
              case 16:
                  datas[16]++; break;
              case 17:
                  datas[17]++; break;
              default :
                  break;
          }
          //      if(reVal === 0){ datas[0]++; }
          // else if(reVal === 1){ datas[1]++; }
          // else if(reVal === 2){ datas[2]++; }
          // else if(reVal === 3){ datas[3]++; }
          // else if(reVal === 4){ datas[4]++; }
          // else if(reVal === 5){ datas[5]++; }
          // else if(reVal === 6){ datas[6]++; }
          // else if(reVal === 7){ datas[7]++; }
          // else if(reVal === 8){ datas[8]++; }
          // else if(reVal === 9){ datas[9]++; }
          // else if(reVal === 10){ datas[10]++; }
          // else if(reVal === 11){ datas[11]++; }
          // else if(reVal === 12){ datas[12]++; }
          // else if(reVal === 13){ datas[13]++; }
          // else if(reVal === 14){ datas[14]++; }
          // else if(reVal === 15){ datas[15]++; }
          // else if(reVal === 16){ datas[16]++; }
          // else if(reVal === 17){ datas[17]++; }
      }
      datas.forEach((item, i) => {
        total = total + item;
      });
      console.log(total);
      console.log(datas);
      console.log(1 == true ? "ok" : "no");
  }
}
