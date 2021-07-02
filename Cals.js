
$(document).ready(() => { cals.init(); });

var _initVal = "0.000";

var cals = {
    init : () => {
        $('#tableArea').empty();
        let num_img   = 1;
        let num_table = "";
            //출력창
            num_table += "<tr>";
            num_table += "  <td style='width:100%;' colspan='4'>";
            num_table += "      <input class='form-control' type='text' style='text-align:right;' placeholder='0.000' readonly>";
            num_table += "  </td>";
            num_table += "</tr>";
            //연산버튼
            num_table += "<tr>";
            num_table += "  <td style='width:16%;'><button type='button' id='+' class='btn btn-primary btn-block'> +  </button></td>";
            num_table += "  <td style='width:16%;'><button type='button' id='-' class='btn btn-success btn-block'> － </button></td>";
            num_table += "  <td style='width:16%;'><button type='button' id='*' class='btn btn-danger  btn-block'> ×  </button></td>";
            num_table += "  <td style='width:16%;'><button type='button' id='/' class='btn btn-warning btn-block'> ÷  </button></td>";
            num_table += "</tr>";
        //숫자 버튼
        for(let i = 1 ; i < 5 ; i++){ //--1
            num_table += "<tr align='center'>";
            for(let j = 0 ; j < 3 ; j++){
                if(num_img < 10){
                      num_table += "<td class='align-middle'><button type='button' id='"+ num_img +"' class='btn btn-outline-info btn-block'>"+ (num_img++) +"</button></td>";
                }else{
                    if(j === 0){
                        num_table += "<td class='align-middle'><button type='button' id='('       class='btn btn-outline-danger btn-block'   > (     </button></td>"; }
                    else if(j === 1){
                        num_table += "<td class='align-middle'><button type='button' id='"+ 0 +"' class='btn btn-outline-info   btn-block'   >"+ 0 +"</button></td>"; }
                    else {
                        num_table += "<td class='align-middle'><button type='button' id=')'       class='btn btn-outline-danger btn-block'   > )     </button></td>"; }
                }
            }
            num_table += "    <th scope='row'>";
            if(i < 4){
                let k;
                    switch(i){
                        case 1:  k = '＝';
                            break;
                        case 2:  k = 'C';
                            break;
                        default: k = '.';
                    }
                   num_table += "<button type='button' id='" + k + "' class='btn btn-secondary btn-block'>"+ k +"</button>";
            }else{ num_table += "<button type='button' id='BK'        class='btn btn-secondary btn-block'> &#11013; </button>"; }
            num_table += "    </th>";
            num_table += "</tr>";
        } //--1
        $('#tableArea').html(num_table);
        $('button').click((e) => { cals.inputVal(e.target.id); });
    },// --> init END
    inputVal : (id) => {
        if('C' === id){
            _initVal = "0.000";
        }else if('＝' === id){
            _initVal = (cals.parseNum(cals.oper())).toString(); /* oper() Call */
        }else if('BK' === id){
            if(_initVal !== '0.000'){
                _initVal = _initVal.slice(0,-1);
            }
        }else{
            if("0.000" === _initVal && ("." !== id && "+" !== id && "-" !== id && "*" !== id && "/" !== id)){ _initVal = ""; }
            _initVal += id;
        }
                  $('.form-control').attr('placeholder', _initVal);
    },//연산처리
    oper : () => {
        try{
            if(isNaN(eval(_initVal))){ return 0; }
            return eval(_initVal);
        }catch(e){
            console.log(e.toString());
            throw "Exception-!!!";
        }finally{
            console.log('oper : ' + eval(_initVal) );
        }
    },//소수점처리
    parseNum : (num) => {
        try{
            return Number.parseFloat(num).toFixed(3);
        }catch(e){
            console.log(e.toString());
            throw "Exception-!!!";
        }finally{
            console.log('parseNum : ' + Number.parseFloat(num).toFixed(3));
        }
    }
}
