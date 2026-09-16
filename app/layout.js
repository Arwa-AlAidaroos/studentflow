import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TaskProvider } from "@/context/TaskContext";

export const metadata = {
  title: "StudentFlow",
  description: "Student Course & Task Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
        <Navbar/>
        <main className="main-content">
            {children}
        </main>
        <Footer/>
        </TaskProvider>
      </body>
    </html>
  );
}
