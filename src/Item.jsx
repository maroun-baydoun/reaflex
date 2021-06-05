import PropTypes from "prop-types";
import styled from "styled-components";

import { CSSGlobals, BaseLinePosition, SelfPosition } from "./css";

const isNumberOrString = (value) =>
  typeof value === "number" || typeof value === "string";

const Item = styled("div")`
  ${({ order }) => isNumberOrString(order) && `order: ${order};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
  ${({ grow }) => isNumberOrString(grow) && `flex-grow: ${grow};`}
  ${({ shrink }) => isNumberOrString(shrink) && `flex-shrink: ${shrink};`}
  ${({ basis }) => basis && `flex-basis: ${basis};`}
  ${({ flex }) => isNumberOrString(flex) && `flex: ${flex};`}
`;

Item.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  order: PropTypes.number,
  alignSelf: PropTypes.oneOf([
    "auto",
    "normal",
    "stretch",
    ...BaseLinePosition,
    ...SelfPosition,
    ...SelfPosition.map((pos) => `safe ${pos}`),
    ...SelfPosition.map((pos) => `unsafe ${pos}`),
    ...CSSGlobals,
  ]),
  grow: PropTypes.oneOfType([PropTypes.oneOf(CSSGlobals), PropTypes.number]),
  shrink: PropTypes.oneOfType([PropTypes.oneOf(CSSGlobals), PropTypes.number]),
  basis: PropTypes.string,
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Item;
