const path = require("path");

const config = {
    entry: "./index.js", // 의존성 분석하는 시점
    output: {
        path: path.resolve(__dirname, "./dist"), //빌드한 결과물을 저장할 path와 filename 설정
        filename: "build.js",
    },
};

module.exports = config;