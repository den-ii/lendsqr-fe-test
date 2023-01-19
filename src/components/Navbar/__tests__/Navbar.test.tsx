import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { assert, describe, expect, it, vi } from "vitest";
import { Navbar } from "./../index";

describe("Navbar Tests", () => {
  it("render Nav-Logo", () => {
    render(<Navbar />);
    const element = screen.getByAltText("nav-logo");
    expect(element).toBeInTheDocument();
  });
  it("render Search", () => {
    render(<Navbar />);
    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();
  });
  it("render Burger", () => {
    render(<Navbar />);
    const element = screen.getByRole("burger");
    expect(element).toBeInTheDocument();
  });
  it("expect Burger click", () => {
    render(<Navbar />);
    const element = screen.getByRole("burger");
    const text = screen.getByText("Profile");
    fireEvent.click(element);
    expect(text).toBeInTheDocument();
  });
});
