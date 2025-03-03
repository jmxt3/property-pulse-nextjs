import "@/styles/globals.css";

import { ReactNode } from 'react';
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Property Pulse",
  description: "This is teh property pulse super app",
  keywords: "property, rental, real estate",
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (<html lang="en">
    <body>
      <div>
        <main>
          <Navbar />
          {children}
        </main>
      </div>
    </body>
  </html>);
}

export default MainLayout;
