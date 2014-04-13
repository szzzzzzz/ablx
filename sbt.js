window.onload = function dat() {
    document.getElementById("date").value = new Date().toJSON().slice(0, 10);
    document.getElementById("l1").value = localStorage.alx || "";
    document.getElementById("la").value = localStorage.ala || "2/3【KOF】";
};
function sbtt($scope) {
    var a1 = ra(document.getElementById("l3").value.split(' ')),
        a2 = ra(document.getElementById("l4").value.split(' '));
    $scope.sList=[a1,a2]
    $scope.ssub=function(){sub()}
};
    function bb(x) {
    var b = "";
    for (var i = 12 - x.replace(/[^\x00-\xff]/g, "**").length; i > 0; i--) {
        b += "\u00A0\u00A0"
    }
    return b
}
function sub() {
    var tx2 = "",
        txt = "【胜】VS【负】<p/>"
            + "比赛： " + document.getElementById("l1").value
            + "     VS     " + document.getElementById("l2").value + "<p/>"
            + "时间： " + document.getElementById("date").value + "<p/>"
            + "规则： " + document.getElementById("la").value + "<p/>"
            + "地点：" + document.getElementById("lb").value + "<p/>"
            + "------------第一轮------------" + "<p/>",
        a1 = ra(document.getElementById("l3").value.split(' ')),
        a2 = ra(document.getElementById("l4").value.split(' '));
    if (a1.length == a2.length) {

        for (var i = a1.length - 1; i >= 0; i--) {
            tx2 += '<p id="x' + i + '">'
                + a1[i] + bb(a1[i]) + "0:0" + bb(a2[i]) + a2[i]
                + '\u00A0\u00A0<a href="mycard://122.0.65.69:7911/M%23' + document.getElementById("l1").value
                + document.getElementById("l2").value + i + '">room</a>'+ '<p/>'
        }
        ;
        document.getElementById("mes").innerHTML = txt + tx2 + "------------第二轮------------";
        localStorage.alx = document.getElementById("l1").value;
        localStorage.ala = document.getElementById("la").value;
    } else {
        alert("2队人数不同！")
    };
}
function ra(dad) {
        for (var j, x, i = dad.length; i; j = parseInt(Math.random() * i), x = dad[--i], dad[i] = dad[j], dad[j] = x);
        return dad;
    };
