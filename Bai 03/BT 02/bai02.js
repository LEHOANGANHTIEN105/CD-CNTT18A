
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/') {
        res.writeHead(200);
        res.end(`
            <h1>Xin chào!</h1>
            <p>Chào mừng bạn đến với trang web của tôi.</p>
            <p>Mã sinh viên: CDCNTT18A26</p>
        `);
    }

    else if (req.url === '/about') {
        res.writeHead(200);
        res.end(`
            <h1>Giới thiệu bản thân</h1>
            <p>Họ tên: LÊ HOÀNG ANH TIÊN</p>
            <p>Ngành học: Công nghệ thông tin</p>
            <p>Trường: Cao đẳng Kỹ thuật Công nghệ Nha Trang</p>
        `);
    }

    else {
        res.writeHead(404);
        res.end(`
            <h1>404 - Không tìm thấy trang</h1>
            <p>Đường dẫn bạn truy cập không tồn tại.</p>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
