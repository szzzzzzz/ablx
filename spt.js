function sbtt($scope) {
    $scope.date= new Date().toJSON().slice(0, 10)
    $scope.l1= localStorage.alx || ""
    $scope.la   = localStorage.ala || "2/3【KOF】"
    $scope.lb   = localStorage.alb || ""

    $scope.ssub=function(){
        $scope.sList=sub();
        }
    $scope.act=function(j,k){
        $scope.s2List=[[k[0],k[1]]];
    }
};
    function bb(x) {
    var b = "";
    for (var i = 12 - x.replace(/[^\x00-\xff]/g, "**").length; i > 0; i--) {
        b += "\u00A0\u00A0"
    }
    return b
}
function sub() {
    var tx={},
        a1 = ra(document.getElementById("l3").value.split(' ')),
        a2 = ra(document.getElementById("l4").value.split(' '));
    if (a1.length == a2.length) {
        for (var i = a1.length - 1; i >= 0; i--) {
            tx[i]=[a1[i],a2[i]]
        }
        localStorage.alx = document.getElementById("l1").value;
        localStorage.ala = document.getElementById("la").value;
        localStorage.alb = document.getElementById("lb").value;

        return tx
    } else {
        alert("2队人数不同！")
    };
}
function ra(dad) {
        for (var j, x, i = dad.length; i; j = parseInt(Math.random() * i), x = dad[--i], dad[i] = dad[j], dad[j] = x);
        return dad;
    };
