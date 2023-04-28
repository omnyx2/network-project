import authInstance from "../../axios/index";
import { useRecoilState } from "recoil";

// 제공하는 서비스에 따라서 url로 로그인 하는 범위가 달라집니다.
const authUrl = "http://localhost:3000/users/login/LocalOrder";

interface authDto {
  email: String;
  password: String;
// affiliatedInstitutions: String;
}

// axios랑
function sendAuth(data: authDto) {
  return authInstance
    .post(authUrl, {
      ...data,
      affiliatedInstitutions: ["LocalOrder"],
    })
    .then((res) => res.data);
}

export default sendAuth;
