import styled from "@emotion/styled";

import BMICalculator from "../features/BMICalculator";
import LivingPoint from "../features/LivingPoint";
import { WrapperStyle } from "../styles/GlobalStyles";

function MainPage() {
  return (
    <SSectionWrapper>
      <BMICalculator />
      <LivingPoint />
    </SSectionWrapper>
  );
}

export default MainPage;

const SSectionWrapper = styled.section`
  ${WrapperStyle}
`;
