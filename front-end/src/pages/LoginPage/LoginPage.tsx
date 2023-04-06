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
import { authComponent } from "./LoginRecoil.tsx";
import {
  PasswordInput,
  Text,
  Group,
  PasswordInputProps,
  Anchor,
  Center,
} from "@mantine/core";

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

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setAuthComponent] = useRecoilState(authComponent);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setAuthComponent(!isAuth);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User is signed in.

        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
