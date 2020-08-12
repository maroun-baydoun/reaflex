import PropTypes from "prop-types";
import styled from "styled-components";

import {
  CSSGlobals,
  BaseLinePosition,
  SelfPosition,
} from "./css";

const Item = styled("div")`
  ${({ order }) =>
    (typeof order === "number" || typeof order === "string") &&
    `order: ${order};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
`;

Item.propTypes = {
  as: PropTypes.string,
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
};

export default Item;
