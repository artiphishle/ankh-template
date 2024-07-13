import React, {type PropsWithChildren} from 'react';
import '../globals.css';

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <header/>
        <main>{children}</main>
        <footer/>
      </body>
    </html>
  );
}
