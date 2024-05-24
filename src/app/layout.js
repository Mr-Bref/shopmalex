import { Inter } from "next/font/google";

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/css/line-awesome.min.css';
import './assets/fonts/flaticon.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/nice-select.min.css';
import './assets/css/slick.min.css';
import './assets/css/meanmenu.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import AllScript from "./components/AllScript";
import MainNav from "./components/MainNav";
import FooterArea from "./components/FooterArea";
import CardProviderWrapper from "./components/CardProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lomart - eCommerce HTML Template",
  description: "Generated by create next app",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CardProviderWrapper>
          <MainNav />
          {children}
          <FooterArea />
        </CardProviderWrapper>
        <AllScript />
      </body>
    </html>
  );
}
