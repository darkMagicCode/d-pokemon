import { Footer } from "./Footer";
import { RouteProgressBar } from "@/shared/components/atoms/ProgressBar";
import type { AppLayoutProps } from "@/shared/types";

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={`flex flex-col min-h-screen`}>
      <RouteProgressBar />

      <main className={`flex-1 w-full pb-20 lg:pb-0 overflow-y-auto`}>
        <div className="mx-auto w-full max-w-screen-2xl">{children}</div>
      </main>

      <Footer />
    </div>
  );
};

