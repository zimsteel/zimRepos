
$(document).ready(() => {
    obj.init();
    obj.paint();
});

var today = ( function(){
    const _Kst = new Date();
    let YKmt  = () => { return _Kst.getFullYear();}
    let MKmt  = () => { return _Kst.getMonth()+1; }
    let DKmt  = () => { return _Kst.getDate();    }
    let DDKmt = () => { return _Kst.getDay();     }
    let FDate = () => { return new Date(YKmt(), MKmt()-1, 1); }
    let LDate = () => { return new Date(YKmt(), MKmt(), 0);   }
    let WDate = d  => { return new Date(YKmt(), MKmt()-1, d); }
    return{
        ykmt  : YKmt,  //년
        mkmt  : MKmt,  //월
        dkmt  : DKmt,  //일
        ddkmt : DDKmt, //요일
        fdate : FDate, //시작일
        ldate : LDate, //마지막일
        wdate : WDate
    }
}() );

var obj = {
    init : () => {
        $('#tableArea').empty();
        let tables  = "";
        for(let i = 0 ; i < 6 ; i++){
            tables += "<tr>";
            tables += "  <td style='width:14%'><button type='button' id='" + (i+1) + "0' class='btn btn-outline-danger    btn-block'></button></td>";
            tables += "  <td style='width:14%'><button type='button' id='" + (i+1) + "1' class='btn btn-outline-light     btn-block'></button></td>";
            tables += "  <td style='width:14%'><button type='button' id='" + (i+1) + "2' class='btn btn-outline-light     btn-block'></button></td>";
            tables += "  <td style='width:14%'><button type='button' id='" + (i+1) + "3' class='btn btn-outline-light     btn-block'></button></td>";
            tables += "  <td style='width:14%'><button type='button' id='" + (i+1) + "4' class='btn btn-outline-light     btn-block'></button></td>";
            tables += "  <td style='width:14%'><button type='button' id='" + (i+1) + "5' class='btn btn-outline-light     btn-block'></button></td>";
            tables += "  <td style='width:14%'><button type='button' id='" + (i+1) + "6' class='btn btn-outline-success   btn-block'></button></td>";
            tables += "</tr>";
        }
        $('#tableArea').html(tables);
    },
    paint : () => {
      let k = 1;
      let w = 0;
      for(let i = 1 ; i < 7 ; i++)
      { //--1
        for(let j = 0 ; j < 7 ; j++)
        { //--2
          if(k < (today.ldate().getDate())+1)
          { //--3
            w = today.wdate(k).getDay();
            if( (''+i+j) === (''+i+w) )
            { //--4
              if( k === (today.dkmt()) )
              { //오늘 날짜 확인.
                $('#'+i+j).attr('class','btn btn-info btn-block');
                $('#'+i+j).click( (e) => { obj.even(today.ykmt() + '년 ' + today.mkmt() + '월 입니다.'); } );
              }
              $('#'+i+j).html(k);
              k++;
            } //--4
            else{ $('#'+i+j).detach(); } //삭제된 요소와 연관된 jQuery 데이터나 이벤트는 유지.
          } //--3
          else{ $('#'+i+j).detach(); } //삭제된 요소와 연관된 jQuery 데이터나 이벤트는 유지.
        } //--2
      } //--1
    },
    even : month => {
        alert(month);
        // $('#alerts').html(month);
    }
}
