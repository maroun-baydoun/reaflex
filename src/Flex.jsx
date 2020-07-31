import PropTypes from "prop-types";
import styled from "styled-components";

import {
  CSSGlobals,
  BaseLinePosition,
  ContentPosition,
  SelfPosition,
} from "./css";

const Flex = styled("div")`
  ${({ inline }) => `
 display: ${inline ? "inline-flex" : "flex"};
 `}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
`;

Flex.propTypes = {
  as: PropTypes.string,
  inline: PropTypes.bool,
  direction: PropTypes.oneOf([
    "row",
    "column",
    "row-reverse",
    "column-reverse",
    ...CSSGlobals,
  ]),
  alignItems: PropTypes.oneOf([
    "normal",
    "stretch",
    ...BaseLinePosition,
    ...SelfPosition,
    ...SelfPosition.map((pos) => `safe ${pos}`),
    ...SelfPosition.map((pos) => `unsafe ${pos}`),
    ...CSSGlobals,
  ]),
  justifyContent: PropTypes.oneOf([
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
    "normal",
    ...ContentPosition,
    ...ContentPosition.map((pos) => `safe ${pos}`),
    ...ContentPosition.map((pos) => `unsafe ${pos}`),
    ...CSSGlobals,
  ]),
};

Flex.defaultProps = {
  inline: false,
};

export default Flex;
