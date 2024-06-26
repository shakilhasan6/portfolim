import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import Head from "next/head";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "paplu programar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <Head >
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
      

      </Head >
      <body className={inter.className}>

        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

      </body>
    </html>
  );
}
