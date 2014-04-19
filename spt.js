function sbtt($scope) {
    $scope.date = new Date().toJSON().slice(0, 10)
    $scope.l1 = localStorage.alx || ""
    $scope.la = localStorage.ala || "2/3【KOF】"
    $scope.lb = localStorage.alb || ""
    $scope.l3 = $scope.l3 ||""
    $scope.l4 = $scope.l4 ||""
    $scope.ss = [1,2];
    $scope.s = [];
    $scope.sl1 = [];
    $scope.sl2 = [];
    $scope.ssub = function () {
        $scope.sl1[0] = ra($scope.l3.split(' '));
        $scope.sl2[0] = ra($scope.l4.split(' '));
        $scope.s[0] = $scope.sl1[0]
    };
    $scope.act = function (j,k,r) {
        if ($scope.sl1[r][k] && $scope.sl2[r][k]){
        if (r+2 > $scope.ss.length) {
            $scope.ss.push(r+2)
        }
        $scope.sl1[r+1]=$scope.sl1[r+1]||[]
        $scope.sl2[r+1]=$scope.sl2[r+1]||[]
        delfo($scope.sl1[r+1], $scope.sl1[r][k]);
        delfo($scope.sl2[r+1], $scope.sl2[r][k]);
        if (j[0] == "2") {
            $scope.sl1[r+1].push($scope.sl1[r][k])
        }
        else if (j[2] == "2") {
            $scope.sl2[r+1].push($scope.sl2[r][k])
        } else {
        }
        if ($scope.sl2[r+1].length > $scope.sl1[r+1].length) {
            $scope.s[r+1] = $scope.sl2[r+1]

        } else {
            $scope.s[r+1] = $scope.sl1[r+1]
        }
    }}
}
function bb(x) {
    var b = "";
    for (var i = 12 - x.replace(/[^\x00-\xff]/g, "**").length; i > 0; i--) {
        b += "\u00A0\u00A0"
    }
    return b
}
function ra(dad) {
    for (var j, x, i = dad.length; i; j = parseInt(Math.random() * i), x = dad[--i], dad[i] = dad[j], dad[j] = x);
    return dad;
};
function delfo(b, a) {
    for (var i = b.length; i-- && b[i] !== a;);
    if (i >= 0) b.splice(i, 1);
}
