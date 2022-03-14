import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   useNavigate: () => mockedUsedNavigate,
 }));

describe("Login component", () => {
    it("renders", () => {
        const windowSize = {
            width: 1920,
            height: 1080 ,}
        render(<Login windowSize={windowSize} />);
        const loginTitle = screen.getByText(/Sign in/i)

        expect(loginTitle).toMatchSnapshot();
    });

    // it("renders radical rhinos after button click", () => {
    //     render(<Login />);
    //     const button = screen.getByRole("button", { name: "Next" });

    //     userEvent.click(button);

    //     expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
    // });
});