import "@/app/globals.css";
import Navigation from "./components/Navigation";
import { Providers } from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500">
            <main className="container mx-auto px-4 py-8">{children}</main>
            <Navigation />
          </div>
        </Providers>
      </body>
    </html>
  );
}
