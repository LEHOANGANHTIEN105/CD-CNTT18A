class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

const danhSachSinhVien = [
    new SinhVien("SV01", "Le Hoang Anh Tien", 19, 8),
    new SinhVien("SV02", "Vo Kim Truc", 20, 6.5),
    new SinhVien("SV03", "Tran Quoc Huy", 18, 4),
    new SinhVien("SV04", "Vo Duy Anh", 19, 9),
    new SinhVien("SV05", "Nguyen Hoang Hai", 20, 3.5)
];

const sinhVienDatYeuCau = danhSachSinhVien.filter(
    sv => sv.diem >= 5
);


console.log("DANH SÁCH SINH VIÊN ĐẠT YÊU CẦU:");

sinhVienDatYeuCau.forEach(sv => {
    console.log(`${sv.ma} - ${sv.hoTen} - ${sv.tuoi} tuổi - ${sv.diem} điểm`);
});
