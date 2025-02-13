import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Page_URL from "../../routes/PageURL";

/** width, height : px단위 */
function Logo({ width = 100, height = 100 }) {
  return (
    <>
      <SLink to={Page_URL.main} width={width} height={height} />
    </>
  );
}

export default Logo;

const SLink = styled(Link)`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background-image: url("/logo.png");
  background-size: cover;
  background-position: center;
`;
