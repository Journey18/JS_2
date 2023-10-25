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

  var showKetQua = "";
  if (mon1 == 0 || mon2 == 0 || mon3 == 0) {
    showKetQua = `Bạn đã rớt do có một trong 3 môn có điểm bằng 0.`;
  } else if (diemTongKet <= diemChuan) {
    showKetQua = `Bạn đã rớt với số điểm ${diemTongKet}.`;
  } else {
    showKetQua = `Bạn đã đậu với số điểm ${diemTongKet}.`;
  }

  document.getElementById("ketQua1").innerHTML = showKetQua;
};
document.getElementById("btnKetQua").onclick = tinhDiemTrungBinh;

// Bài 2: Tính tiền điện
var tinhTienDien = function () {
  var hoTen = document.getElementById("txt-hoTen").value;
  var soKw = document.getElementById("txt-soKw").value * 1;

  if (soKw <= 50) {
    tienDien = 500 * soKw;
  } else if (50 < soKw && soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (100 < soKw && soKw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (200 < soKw && soKw <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }

  document.getElementById(
    "ketQua2"
  ).innerHTML = `Họ tên: ${hoTen}; Tiền điện ${tienDien}`;
};
document.getElementById("btnKetQua2").onclick = tinhTienDien;

// Bài 3: Tính thuế thu nhập
var tinhThue = function () {
  var hoTen = document.getElementById("txt-hoTen1").value;
  var tongThuNhap = document.getElementById("txt-tongThuNhap").value * 1;
  var nguoiPhuThuoc = document.getElementById("txt-phuThuoc").value * 1;

  if (soKw <= 50) {
    tienDien = 500 * soKw;
  } else if (50 < soKw && soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (100 < soKw && soKw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (200 < soKw && soKw <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }

  document.getElementById(
    "ketQua3"
  ).innerHTML = `Họ tên: ${hoTen}; Tiền điện ${tienDien}`;
};
document.getElementById("btnKetQua3").onclick = tinhThue;
