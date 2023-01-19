import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { assert, describe, expect, it, vi } from "vitest";
import UserDetailsHead from "./../UserDetailsHead";
import { BrowserRouter } from "react-router-dom";

describe("User Details Head", () => {
  it("renders User Details Head", () => {
    render(<UserDetailsHead />, { wrapper: BrowserRouter });
    const element = screen.getByAltText("avatar");
    expect(element).toBeInTheDocument();
  });
});
