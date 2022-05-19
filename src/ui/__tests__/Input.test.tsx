import { fireEvent, render } from "@testing-library/react";
import { Input } from "../Input";

describe("Input Component", () => {
  test("Input should render without errors", () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    const { queryByTestId } = render(
      <Input
        value="input component"
        countString
        maxLength={50}
        onChange={onChange}
        data-testid="input"
      />
    );

    // Assert
    expect(queryByTestId("input")).toHaveValue("input component");
    expect(queryByTestId("input-length-indicator")).toHaveTextContent("15/50");
  });

  test("Input should change styles when focused", () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    const { queryByTestId, getByTestId } = render(
      <Input
        value="input component"
        countString
        maxLength={50}
        onChange={onChange}
        data-testid="input"
      />
    );

    // Assert
    expect(queryByTestId("input")).toHaveValue("input component");
    fireEvent.focus(getByTestId("input"));
    expect(queryByTestId("input-label")).toHaveClass("top-1 text-sm");
    expect(queryByTestId("input-length-indicator")).toHaveTextContent("15/50");
  });

  test("Input should change styles and display error message on error", () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    const { queryByTestId } = render(
      <Input
        value="input component"
        countString
        maxLength={50}
        onChange={onChange}
        error
        errorMessage="we got an error"
        data-testid="input"
      />
    );

    // Assert
    expect(queryByTestId("input")).toHaveValue("input component");
    expect(queryByTestId("input-length-indicator")).toHaveTextContent("15/50");
    expect(queryByTestId("input-container")).toHaveClass(
      "border-red-100 focus-within:border-red-100"
    );
    expect(queryByTestId("input-label")).toHaveClass(
      "peer-focus:text-red-100 text-sm"
    );
    expect(queryByTestId("input-error-message")).toHaveTextContent(
      "we got an error"
    );
  });
});
