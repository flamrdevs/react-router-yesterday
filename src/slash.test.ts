import { describe, expect, it } from "vitest";

import { slash } from "./slash";

describe("Basic", () => {
  it("Slash join should return typeof string", async () => {
    const result = slash.join("some", "path");
    expect(result).toBeTypeOf("string");
  });

  it("Slash join should return arguments with slash separator", async () => {
    const result = slash.join("some", "path");
    expect(result).equal("some/path");
  });

  it("Slash start should return typeof string", async () => {
    const result = slash.start("some", "path");
    expect(result).toBeTypeOf("string");
  });

  it("Slash start should return arguments with slash separator", async () => {
    const result = slash.start("some", "path");
    expect(result).equal("/some/path");
  });
});
