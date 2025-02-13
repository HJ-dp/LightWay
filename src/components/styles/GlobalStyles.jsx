import { css } from "@emotion/react";

const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  button {
    all: unset; /* 모든 기본 스타일을 제거 */
    cursor: pointer; /* 버튼 클릭 효과 */
  }
`;

export default globalStyles;
