import { StyledComponent } from "styled-components";

declare type FlexProps = {
  as?: string;
  inline?: boolean;
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
  wrap?: string;
  flow?: string;
};

declare const Flex: StyledComponent<"div", object, FlexProps>;

declare type ItemProps = {
  as?: string;
  order?: number;
  alignSelf?: string;
  grow?: string | number;
  shrink?: string | number;
  basis?: string;
  flex?: string | number;
};

declare const Item: StyledComponent<"div", object, ItemProps>;

export { Flex, Item };
