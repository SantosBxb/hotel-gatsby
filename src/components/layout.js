import React from 'react'
import Helmet from 'react-helmet';
import Footer from './footer';
import Header from './header';
import useSeo from '../hooks/useSeo';

const Layout = (props) => {

  const seo = useSeo()
  const {siteName, fallbackSeo:{ description, title}} = seo 
  return ( 
    <>  
      <Helmet>
        <title>{title}</title> 
        <meta name="description" content={description} />;
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto+Slab:wght@200&display=swap" rel="stylesheet"/>
      </Helmet>
      <Header />
      {props.children}
      <Footer/>
    </>
  );
}
 
export default Layout;