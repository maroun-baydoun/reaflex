import { ElementType } from "react";
import { StyledComponent } from "styled-components";

declare type FlexProps = {
  as?: React.ElementType;
  inline?: boolean;
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
  wrap?: string;
  flow?: string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
};

declare const Flex: StyledComponent<"div", object, FlexProps>;

declare type ItemProps = {
  as?: ElementType;
  order?: number;
  alignSelf?: string;
  grow?: string | number;
  shrink?: string | number;
  basis?: string;
  flex?: string | number;
};

declare const Item: StyledComponent<"div", object, ItemProps>;

export { Flex, Item };
