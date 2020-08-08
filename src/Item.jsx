import PropTypes from "prop-types";
import styled from "styled-components";

const Item = styled("div")`
  ${({ order }) =>
    (typeof order === "number" || typeof order === "string") &&
    `order: ${order};`}
`;

Item.propTypes = {
  as: PropTypes.string,
  order: PropTypes.number,
};

export default Item;
