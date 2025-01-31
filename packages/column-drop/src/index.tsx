import {
  CSSLength,
  Gutter,
  SizesOptions,
  getSafeGutter,
  getSizeValue,
  useTheme,
} from "@bedrock-layout/spacing-constants";
import { forwardRefWithAs } from "@bedrock-layout/type-utils";
import React, { CSSProperties } from "react";

/**
 * The `minItemWidth` prop can be a CSSLength, a number, or a key of the theme's sizes options.
 */
type MinItemWidth = number | CSSLength | SizesOptions;

/**
 * Props for the ColumnDrop component.
 */
export type ColumnDropProps = {
  /**
   * Sets space between each element.
   */
  gutter?: Gutter;
  /**
   * Sets the minimum width of each child.
   * The `minItemWidth` prop can be a CSSLength, a number, or a key of the theme's sizes options.
   */
  minItemWidth?: MinItemWidth;
  /**
   * Prevents columns from stretching to fill the space.
   */
  noStretchedColumns?: boolean;
};

/**
 * The `ColumnDrop` component is used to create a layout
 * of columns that stretch to fit the space, and snaps
 * to the next row at a minimum size. As columns drop
 * down to a new row, they will be laid out independently
 * of the column layout above. This component is useful for
 * creating a responsive grid.
 */
export const ColumnDrop = forwardRefWithAs<"div", ColumnDropProps>(
  function ColumnDrop(
    {
      as: Component = "div",
      gutter,
      style = {},
      minItemWidth,
      // TODO: Remove Boolean type in next major version
      noStretchedColumns = false,
      ...props
    },
    ref,
  ) {
    const theme = useTheme();
    const maybeGutter = getSafeGutter(theme, gutter);

    const attributeValue =
      noStretchedColumns === true ? "no-stretched-columns" : "";

    const maybeMinItemWidth = getSizeValue(theme, minItemWidth);

    return (
      <Component
        ref={ref}
        data-bedrock-column-drop={attributeValue}
        style={
          {
            "--gutter": maybeGutter,
            "--minItemWidth": maybeMinItemWidth,
            ...style,
          } as CSSProperties
        }
        {...props}
      />
    );
  },
);
