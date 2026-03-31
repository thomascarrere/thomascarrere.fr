interface Window {
  gtag: (
    command: "event" | "config" | "js",
    targetOrAction: string | Date,
    params?: Record<string, unknown>,
  ) => void;
}
