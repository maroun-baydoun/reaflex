import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { Flex, Item } from "reaflex";

const Code = ({ code }) => {
  const [codeVisible, setCodeVisible] = useState(false);
  return (
    <Fragment>
      <pre
        className={`syntax-highlight-container language-jsx demo-cell--code ${
          codeVisible ? "demo-cell--code__visible" : ""
        }`}
      >
        <code className="language-jsx">{code}</code>
      </pre>
      {!codeVisible ? (
        <Item
          as="button"
          alignSelf="flex-start"
          className="button"
          onClick={() => setCodeVisible(true)}
        >
          See code
        </Item>
      ) : null}
    </Fragment>
  );
};

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
        <Code
          code={`<Flex>
  <div>reaflex</div>
  <div>React</div>
  <div>styled-components</div>
  <div>flexbox</div>
</Flex>`}
        />
      </Item>
      <Item as={Flex} direction="column" flex={1} className="demo-cell">
        <h4>Reverse row</h4>
        <Flex flow="row-reverse" className="demo-cell--content">
          <div className="demo-box">reaflex</div>
          <div className="demo-box">React</div>
          <div className="demo-box">styled-components</div>
          <div className="demo-box">flexbox</div>
        </Flex>
        <Code
          code={`<Flex flow="row-reverse">
  <div>reaflex</div>
  <div>React</div>
  <div>styled-components</div>
  <div>flexbox</div>
</Flex>`}
        />
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
        <Code
          code={`<Flex direction="column">
  <div>reaflex</div>
  <div>React</div>
  <div>styled-components</div>
  <div>flexbox</div>
</Flex>`}
        />
      </Item>
      <Item as={Flex} direction="column" flex={1} className="demo-cell">
        <h4>Reverse column</h4>
        <Flex
          flow="column-reverse"
          className="demo-cell--content demo-cell--content__column"
        >
          <div className="demo-box">reaflex</div>
          <div className="demo-box">React</div>
          <div className="demo-box">styled-components</div>
          <div className="demo-box">flexbox</div>
        </Flex>
        <Code
          code={`<Flex flow="column-reverse">
  <div>reaflex</div>
  <div>React</div>
  <div>styled-components</div>
  <div>flexbox</div>
</Flex>`}
        />
      </Item>
    </Flex>
  );
};

ReactDOM.render(<Demo />, document.getElementById("demo"));
