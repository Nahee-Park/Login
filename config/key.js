//process.env.NODE_ENV가 local 환경이면 development로 나오고 배포 이후엔 production으로 나옴
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
