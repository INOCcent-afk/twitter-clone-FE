import { render } from "@testing-library/react";
import { SvgHover } from "../SvgHover";

describe("SvgHover Component", () => {
  test("hovering svg should render correctly", () => {
    // Arrange

    //Act
    const { queryByTestId } = render(
      <SvgHover
        name="svg-testing"
        hoverColor="primary"
        tooltip
        toolTipPosition={50}
      >
        Svg Testing
      </SvgHover>
    );

    //Assert
    expect(queryByTestId("svg-aria")).toHaveTextContent("svg-testing");
    expect(queryByTestId("svg-hover")).toHaveTextContent("Svg Testing");
    expect(queryByTestId("tooltip")).toBeInTheDocument();
    expect(queryByTestId("tooltip")).toHaveStyle({ bottom: "50px" });
  });

  test("component should not render tooltip", () => {
    // Arrange

    //Act
    const { queryByTestId } = render(
      <SvgHover name="svg-testing" hoverColor="primary">
        Svg Testing
      </SvgHover>
    );

    //Assert
    expect(queryByTestId("svg-aria")).toHaveTextContent("svg-testing");
    expect(queryByTestId("svg-hover")).toHaveTextContent("Svg Testing");
    expect(queryByTestId("tooltip")).toBeNull();
  });
});
