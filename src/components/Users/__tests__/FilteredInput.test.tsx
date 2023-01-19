import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { assert, describe, expect, it, vi } from "vitest";
import renderer from "react-test-renderer";
import FilterInput from "../FilterInput";
import { FilteringContextProvider } from "../../../context/FilteringContext";

const handleReset = vi.mock("../FilterInput", () => ({
  handleReset: vi.fn(),
}));

beforeEach(() => {
  render(
    <FilteringContextProvider>
      <FilterInput />
    </FilteringContextProvider>
  );
});

describe("User Filter Input", () => {
  it("Name Input", () => {
    const inputElement = screen.getByRole("textbox", {
      name: /username/i,
    });
    fireEvent.change(inputElement, { target: { value: "deni" } });
    expect(inputElement.value).toBe("deni");
  });
  it("Organization Input", () => {
    const inputElement = screen.getByRole("textbox", {
      name: /organization/i,
    });
    fireEvent.change(inputElement, { target: { value: "lendsqr" } });
    expect(inputElement.value).toBe("lendsqr");
  });
  it("Name Input", () => {
    const inputElement = screen.getByRole("textbox", {
      name: /email/i,
    });
    fireEvent.change(inputElement, { target: { value: "deni@gmail.com" } });
    expect(inputElement.value).toBe("deni@gmail.com");
  });
  it("Name Input", () => {
    const inputElement = screen.getByRole("textbox", {
      name: /phone number/i,
    });
    fireEvent.change(inputElement, { target: { value: "00000000000" } });
    expect(inputElement.value).toBe("00000000000");
  });
});

describe("reset function", () => {
  it("test resetting", () => {
    const inputElement = screen.getByRole("textbox", {
      name: /phone number/i,
    });
    fireEvent.change(inputElement, { target: { value: "00000000000" } });
    const resetButton = screen.getByRole("button", {
      name: /reset/i,
    });
    expect(resetButton).toBeInTheDocument();
    fireEvent.click(resetButton);
    expect(inputElement.value).toBe("");
  });
});
