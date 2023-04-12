import React from 'react';
import FooterList from "./FooterList";
import FooterAbout from './FooterAbout';
import FooterPost from './FooterPost';
import Footer2 from './Footer2';


export default function Footer() {
  return (
    <>
      <div className="module-small bg-dark">
        <div className="container">
          <div className="row">
            <FooterAbout />
            <FooterList FooterTitle="Website map" FooterHref1="/carconfigurator" FooterHref2="/shop" FooterHref3="/"
              FooterTitle1="Tuning workspace" FooterTitle2="Parts store" FooterTitle3="Home"/>
            <FooterList FooterTitle="Blog Categories" FooterHref1="#" FooterHref2="#" FooterHref3="#"
              FooterTitle1="Lorem" FooterTitle2="Lorem" FooterTitle3="Lorem" />
            <FooterPost />
          </div>
        </div>
      </div>
      <hr className="divider-d" />
      <Footer2 />
    </>
  )
}
