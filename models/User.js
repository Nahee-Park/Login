const mongoose = require("mongoose");

// 스키마 생성
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //공백 삭제
    unique: 1, //유일한 값이어야 함
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// 모델 생성 -> 모델 ) 스키마를 사용해 만든 인스턴스로 D에서 실제 작업 처리가능한 함수들을 갖고 있는 객체
const User = mongoose.model("User", userSchema);

module.exports = { User };
