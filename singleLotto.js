
$(document).ready(() => {
    obj.init();
});
$(window).bind("orientationchange", e => {
    obj.lotation();
});
// 익명 즉시실행함수(immediately-invoked function expression)
var ft = ( function(){
      //private
      const Num_List = [...Array(45).keys()];
      let   Num_Ref  = () => { return Num_List; }
      //public
      return{
              Num_Ref : Num_Ref
      }
}() );

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
        //버튼 이벤트 달기.
        $('button').click((e) => { obj.fn(e.target.id); });
        obj.lotation();
    },
    fn : id => {
        let final, luck, Ext_Array = new Set(); // ES6...
        while(Ext_Array.size < 6){
            // Ext_Array.add( (Num_Array[ Math.floor(Math.random()*45) ])+1 );
            Ext_Array.add( (ft.Num_Ref()[ Math.floor(Math.random()*45) ])+1 );
        }
        final = [...Ext_Array]; // Deep copy
        final.sort((a,b) => { return a-b; });
        final.forEach( (item, index, array) => {
            $('tr:eq(' + id + ')>td:eq(' + index +')').empty();
            obj.sleeps(1500).then( () => {
                let btn = "<button type='button' class='btn btn-outline-light btn-lg btn-block'>" + item + "</button>";
                $('tr:eq(' + id + ')>td:eq(' + index +')').html(btn);
            } );
        });
        //보너스 번호
        while(Ext_Array.size < 7){
              luck = (ft.Num_Ref()[ Math.floor(Math.random()*45) ])+1
              Ext_Array.add( luck );
        }
        obj.sleeps(1500).then(() => {
              $('#luck').html(luck);
        });
    },
    sleeps : ms => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms);
        });
    },
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
}
