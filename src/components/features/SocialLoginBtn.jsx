import styled from "@emotion/styled";
import { useSocialLogin } from "../../auth/useSocialLogin";

const SocialLoginButtons = () => {
  const { google, apple, kakao, NaverBtn } = useSocialLogin();
  const googleLogin = google();
  const appleLogin = apple();
  return (
    <SLoginContainer>
      <button onClick={googleLogin}>Google 로그인</button>
      <button onClick={appleLogin}>Apple 로그인</button>
      <button onClick={kakao}>kakao 로그인</button>
      <NaverBtn />
    </SLoginContainer>
  );
};

export default SocialLoginButtons;

const SLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  & > button {
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid black;
  }
`;
