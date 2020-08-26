## reaflex

##### Easy Flexbox in React

[![npm version](https://badge.fury.io/js/reaflex.svg)](https://badge.fury.io/js/reaflex)

#### Install

```
npm i reaflex
```

Or

```
yarn add reaflex
```

It expects the following to be installed as peer dependencies

- `react >= 16.8.0`
- `react-dom >= 16.8.0`
- `styled-components >= 4.4.1`
- `prop-types >= 15.7.0`

#### Use

```tsx
import { Flex, Item } from "reaflex";

const MyComponent = () => {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Item>Hello</Item>
      <Item>Flex</Item>
      <Item>Box</Item>
    </Flex>
  );
};
```

#### Props

##### Flex

| Prop           | Type    | Description                                                                                         |
| -------------- | ------- | --------------------------------------------------------------------------------------------------- |
| as             | string  | The HTML tag to render. Defaults to `div`.                                                          |
| inline         | boolean | Sets the `display` property to `inline-flex` when `true` and `flex` otherwise. Defaults to `false`. |
| direction      | string  | Sets the `flex-direction` property.                                                                 |
| alignItems     | string  | Sets the `align-items` property.                                                                    |
| justifyContent | string  | Sets the `justify-content` property.                                                                |
| wrap           | string  | Sets the `flex-wrap` property.                                                                      |
| flow           | string  | Sets the `flex-flow` property.                                                                      |

##### Item

| Prop      | Type             | Description                                |
| --------- | ---------------- | ------------------------------------------ |
| as        | string           | The HTML tag to render. Defaults to `div`. |
| order     | number           | Sets the `order` property.                 |
| alignSelf | string           | Sets the `align-self` property.            |
| grow      | string or number | Sets the `flex-grow` property.             |
| shrink    | string or number | Sets the `flex-shrink` property.           |
| basis     | string           | Sets the `flex-basis` property.            |
| flex      | string or number | Sets the `flex` property.                  |

#### License

MIT [Maroun Baydoun](https://maroun-baydoun.com)
