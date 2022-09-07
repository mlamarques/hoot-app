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
    it("has logo hoot", () => {
        render(<Login windowSize={windowSize} />);
        const logoHoot = screen.getByLabelText('Hoot')

        expect(logoHoot).toBeInTheDocument();
    });

    it("has login input", () => {
        render(<Login windowSize={windowSize} />);
        const usernameInput = screen.getByRole('textbox', {name: /username/i})

        expect(usernameInput).toBeInTheDocument();
    });

    it("has sign up link", () => {
        render(<Login windowSize={windowSize} />);
        

        expect(screen.getByText("Sign up").textContent).toMatch(/Sign up/i);
    });

    it("input has correct values", () => {
        render(<Login windowSize={windowSize} />);
        const usernameInput = screen.getByRole('textbox', {name: /username/i})
    
        userEvent.type(usernameInput, "Whale");
    
        expect(usernameInput).toHaveValue("Whale");
    });
});