const express = require("express");
const app = express();
const port = 5000;
const { User } = require("./models/User");
const mongoose = require("mongoose");
const config = require("./config/key");

//application/x-www-form-urlencoded  이렇게 생긴 데이터 분석해서 적용
app.use(express.urlencoded({ extended: true }));
//json 타입의 데이터 풀어줌
app.use(express.json());

// 몽고 디비와 연결해줌
mongoose
  .connect(config.mongoURI, {
    //   에러 방지 위해서
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! heee");
});

app.post("/register", (req, res) => {
  //회원 가입할 때 필요한 정보들 클라에서 가져와서
  // 그 정보들을 데이터 베이스에 넣음

  //req.body에 받은 값 저장되어 있음 (객체 형태로)
  const user = new User(req.body);
  user.save((err, userInfo) => {
    //만약 에러이면 이 정보를 보냄
    if (err) return res.json({ success: false, err });
    // 만약 에러 아니면 이 정보를 보냄
    return res.status(200).json({
      success: true,
      userInfo,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
