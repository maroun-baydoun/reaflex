import React from "react";
import ReactDOM from "react-dom";
import { Flex, Item } from "reaflex";

const Demo = () => {
  return (
    <Flex direction="column" className="demo-container">
      <Item as={Flex} direction="column" flex={1} className="demo-cell">
        <h4>Defaults</h4>
        <Flex className="demo-cell--content">
          <div className="demo-box">reaflex</div>
          <div className="demo-box">React</div>
          <div className="demo-box">styled-components</div>
          <div className="demo-box">flexbox</div>
        </Flex>
      </Item>
      <Item as={Flex} direction="column" flex={1} className="demo-cell">
        <h4>Column</h4>
        <Flex
          direction="column"
          className="demo-cell--content demo-cell--content__column"
        >
          <div className="demo-box">reaflex</div>
          <div className="demo-box">React</div>
          <div className="demo-box">styled-components</div>
          <div className="demo-box">flexbox</div>
        </Flex>
      </Item>
    </Flex>
  );
};

ReactDOM.render(<Demo />, document.getElementById("demo"));
