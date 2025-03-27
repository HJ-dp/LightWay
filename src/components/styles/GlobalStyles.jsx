import { css } from "@emotion/react";

const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ChosunGu;
    font-size: 14px;
  }
  button {
    all: unset; /* 모든 기본 스타일을 제거 */
    cursor: pointer; /* 버튼 클릭 효과 */
  }

  @font-face {
    font-family: "ChosunGu";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGu.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

export default globalStyles;

export const WrapperStyle = css`
  display: flex;
  flex-direction: column;
  padding: 24px 0;

  @media (max-width: 480px) {
    padding: 0;
  }
`;
