import { fireEvent, render } from "@testing-library/react";
import ReactModal from "react-modal";
import { QueryClient, QueryClientProvider } from "react-query";
import { FormContextProvider } from "../landing-page/auth/formContext";
import { LoginFlow } from "../landing-page/auth/LoginFlow/LoginFlow";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

ReactModal.setAppElement(document.createElement("div"));

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("Login Flow", () => {
  test("Login Modal should render without errors", () => {
    const mockRouter = {
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { queryByTestId, getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <LoginFlow isOpen={true} />
        </FormContextProvider>
      </QueryClientProvider>
    );

    expect(queryByTestId("modal")).toBeInTheDocument();
    expect(queryByTestId("modal")).toHaveTextContent("Sign in to twitter");

    expect(queryByTestId("input-email")).toHaveValue("");
    fireEvent.change(getByTestId("input-email"), {
      target: { value: "change email" },
    });
    expect(queryByTestId("input-email")).toHaveValue("change email");

    expect(queryByTestId("input-password")).toHaveValue("");
    fireEvent.change(getByTestId("input-password"), {
      target: { value: "change password" },
    });
    expect(queryByTestId("input-password")).toHaveValue("change password");

    expect(queryByTestId("submit-button")).toBeInTheDocument();

    expect(queryByTestId("signup")).toBeInTheDocument();

    fireEvent.click(getByTestId("forgot-password"));

    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });

  test("Login Modal should change email and password input correctly", () => {
    const { queryByTestId, getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <LoginFlow isOpen={true} />
        </FormContextProvider>
      </QueryClientProvider>
    );

    expect(queryByTestId("input-email")).toHaveValue("");
    fireEvent.change(getByTestId("input-email"), {
      target: { value: "change email" },
    });
    expect(queryByTestId("input-email")).toHaveValue("change email");

    expect(queryByTestId("input-password")).toHaveValue("");
    fireEvent.change(getByTestId("input-password"), {
      target: { value: "change password" },
    });
    expect(queryByTestId("input-password")).toHaveValue("change password");
  });

  test("Login flow should work as expected", () => {
    const { queryByTestId, getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <ToastContainer theme="dark" />
        <FormContextProvider>
          <LoginFlow isOpen={true} />
        </FormContextProvider>
      </QueryClientProvider>
    );

    expect(queryByTestId("input-email")).toHaveValue("");
    fireEvent.change(getByTestId("input-email"), {
      target: { value: "michael828inoc@gmail.com" },
    });
    expect(queryByTestId("input-email")).toHaveValue(
      "michael828inoc@gmail.com"
    );

    expect(queryByTestId("input-password")).toHaveValue("");
    fireEvent.change(getByTestId("input-password"), {
      target: { value: "passwordinoc" },
    });

    expect(queryByTestId("input-password")).toHaveValue("passwordinoc");
  });

  test("Login Modal should have correct links", () => {
    const mockRouter = {
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { queryByTestId, getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <LoginFlow isOpen={true} />
        </FormContextProvider>
      </QueryClientProvider>
    );

    expect(queryByTestId("submit-button")).toBeInTheDocument();

    expect(queryByTestId("signup")).toBeInTheDocument();

    fireEvent.click(getByTestId("forgot-password"));

    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });
});
