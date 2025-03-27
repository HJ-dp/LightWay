import styled from "@emotion/styled";

import SocialLoginButtons from "../features/SocialLoginBtn";

function LoginPage() {
  return (
    <SLoginContainer>
      <Simg src="/logo.png" alt="로고" />
      <SocialLoginButtons />
    </SLoginContainer>
  );
}

export default LoginPage;

const SLoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  height: 100vh;
`;

const Simg = styled.img`
  width: 300px;
  height: 300px;
`;
