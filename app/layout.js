import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Pinecone Education — Private Tutoring',
  description:
    'Patient, personalized tutoring for students K–12 and beyond. Westminster, CO & Remote.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-cream text-[#1e2b26] flex flex-col min-h-screen leading-relaxed">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
