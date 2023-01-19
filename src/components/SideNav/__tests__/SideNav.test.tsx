import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { assert, describe, expect, it, vi } from "vitest";
import { SideNav } from "./../index";

describe("SideNav Tests", () => {
  //   it("testing side-nav section headers", () => {
  //     render(<SideNav />, { wrapper: BrowserRouter });
  //     const element = screen.getAllByRole("heading");
  //     expect(element).toBeInTheDocument();
  //   });
  it("render logout", () => {
    render(<SideNav />, { wrapper: BrowserRouter });
    const element = screen.getByText(/logout/i);
    expect(element).toBeInTheDocument();
  });
  //   it("testing logout", () => {
  //     render(<SideNav />, { wrapper: BrowserRouter });
  //     const element = screen.getByText(/logout/i);
  //     const logoutButton = vi.spyOn(element);
  //     fireEvent.click(element);
  //     expect(element).toHaveBeenCalledTimes(1);
  //   });
});
