// Bài 1: Quản Lý Tuyển Sinh
var tinhDiemTrungBinh = function () {
  var diemChuan = document.getElementById("txt-diemChuan").value * 1;
  var mon1 = document.getElementById("txt-mon1").value * 1;
  var mon2 = document.getElementById("txt-mon2").value * 1;
  var mon3 = document.getElementById("txt-mon3").value * 1;
  var khuVuc = document.getElementById("txt-khuVuc").value * 1;
  var doiTuong = document.getElementById("txt-doiTuong").value * 1;

  var diemTongKet = mon1 + mon2 + mon3 + khuVuc + doiTuong;
  console.log(diemTongKet);
};
document.getElementById("btnKetQua").onclick = tinhDiemTrungBinh;
