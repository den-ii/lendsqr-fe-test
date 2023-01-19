import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { assert, describe, expect, it, vi } from "vitest";
import { Login } from "./../index";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
});

describe("renders login details", () => {
  it("render username", () => {
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    const passwordElement = screen.getByPlaceholderText(/password/i);
    expect(passwordElement).toBeInTheDocument();
  });
  it("render password", () => {
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "deni" } });
    const passwordElement = screen.getByPlaceholderText(/password/i);
    fireEvent.change(passwordElement, { target: { value: "passw" } });
    const submitBtn = screen.getByRole("button", {
      name: /log in/i,
    });
    const error = screen.getByText(/email or password is incorrect/i);
    fireEvent.click(submitBtn);
    expect(error).toBeInTheDocument();
  });
});
