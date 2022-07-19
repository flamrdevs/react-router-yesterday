import { describe, expect, it } from "vitest";

import React from "react";

import { createHistoryRouter } from "./createHistoryRouter";

describe("Basic", () => {
  it("createHistoryRouter should return typeof object", async () => {
    const object = createHistoryRouter();
    expect(object).toBeTypeOf("object");
  });

  it("createHistoryRouter should return valid object", async () => {
    const object = createHistoryRouter();
    expect(object.history).toBeTypeOf("object");
    expect(React.isValidElement(<object.HistoryRouter />)).toBe(true);
  });
});
