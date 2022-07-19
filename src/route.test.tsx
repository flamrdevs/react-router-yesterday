import { describe, expect, it } from "vitest";

import React from "react";

import { route } from "./route";

describe("Basic", () => {
  it("Route index should return typeof object", async () => {
    const result = route.index(<></>);
    expect(result).toBeTypeOf("object");
  });

  it("Route path should return typeof object", async () => {
    const result = route.path("path", <></>);
    expect(result).toBeTypeOf("object");
  });

  it("Route element should return typeof object", async () => {
    const result = route.element(<></>);
    expect(result).toBeTypeOf("object");
  });

  it("Route catch should return typeof object", async () => {
    const result = route.catch(<></>);
    expect(result).toBeTypeOf("object");
  });
});
