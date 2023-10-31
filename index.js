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

  var thuNhapChiuThue = tongThuNhap - 4e6 - nguoiPhuThuoc * 1600000;

  document.getElementById(
    "ketQua3"
  ).innerHTML = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân ${tinhThuNhapChiuThue(
    thuNhapChiuThue
  )}`;
};

// Tính thuế dựa trên mức thu nhap
function tinhThuNhapChiuThue(thuNhapChiuThue) {
  if (thuNhapChiuThue < 0) {
    alert("Nghèo còn đòi tính thuế");
    return 0;
  } else if (thuNhapChiuThue <= 60e6) {
    thuNhapChiuThue = thuNhapChiuThue * 0.05;
  } else if (60e6 < thuNhapChiuThue && thuNhapChiuThue <= 120e6) {
    thuNhapChiuThue = 60e6 * 0.05 + (thuNhapChiuThue - 60e6) * 0.1;
  } else if (120e6 < thuNhapChiuThue && thuNhapChiuThue <= 210e6) {
    thuNhapChiuThue =
      60e6 * 0.05 + 60e6 * 0.1 + (thuNhapChiuThue - 120e6) * 0.15;
  } else if (210e6 < thuNhapChiuThue && thuNhapChiuThue <= 384e6) {
    thuNhapChiuThue =
      60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + (thuNhapChiuThue - 210e6) * 0.2;
  } else if (384e6 < thuNhapChiuThue && thuNhapChiuThue <= 624e6) {
    thuNhapChiuThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      (thuNhapChiuThue - 384e6) * 0.25;
  } else if (624e6 < thuNhapChiuThue && thuNhapChiuThue <= 960e6) {
    thuNhapChiuThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      (thuNhapChiuThue - 624e6) * 0.3;
  } else {
    thuNhapChiuThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      336e6 * 0.3 +
      (thuNhapChiuThue - 960e6) * 0.35;
  }
  return thuNhapChiuThue;
}
document.getElementById("btnKetQua3").onclick = tinhThue;

// Bài 4: Tinh tiền cáp
function disableInput() {
  var e = document.getElementById("txt-khachHang").value;
  document.getElementById("txt-ketNoi").style.display =
    "Doanh Nghiệp" == e ? "block" : "none";
}

// Phí của Nhà Dân
const phiHoaDonNhaDan = 4.5;
const phiDichVuNhaDan = 20.5;
const thueKenhNhaDan = 7.5;

// Phí của Doanh Nghiệp
const phiHoaDonDN = 15;
const phiDichVuDN = 75; // 5
const thueKenhDN = 50;

function tinhTienhCap() {
  var khachHang = document.getElementById("txt-khachHang").value;
  var maKH = document.getElementById("txt-maKH").value * 1;
  var soKenh = document.getElementById("txt-soKenh").value * 1;
  var soKetNoi = document.getElementById("txt-ketNoi").value * 1;

  var tienND = phiHoaDonNhaDan + phiDichVuNhaDan + thueKenhNhaDan * soKenh;

  var tienDN = "";
  if (soKetNoi <= 10) {
    tienDN = phiHoaDonDN + phiDichVuDN + soKenh * thueKenhDN;
  } else {
    tienDN =
      phiHoaDonDN + phiDichVuDN + soKenh * thueKenhDN + (soKetNoi - 10) * 5;
  }

  var KQ = "";
  if (khachHang == "Nhà Dân") {
    KQ = tienND;
  } else {
    KQ = tienDN;
  }

  document.getElementById(
    "ketQua4"
  ).innerHTML = `Mã Khách Hàng: ${maKH}, Tiền cáp: $${KQ} `;
}

document.getElementById("btnKetQua4").onclick = tinhTienhCap;
