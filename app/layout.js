import "./globals.css";
import TitleBar from "./components/TitleBar";
import TitleBarSpace from "./components/TitleBarSpace";
import Menu from "./components/Menu";

import Dashboard from "./dashboard/page";
import Journal from "./journal/page";
import Analytics from "./analytics/page";
import Settings from "./settings/page";

export const metadata = {
  title: "Numinous",
  description: "Mental Health Journal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <TitleBar />
        <TitleBarSpace />
        <div className="relative grow">
          <Menu />
          <Dashboard />
          <Journal />
          <Analytics />
          <Settings />
        </div>
      </body>
    </html>
  );
}
