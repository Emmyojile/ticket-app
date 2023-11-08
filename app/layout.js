import Nav from "./(components)/Nav";
import "./globals.css";


export const metadata = {
  title: "Ticket App",
  description: "Tikcet management app with nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
