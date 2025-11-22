import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/shared/services/queryClient";
import App from "@/App";

vi.mock("@/router", () => ({
  AppRouter: () => <div data-testid="router" />,
}));

describe("App", () => {
  it("renders App Router", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );
    expect(screen.getByTestId("router")).toBeTruthy();
  });
});
