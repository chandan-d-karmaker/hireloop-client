import NavigationBar from "@/components/shared/Navbar";
import { Providers } from "../providers/theme-provider";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="dark" suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col ">
         {/* bg-background text-foreground */}
        <Providers>

          <NavigationBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
