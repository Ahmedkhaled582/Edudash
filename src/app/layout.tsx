import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "@/types/iconify";

export const metadata: Metadata = {
  title: "Edudash - School, College & LMS Admin Dashboard",
  description:
    "Modern Education Admin Dashboard for schools, colleges, universities, and eLearning platforms.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" sizes="16x16" />
        <link rel="stylesheet" href="/assets/css/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/lib/apexcharts.css" />
        <link rel="stylesheet" href="/assets/css/lib/dataTables.min.css" />
        <link rel="stylesheet" href="/assets/css/lib/flatpickr.min.css" />
        <link rel="stylesheet" href="/assets/css/lib/full-calendar.css" />
        <link rel="stylesheet" href="/assets/css/lib/calendar.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        
        {/* Core third-party scripts loaded before Next.js hydration */}
        <Script src="/assets/js/lib/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/lib/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/lib/apexcharts.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/lib/iconify-icon.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/lib/dataTables.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/lib/jquery-ui.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/flatpickr.js" strategy="beforeInteractive" />
        <Script src="/assets/js/full-calendar.js" strategy="beforeInteractive" />
      </head>
      <body suppressHydrationWarning>
        {children}
        {/* Main app.js loaded after the DOM is ready */}
        <Script src="/assets/js/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
