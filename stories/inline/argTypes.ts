export const argTypes = {
  gutter: {
    control: "select",
    options: [
      "size000",
      "size00",
      "size1",
      "size2",
      "size3",
      "size4",
      "size5",
      "size6",
      "size7",
      "size8",
      "size9",
      "size10",
      "size11",
      "size12",
      "size13",
      "size14",
      "size15",
    ],
  },
  justify: {
    control: "select",
    options: ["start", "end", "center", "space-between", "space-around"],
  },
  align: {
    control: "select",
    options: ["start", "end", "center", "stretch"],
  },
  stretch: {
    control: "select",
    options: ["all", "start", "end"],
  },
  switchAt: {
    description:
      "Sets the width threshold that the split will switch to a Stack layout",
    control: "text",
  },
  minItemWidth: {
    control: "text",
  },
};
