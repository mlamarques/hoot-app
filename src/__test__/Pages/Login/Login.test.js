import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import Login from "../../../Pages/Login/Login";

const mockedUsedNavigate = jest.fn();

const windowSize = {
    width: 1920,
    height: 1080 ,}

jest.mock('react-router-dom', () => ({
   useNavigate: () => mockedUsedNavigate,
 }));

describe("Login component", () => {
    it("has login input", () => {
        render(<Login windowSize={windowSize} />);
        const usernameInput = screen.getByRole('textbox', {name: /username/i})

        expect(usernameInput).toBeInTheDocument();
    });

    it("has sign up link", () => {
        render(<Login windowSize={windowSize} />);
        

        expect(screen.getByText("Sign up").textContent).toMatch(/Sign up/i);
    });

    // it("renders radical rhinos after button click", () => {
    //     render(<Login />);
    //     const button = screen.getByRole("button", { name: "Next" });

    //     userEvent.click(button);

    //     expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
    // });
});