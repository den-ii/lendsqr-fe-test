import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { assert, describe, expect, it, vi } from "vitest";
import { SideNav } from "./../index";

describe("SideNav Tests", () => {
  it("render logout", () => {
    render(<SideNav />, { wrapper: BrowserRouter });
    const element = screen.getByText(/logout/i);
    expect(element).toBeInTheDocument();
  });
});
