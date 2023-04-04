$(document).ready(function(){
    let dssp = JSON.parse(localStorage.getItem("dssp"))
    let masp = localStorage.getItem("masp")
    let temp = dssp.find(sp => sp.masp == masp)

    $("#tensp").html(temp.tensp)
    $("#dongia").html(temp.dongia)
    $("#mota").html(temp.mota)
    $("#soluong").html(temp.soluong)
    function napSP(sp) {
        let temp = "<img src='"+ sp.hinhanh +"' alt='Loi'>"
        $("#picture").html(temp)
    }
    $(document).ready(function() {
        dssp.forEach(sp => {
            napSP(temp)
        });
    })
})