import { fireEvent, render } from "@testing-library/react";
import ReactModal from "react-modal";
import { QueryClient, QueryClientProvider } from "react-query";
import { FormContextProvider } from "../landing-page/auth/formContext";
import { LoginFlow } from "../landing-page/auth/LoginFlow/LoginFlow";
import { useRouter } from "next/router";
import { useSignInMutate } from "@/services/react-query/auth";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

ReactModal.setAppElement(document.createElement("div"));

jest.mock("@/services/react-query/auth");

// Solves TypeScript Errors
const mockedUseSignInMutate = useSignInMutate as jest.Mock<any>;

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("Login Flow", () => {
  beforeEach(() => {
    mockedUseSignInMutate.mockImplementation(() => ({ isLoading: true }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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

  test("Login flow should work as expected", async () => {
    const { queryByTestId, getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <LoginFlow isOpen={true} />
        </FormContextProvider>
      </QueryClientProvider>
    );

    const mutate = jest.fn();

    mockedUseSignInMutate.mockImplementation(() => ({ mutate }));

    expect(queryByTestId("input-email")).toHaveValue("");
    fireEvent.change(getByTestId("input-email"), {
      target: { value: "test@gmail.com" },
    });
    expect(queryByTestId("input-email")).toHaveValue("test@gmail.com");

    expect(queryByTestId("input-password")).toHaveValue("");
    fireEvent.change(getByTestId("input-password"), {
      target: { value: "test" },
    });

    expect(queryByTestId("input-password")).toHaveValue("test");

    fireEvent.click(getByTestId("submit-button"));

    expect(mutate).toHaveBeenCalledWith({
      identifier: "test@gmail.com",
      password: "test",
    });
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
