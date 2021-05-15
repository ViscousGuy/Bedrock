import { PadBox } from "@bedrock-layout/padbox";
import React from "react";
import styled from "styled-components";

const BorderedBox = styled.div`
  border: 1px solid black;
`;
BorderedBox.displayName = "BorderedBox";

const title = "PadBox";
const name = "Basic";
const component = PadBox;

function Example(args: Record<string, unknown>): React.ReactNode {
  return (
    <PadBox as={BorderedBox} {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequuntur
      corrupti beatae commodi vitae, perspiciatis totam provident architecto
      doloribus aperiam sapiente, incidunt nihil suscipit voluptatibus tempore
      est dolor! Iusto, vero.
    </PadBox>
  );
}

Example.story = { name };
Example.args = {
  padding: "lg",
};

Example.storyName = name;

export const Comp = Example;

const story = {
  title: ["Components", title, name].join("/"),
  component,
};
export default story;