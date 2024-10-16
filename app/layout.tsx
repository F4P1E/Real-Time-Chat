// app/layout.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Import the Footer component
import '../app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main> {/* Wrap children in a main tag for better semantics */}
        <Footer /> {/* Include the Footer here */}
      </body>
    </html>
  );
}
