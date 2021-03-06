import PropTypes from "prop-types";
import styled from "styled-components";

import {
  CSSGlobals,
  BaseLinePosition,
  ContentPosition,
  SelfPosition,
  Direction,
  Wrap,
} from "./css";

const Flex = styled("div")`
  ${({ inline }) => `
 display: ${inline ? "inline-flex" : "flex"};
 `}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
  ${({ flow }) => flow && `flex-flow: ${flow};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap};`}
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap};`}
`;

Flex.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  inline: PropTypes.bool,
  direction: PropTypes.oneOf([...Direction, ...CSSGlobals]),
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
  wrap: PropTypes.oneOf([...Wrap, ...CSSGlobals]),
  flow: PropTypes.oneOf([
    ...Wrap,
    ...Direction,
    ...Direction.reduce(
      (flow, direction) => [
        ...flow,
        ...Wrap.map((wrap) => `${direction} ${wrap}`),
      ],
      []
    ),
    ...CSSGlobals,
  ]),
  gap: PropTypes.string,
  rowGap: PropTypes.string,
  columnGap: PropTypes.string,
};

Flex.defaultProps = {
  inline: false,
};

export default Flex;
