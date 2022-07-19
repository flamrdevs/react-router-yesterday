import { describe, expect, it } from "vitest";

import React from "react";

import { createRoutes } from "./createRoutes";

describe("Basic", () => {
  it("createRoutes should return React element", async () => {
    const Element = createRoutes(() => []);
    expect(React.isValidElement(<Element />)).toBe(true);
  });
});
