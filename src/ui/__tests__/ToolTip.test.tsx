import { render } from "@testing-library/react";
import { ToolTip } from "../ToolTip";

describe("ToolTip Component", () => {
  test("tool tip should render correctly", () => {
    // Arrange

    //Act
    const { queryByTestId } = render(
      <ToolTip position={50}>Svg Testing</ToolTip>
    );

    //Assert
    expect(queryByTestId("tooltip")).toHaveTextContent("Svg Testing");
    expect(queryByTestId("tooltip")).toHaveStyle({ bottom: "50px" });
  });
});
