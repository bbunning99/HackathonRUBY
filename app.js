const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1q2w3e4r",
  database: "ruby_db",
});

// 정적 파일을 제공할 디렉토리 설정
app.use(express.static(__dirname + "/public"));

// 라우트 정의
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/HTML/index.html");
});

// pay-state.html 파일을 제공하는 라우트
app.get("/pay-state.html", (req, res) => {
  res.sendFile(__dirname + "/HTML/pay-state.html");
});
// pay_state_pass.html 파일을 제공하는 라우트
app.get("/pay_state_pass.html", (req, res) => {
  res.sendFile(__dirname + "/HTML/pay_state_pass.html");
});
// payment.html 파일을 제공하는 라우트
app.get("/payment.html", (req, res) => {
  res.sendFile(__dirname + "/HTML/payment.html");
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
