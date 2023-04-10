import { useState, useEffect, useRef } from "react";
import {
  Autocomplete,
  Loader,
  Button,
  Flex,
  Container,
  Stack,
  Title,
} from "@mantine/core";

import { useRecoilState } from "recoil";
import {
  authComponent,
  authPendingComponent,
  authJWTKeyComponent,
} from "./LoginRecoil.tsx";

import {
  PasswordInput,
  Text,
  Group,
  PasswordInputProps,
  Anchor,
  Center,
} from "@mantine/core";

import sendAuth from "./LoginAxiosRequest.tsx";
import { useQuery } from "react-query";

export function AutocompleteLoading({ value, setValue }) {
  const timeoutRef = useRef<number>(-1);
  // const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes("@")) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(
          ["gmail.com", "outlook.com", "yahoo.com"].map(
            (provider) => `${val}@${provider}`
          )
        );
      }, 1000);
    }
  };

  return (
    <Autocomplete
      value={value}
      data={data}
      onChange={handleChange}
      rightSection={loading ? <Loader size="1rem" /> : null}
      label="이메일 입력"
      placeholder="Your email"
    />
  );
}

export function ForgotPasswordInput({
  className,
  style,
  setValue,
  ...others
}: PasswordInputProps) {
  return (
    <div className={className} style={style}>
      <Group position="apart" mb={5}>
        <Text component="label" htmlFor="your-password" size="sm" weight={500}>
          비밀번호를 입력해주세요
        </Text>

        <Anchor<"a">
          href="#"
          onClick={(event) => event.preventDefault()}
          sx={(theme) => ({
            paddingTop: 2,
            color:
              theme.colors[theme.primaryColor][
                theme.colorScheme === "dark" ? 4 : 6
              ],
            fontWeight: 500,
            fontSize: theme.fontSizes.xs,
          })}
        >
          Forgot your password?
        </Anchor>
      </Group>
      <PasswordInput
        placeholder="Your password"
        id="your-password"
        onChange={(e) => setValue(e)}
        {...others}
      />
    </div>
  );
}

interface authDto {
  email: String;
  password: String;
}

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setAuthComponent] = useRecoilState(authComponent);
  const [accessJwtToken, setAccessJwtToken] =
    useRecoilState(authJWTKeyComponent);
  const [isAuthPending, setAuthPendingComponent] =
    useRecoilState(authPendingComponent);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // isAuth, isAUthPending 전부 관리
  const handleLogin = async (event) => {
    event.preventDefault();
    // 스피너를 위해서 로그인 시작 표시
    setAuthPendingComponent(true);

    await sendAuth({ email, password })
      .then(function (response) {
        // 스피너를 위해서 로그인 끝표시
        // 받아서 등록
        console.log(response);
        setAuthPendingComponent(false);
        setAuthComponent(true);
        setAccessJwtToken(response.jwtAccessString);

        return response;
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setAuthPendingComponent(false);
          setAuthComponent(false);

          return error.response.status;
        } else if (error.request) {
          // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
          // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
          // node.js에서는 http.ClientRequest 인스턴스입니다.
          console.log(error.request);
          return "not arrived";
        } else {
          // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  return (
    <div
      style={{
        width: "100wv",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Center maw={"100wv"} h={"100vh"} mx="auto">
        <Stack
          h={300}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          })}
          style={{ padding: 40, borderRadius: 16 }}
        >
          <Title>로컬오더 관리자님</Title>
          <Title> 환영합니다! </Title>
          <AutocompleteLoading value={email} setValue={setEmail} />

          <ForgotPasswordInput
            value={password}
            setValue={handlePasswordChange}
          />

          <Flex
            direction={{ base: "column", sm: "row" }}
            gap={{ base: "sm", sm: "lg" }}
            justify={{ sm: "center" }}
          >
            <Button onClick={(e) => handleLogin(e)} value="asdad">
              로그인
            </Button>
            <Button>회원가입</Button>
          </Flex>
        </Stack>
      </Center>
    </div>
  );
}

export default AuthPage;
