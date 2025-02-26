import "@/assets/styles/globals.css";

import { ReactNode } from 'react';

export const metadata = {
  title: "Property Pulse",
  description: "This is teh property pulse super app",
  keywords: "property, rental, real estate",
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (<html>
    <body>
      <div>
        <main>
          {children}
        </main>
      </div>
    </body>
  </html>);
}

export default MainLayout;
