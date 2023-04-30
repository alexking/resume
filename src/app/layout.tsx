import { DarkModeToggle as DarkModeToggle } from "./components/DarkModeToggle";
import "./globals.css";
import { Inter, Noto_Color_Emoji } from "next/font/google";
import { Providers } from "./providers";
import classNames from "classnames";

// Prepare fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Standardize emojis between systems
const emoji = Noto_Color_Emoji({
  subsets: ["emoji"],
  weight: "400",
  variable: "--font-noto-color-emoji",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // Make CSS variables available for tailwind.config.js
      className={classNames(inter.variable, emoji.variable)}
      // Allow the HTML element to be manipulated by next-themes
      suppressHydrationWarning
    >
      <body>
        <Providers>
          {children}
          <DarkModeToggle />
        </Providers>
      </body>
    </html>
  );
}
