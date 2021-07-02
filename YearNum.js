$(document).ready(() => {
  obj.init();
});

//즉시실행함수
var immFunc = (
    function(){
        //private
        const Num_List = [ 7, 5, 2, 6, 1, 9, 3, 4, 0, 8 ];
              Num_List.sort((a,b) => {return a-b;});
        let   Num  = () => { return Num_List; }
        //public
        return{
                Num_Re : Num
        }
    }()
);

var obj = {
    init : () => {
        $('#tableArea').empty();
        let tables  = "";
        for(let i = 1 ; i < 2 ; i++){
            tables += "<tr align='center'>";
            tables += "  <th scope='row'>";
            tables += "    <button type='button' id='" + i + "' class='btn btn-outline-info btn-lg btn-block'>D.lots</button>";
            tables += "  </th>";
            tables += "  <td class='align-middle'>.</td>";
            tables += "  <td class='align-middle'>.</td>";
            tables += "  <td class='align-middle'>.</td>";
            tables += "  <td class='align-middle'>.</td>";
            tables += "  <td class='align-middle'>.</td>";
            tables += "  <td class='align-middle'>.</td>";
            tables += "</tr>";
        }
        $('#tableArea').html(tables);
        $('button').click((e) => { obj.fn(e.target.id); });
    },
    fn : id => {
          let btn = '';
          let idx = 5;
          const final = [,,,,,,];
          // for(let i = 0 ; i < 6 ; i++){
          //     final[i] = immFunc.Num_Re()[ Math.floor( ( window.crypto.getRandomValues( new Uint32Array(1) )/4294967296 )*10 ) ]; // 0 ~ 4294967295
          // }
          for(;;){
              final[idx] = immFunc.Num_Re()[ Math.floor( ( window.crypto.getRandomValues( new Uint32Array(1) )/4294967302 )*10 ) ]; // 0 ~ 4294967295
              if(idx === 0) break;
              idx--;
          }
          // console.log(final);
          // final.reverse();
          final.forEach( (item, index, array) => {
              obj.sleeps(1000).then( () => {
                  $('tr:eq(' + id + ')>td:eq(' + index +')').empty();
                  btn = "<button type='button' class='btn btn-outline-light btn-lg btn-block'>" + item + "</button>";
                  $('tr:eq(' + id + ')>td:eq(' + index +')').html(btn);
              } );
          });
    },
    sleeps : time => {
          return new Promise((resolve, reject) => {
              setTimeout(resolve, time);
              //setTimeout(resolve, time);
          });
    }
}
