import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from "../Search";

describe("Search Component", () => {
  test("Input should have a value of twitter", () => {
    // Arrange
    const clearFn = jest.fn();

    // Act
    const { queryByTestId } = render(
      <Search clearAction={clearFn} value={"twitter"} />
    );

    // Assert
    expect(queryByTestId("test-search-input")).toHaveValue("twitter");
    expect(queryByTestId("test-clear-btn")).toBeTruthy();
  });

  test("Input should have a value of twitter and display clear button", () => {
    // Arrange
    const clearFn = jest.fn();

    // Act
    const { queryByTestId } = render(
      <Search clearAction={clearFn} value={"twitter"} />
    );

    // Assert
    expect(queryByTestId("test-search-input")).toHaveValue("twitter");
    expect(queryByTestId("test-clear-btn")).toBeTruthy();
  });

  test("Input should should not display clear button if it has no value", () => {
    // Arrange
    const clearFn = jest.fn();

    // Act
    const { queryByTestId } = render(
      <Search clearAction={clearFn} value={""} />
    );

    // Assert
    expect(queryByTestId("test-search-input")).toHaveValue("");
    expect(queryByTestId("test-clear-btn")).toBeNull();
  });

  test("Input field should be empty if clear button is clicked", () => {
    // Arrange
    let inputValue = "twitter";
    const clearFn = jest.fn(() => {
      inputValue = "";
    });

    // Act
    const { queryByTestId, getByTestId, rerender } = render(
      <Search clearAction={clearFn} value={inputValue} />
    );

    // Assert
    expect(queryByTestId("test-search-input")).toHaveValue("twitter");
    fireEvent.click(getByTestId("test-clear-btn"));
    rerender(<Search clearAction={clearFn} value={inputValue} />);
    expect(clearFn).toBeCalledTimes(1);
    expect(queryByTestId("test-search-input")).toHaveValue("");
  });
});
