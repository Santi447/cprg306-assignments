import { AuthContextProvider } from "./context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "Shopping List",
  description: "CPRG 306 assignments",
};

export default function RootLayout({ children }) {
  return (
    <AuthContextProvider>
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
    </AuthContextProvider>
  );
}

 