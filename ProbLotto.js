$(document).ready(() => {
    obj.init();
    // obj.Ncount();
    // obj.test();
    // obj.Num_shuffle();
});

$(window).bind("orientationchange", e => { obj.lotation(); });

// 익명 즉시실행함수(immediately-invoked function expression)
var ft = (
    function(){
          //private
          const count = 45;
          // const Num_List = [...Array(45).keys()]; //0 ~ 44
          const Num_List = Array(45).fill().map( (element, index) => { return index+1; } ); // 1 ~ 45
          //Array(45).fill().map( (element, index) => { return index+1; } ); 
          // Num_List.sort( (a,b) => {return a-b;} );
          //public
          return{
                  Num_Ref   : Num_List,
                  Num_count : count
          }
    }()
);

var obj = {

    init : () => {
        $('#bd').css('background', '#2C3237');
        $('#tableArea').empty();
        let tables  = "";
        for(let i = 1 ; i < 2 ; i++){
            tables += "<tr align='center'>";
            tables += "  <th scope='row'>";
            tables += "    <button type='button' id='" + i + "' class='btn btn-secondary btn-lg btn-block'>D.lots</button>";
            tables += "  </th>";
            tables += "  <td class='align-middle'>&#8383;</td>";
            tables += "  <td class='align-middle'>&#8383;</td>";
            tables += "  <td class='align-middle'>&#8383;</td>";
            tables += "  <td class='align-middle'>&#8383;</td>";
            tables += "  <td class='align-middle'>&#8383;</td>";
            tables += "  <td class='align-middle'>&#8383;</td>";
            tables += "</tr>";
        }
        $('#tableArea').html(tables);
        $('button').click((e) => { obj.fn(e.target.id); });
        obj.lotation();
        obj.fn('1');
    }
    ,
    fn : (id) => {
        console.log(ft.Num_Ref);
        let final, btn, Ext_Array = new Set(); // ES6...
        // let temp = 0;
        while(Ext_Array.size < 6){
            // 0 ~ 4294967295, 4294967302,4294967303
            Ext_Array.add( ft.Num_Ref[ Math.floor( ( window.crypto.getRandomValues( new Uint32Array(1) ) / 4294967296 ) * ft.Num_count ) ] );
            // temp++ ;
        }
        final = [...Ext_Array]; // Deep copy
        final.sort((a,b) => { return a-b; });
        final.forEach( (item, index, array) => {
          $('tr:eq(' + id + ')>td:eq(' + index +')').empty();
          // btn = "<button type='button' class='btn btn-outline-light btn-lg btn-block font-italic'>" + item + "</button>";
          btn = "<img src='../img/ball_" + item + ".png' alt=''>";
          $('tr:eq(' + id + ')>td:eq(' + index +')').html(btn);
            // obj.sleeps(1000).then( () => {
            //     $('tr:eq(' + id + ')>td:eq(' + index +')').empty();
            //     // btn = "<button type='button' class='btn btn-outline-light btn-lg btn-block font-italic'>" + item + "</button>";
            //     btn = "<img src='../img/ball_" + item + ".png' alt=''>";
            //     $('tr:eq(' + id + ')>td:eq(' + index +')').html(btn);
            // } ).catch( err => {
            //     console.log(err);
            // } );
        });
        // obj.wincry();
    }
    ,
    sleeps : ms => {
        return new Promise( (resolve, reject) => {
            try{
                setTimeout(resolve, ms);
            }catch(e){
                reject(new Error(e));
            }finally{ }
        } );
    }
    ,
    lotation : () => {
        //모바일 로테이션 처리
        let o = window.orientation;
        if(o !== undefined){
            if(o === 0){//세로보기
                $('#div2').css({
                  "position" : "absolute",
                  "top"      : "370px",
                  "left"     : "470px"
                });
            }else{ //가로보기
                $('#div2').css({
                  "position" : "absolute",
                  "top"      : "330px",
                  "left"     : "470px"
                });
            }
        }
    }
    ,
    wincry : () => {
        let idx = new Uint32Array(6);
        window.crypto.getRandomValues( idx );
        idx.sort( (a,b) => {return a-b;} );
        idx.forEach( (item, index, array) => {
            console.log( (item / 4294967302) * ft.Num_count );
            console.log( Math.floor( (item / 4294967302) * ft.Num_count ) );
        });
    }
    ,
    Num_shuffle : () => {
        let tempArray = new Set();
        let count = 0 ;
        while(tempArray.size < 45){
            tempArray.add( ft.Num_Ref()[ Math.floor(Math.random()*ft.Num_count) ] );
            count++;
        }
        console.log(tempArray);
    }
    ,
    Ncount : () => {
          /* Array.from()으로 길이가 46, 값이 0인 배열 생성 */  
          const datas = Array.from({length: 46}, () => 0);
          let   val ;
          for(let c = 0 ; c < 1000000 ; c++){
              // 0 ~ 4294967295
              val = ft.Num_Ref[ Math.floor( ( window.crypto.getRandomValues( new Uint32Array(1) ) / 4294967295 ) * ft.Num_count ) ];
              datas[val]++;
          }//-->for END
          datas.forEach( (item, index, array) => {
              console.log(index + " : " + item);
          });
    }

} //-->
