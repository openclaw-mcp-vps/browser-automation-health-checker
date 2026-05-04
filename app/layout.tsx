import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoHealthCheck – Monitor Browser Automation Scripts",
  description: "Continuously tests Selenium and Playwright scripts and alerts when they break. Built for QA engineers and DevOps teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="12a073cc-52b0-4a1a-809a-baa5d90fcc20"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
