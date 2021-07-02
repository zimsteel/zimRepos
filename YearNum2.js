$(document).ready(() => { obj.init(); });

//즉시실행함수
var immFunc = (
    function(){
        //private
        const Num_List = [ 1,2,3,4,5,6,7,8,9,0 ];
        const Base_num = 10;
        // let   Num      = () => { return Num_List; }
        //public
        return{
            Num_Re   : Num_List,
            Base_Num : Base_num
        }
    }()
);

var index = 6;
var obj = {
    init : () => {
        $('#bd').css("background", "#2C3237");
        $('#tableArea').empty();
        let tables  = "";
        for(let i = 1 ; i < 2 ; i++){
            tables += "<tr align='center'>";
            // tables += "  <th scope='row'>";
            // tables += "    <button type='button' id='" + i + "' class='btn btn-primary btn-lg btn-block'>D.lots</button>";
            // tables += "  </th>";
            tables += "  <td class='align-middle'><img src='../Y_img/img_0.svg' alt=''></td>";
            tables += "  <td class='align-middle'><img src='../Y_img/img_0.svg' alt=''></td>";
            tables += "  <td class='align-middle'><img src='../Y_img/img_0.svg' alt=''></td>";
            tables += "  <td class='align-middle'><img src='../Y_img/img_0.svg' alt=''></td>";
            tables += "  <td class='align-middle'><img src='../Y_img/img_0.svg' alt=''></td>";
            tables += "  <td class='align-middle'><img src='../Y_img/img_0.svg' alt=''></td>";
            tables += "</tr>";
        }
        $('#tableArea').html(tables);
        // $('button').click((e) => { obj.fn(e.target.id); });
        for(let i = 0 ; i < 6 ; i++){
          obj.sleeps(2000).then(() => {
              // $('button').trigger('click');
              obj.fn('1');
          }).catch((err) =>{
              console.log(err);
          });
        }

    },
    dp : () => {

    },
    fn : (id) => {
          // console.log(id + ' : ' + typeof(id));
          // 0 ~ 4294967295, 4294967302, 4294967303
          let val = immFunc.Num_Re[ Math.floor( ( window.crypto.getRandomValues( new Uint32Array(1) )/4294967303 )*immFunc.Base_Num ) ];
          obj.paint(id, index-1, val);
          index = index-1;
    },
    paint : (id, idx, item) => {
          let btn = '';
          $('tr:eq(' + id + ')>td:eq(' + idx +')').empty();
          // btn = "<button type='button' class='btn btn-secondary btn-lg btn-block'>" + item + "</button>";
          btn = "<img src='../Y_img/img_" + item + ".svg' alt=''>";
          $('tr:eq(' + id + ')>td:eq(' + idx +')').html(btn);
    },
    sleeps : (time) => {
          return new Promise((resolve, reject) => {
              try{
                  setTimeout(resolve, time);
              }catch(e){
                  reject(new Error(e));
              }finally{

              }
          });
    }
}
