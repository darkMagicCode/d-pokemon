import { describe, it, expect, vi } from "vitest";
import axiosClient from "@/shared/services/axiosClient";
import { apiGet } from "@/shared/services/apiHelpers";

vi.mock("@/shared/services/axiosClient", () => ({
  default: {
    get: vi.fn(),
  },
}));

describe("apiHelpers", () => {
  it("apiGet returns data", async () => {
    (axiosClient.get as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      data: { ok: true },
    });
    await expect(apiGet<{ ok: boolean }>("/x")).resolves.toEqual({ ok: true });
  });
});
