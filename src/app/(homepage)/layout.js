import NavigationBar from "@/components/shared/Navbar";
import { Providers } from "../providers/theme-provider";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
  return (
    
      <div className="min-h-full flex flex-col ">
         {/* bg-background text-foreground */}
          <NavigationBar />
          {children}
          <Footer />

      </div>
  );
}
