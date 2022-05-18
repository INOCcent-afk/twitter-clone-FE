import { render } from "@testing-library/react";
import { Button } from "../ Button";

describe("Button Component", () => {
  const sizeClassnames = {
    big: "py-4 px-24 text-base rounded-3xl font-bold",
    small: "px-8 py-2 text-sm font-bold rounded-3xl",
    tiny: "px-6 py-2 text-base rounded-3xl",
  };

  test("Button should have big classNames", () => {
    // Arrange

    //Act
    const { queryByTestId } = render(<Button>big</Button>);

    //Assert
    expect(queryByTestId("button")).toHaveTextContent("big");
    expect(queryByTestId("button")).toHaveClass(sizeClassnames.big);
  });

  test("Button should have small classNames", () => {
    // Arrange

    //Act
    const { queryByTestId } = render(<Button size="small">small</Button>);

    //Assert
    expect(queryByTestId("button")).toHaveTextContent("small");
    expect(queryByTestId("button")).toHaveClass(sizeClassnames.small);
  });

  test("Button should have tiny classNames", () => {
    // Arrange

    //Act
    const { queryByTestId } = render(<Button size="tiny">tiny</Button>);

    //Assert
    expect(queryByTestId("button")).toHaveTextContent("tiny");
    expect(queryByTestId("button")).toHaveClass(sizeClassnames.tiny);
  });

  test("Button should be disabled", () => {
    // Arrange

    //Act
    const { queryByTestId } = render(<Button disabled>disabled</Button>);

    //Assert
    expect(queryByTestId("button")).toHaveTextContent("disabled");
    expect(queryByTestId("button")).toBeDisabled();
  });

  test("Button should display loading Icon when loading prop is true", () => {
    // Arrange

    //Act
    const { queryByTestId } = render(<Button loading>loading</Button>);

    //Assert
    expect(queryByTestId("button")).toHaveTextContent("loading");
    expect(queryByTestId("loadingIcon")).toBeInTheDocument();
    expect(queryByTestId("button")).toBeDisabled();
  });
});
