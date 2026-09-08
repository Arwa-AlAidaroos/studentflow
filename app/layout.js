import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "StudentFlow",
  description: "Student Course & Task Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* TODO: Add TaskProvider, Navbar, Footer */}
        <Navbar/>
        <main className="main-content">
          
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
