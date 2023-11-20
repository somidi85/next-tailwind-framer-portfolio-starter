//fonts
// import { Sora } from '@next/font/google'

// // font settings
// const sora = new Sora({
//   subsets: ['latin'],
//   variable: "--font-sore",
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
// });

// components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({ children }) => {
  return (
    <div className={'page bg-site text-white bg-cover bg-no-repeat font-sora relative'}>    
      <TopLeftImg />
      <Nav />
      <Header />    
      {children}
    </div>
  );
};

export default Layout;

