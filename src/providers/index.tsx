import { ReactNode } from "react";
import { ThemeSettingsProvider } from "./ThemeSettingsProvider";
import { ToastProvider } from "./ToastProvider";

export const ProviderTree = ({ children }: { children: ReactNode }) => {
  return (
      <ToastProvider>
        <ThemeSettingsProvider>{children}</ThemeSettingsProvider>
      </ToastProvider>
  );
};
