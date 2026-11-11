var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <h1>Họ tên: LÊ HOÀNG ANH TIÊN</h1>
        <h2>Mã sinh viên: CDCNTT18A26</h2>
    `);
});

server.listen(3000, function () {
    console.log('Server đang chạy tại http://127.0.0.1:3000');
});