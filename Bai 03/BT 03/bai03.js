
const fs = require('fs');

const thongTin = `Họ tên: LÊ HOÀNG ANH TIÊN
Mã sinh viên: CDCNTT18A26`;

fs.writeFileSync('thongtin.txt', thongTin, 'utf8');

console.log('=== NỘI DUNG BAN ĐẦU ===');

const noiDung = fs.readFileSync('thongtin.txt', 'utf8');
console.log(noiDung);

fs.appendFile('thongtin.txt', '\nLớp: CĐ - CNTT18A', 'utf8', (err) => {
    if (err) {
        console.error('Lỗi khi ghi tập tin:', err);
        return;
    }

    console.log('\n=== NỘI DUNG SAU KHI CẬP NHẬT ===');

    fs.readFile('thongtin.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Lỗi khi đọc tập tin:', err);
            return;
        }

        console.log(data);
        console.log('\nĐã tạo và cập nhật tập tin thongtin.txt thành công!');
    });
});
