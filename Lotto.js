
$(document).ready(() => { obj.init(); });
// const Num_Array = [...Array(45).keys()];
// 익명 즉시실행함수(immediately-invoked function expression)
var ft = ( function(){
    //private
    const Num_List = [...Array(45).keys()];
    let   Num_Ref  = function(){ return Num_List; }
    //public
    return{ Num_Ref : Num_Ref }
    //return{ Num_Ref : Num_Ref }
}() );

var obj = {
    init : () => {
        $('#tableArea').empty();
        let tables  = "";
        for(let i = 1 ; i < 6 ; i++){
            tables += "<tr align='center'>";
            tables += "  <th scope='row'>";
            tables += "    <button type='button' id='" + i + "' class='btn btn-outline-info btn-block'>D.lots</button>";
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
    fn : (id) => {
        let final, Ext_Array = new Set(); // ES6...
        while(Ext_Array.size < 6){
            // Ext_Array.add( (Num_Array[ Math.floor(Math.random()*45) ])+1 );
            Ext_Array.add( (ft.Num_Ref()[ Math.floor(Math.random()*45) ])+1 );
        }
        final = [...Ext_Array]; // Deep copy
        final.sort((a,b) => { return a-b; });
        final.forEach( (item, index, array) => {
            $('tr:eq(' + id + ')>td:eq(' + index +')').empty();
            obj.sleeps(1500).then( () => {
                let btn = "<button type='button' class='btn btn-outline-light btn-block'>" + item + "</button>";
                $('tr:eq(' + id + ')>td:eq(' + index +')').html(btn);
            } );
        });
    },
    sleeps : (ms) => {
        return new Promise((resolve, reject) => {
            console.log('ms');
            setTimeout(resolve, ms);
        });
    }
}
