import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { assert, describe, expect, it, vi } from "vitest";
import GeneralUserDetails from "./../GeneralDetails";

describe("General Details", () => {
  it("render Personal details", () => {
    render(<GeneralUserDetails />);
    const element = screen.getByText("Personal Information");
    expect(element).toBeInTheDocument();
  });
  it("render fullname", () => {
    render(<GeneralUserDetails />);
    const element = screen.getByText("FULLNAME");
    expect(element).toBeInTheDocument();
  });
  it("render bvn", () => {
    render(<GeneralUserDetails />);
    const element = screen.getByText("BVN");
    expect(element).toBeInTheDocument();
  });
  it("render Phone No", () => {
    render(<GeneralUserDetails />);
    const element = screen.getAllByText("PHONE NUMBER");
    expect(element[0]).toBeInTheDocument();
    expect(element[1]).toBeInTheDocument();
  });
  it("render Gender", () => {
    render(<GeneralUserDetails />);
    const element = screen.getByText("GENDER");
    expect(element).toBeInTheDocument();
  });
  it("render Email", () => {
    render(<GeneralUserDetails />);
    const element = screen.getAllByText("EMAIL ADDRESS");
    expect(element[0]).toBeInTheDocument();
    expect(element[1]).toBeInTheDocument();
  });
  it("render residence", () => {
    render(<GeneralUserDetails />);
    const element = screen.getByText("TYPE OF RESIDENCE");
    expect(element).toBeInTheDocument();
  });
});
