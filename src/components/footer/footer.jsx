import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillSkype,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";
/////////////////////

import {
  FooterBottom,
  FooterCol,
  FooterContainer,
  FooterLink,
  FooterLinksBox,
  FooterLinksCol,
  FooterLinksContainer,
  FooterSection,
  FooterText,
  IconsBox,
  MediaIcons,
} from "./footer.styles";
import { links1, links2, links3, links4 } from "./footerData";
import { Box, Typography } from '@mui/material'

const Footer = () => {
  const [email, setemail] = useState("");
  return (
    <FooterSection>
      <FooterContainer>
        <FooterLinksContainer>
          <FooterLinksBox
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          >
            <h6>Online Help</h6>
            <FooterLinksCol>
              <FooterCol>
                {links1.map((link, i) => (
                  <FooterLink margin="0" key={i} url={link.url}>
                    {link.alias}
                  </FooterLink>
                ))}
              </FooterCol>
            </FooterLinksCol>
          </FooterLinksBox>
          <FooterLinksBox
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          >
            <h6>About Us</h6>
            <FooterLinksCol>
              <FooterCol>
                {links2.map((link, i) => (
                  <FooterLink margin="0" key={i} url={link.url}>
                    {link.alias}
                  </FooterLink>
                ))}
              </FooterCol>
            </FooterLinksCol>
          </FooterLinksBox>
          <FooterLinksBox
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          >
            <h6>Top Link</h6>
            <FooterLinksCol>
              <FooterCol>
                {links3.map((link, i) => (
                  <FooterLink margin="0" key={i} url={link.url}>
                    {link.alias}
                  </FooterLink>
                ))}
              </FooterCol>
            </FooterLinksCol>
          </FooterLinksBox>
          <FooterLinksBox
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          >
            <h6>Vaping</h6>
            <FooterLinksCol>
              <FooterCol>
                {links4.map((link, i) => (
                  <FooterLink margin="0" key={i} url={link.url}>
                    {link.alias}
                  </FooterLink>
                ))}
              </FooterCol>
            </FooterLinksCol>
          </FooterLinksBox>
          <FooterLinksBox
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeInOut" }}
          >
            <h6>Address</h6>
            <FooterCol>
            <FooterLink url="/">
              11111 Harry Hines Blvd
              </FooterLink>
              <FooterLink url="/">
              
                {" "}
                Dallas, TX 75229, United States
              
              </FooterLink>
              <FooterLink url="/">
              Call us at +1 469-372-0054
              </FooterLink>
            </FooterCol>
          </FooterLinksBox>
        </FooterLinksContainer>
        <FooterBottom>
          <IconsBox>
            <Link href="/">
              <AiFillFacebook className="icon" />
            </Link>
            <Link href="/">
              <AiFillLinkedin className="icon" />
            </Link>
            <Link href="/">
              <AiOutlineInstagram className="icon" />
            </Link>
            <Link href="/">
              <AiFillSkype className="icon" />
            </Link>
            <Link href="/">
              <AiOutlineTwitter className="icon" />
            </Link>
          </IconsBox>
          <Typography variant="h6" style={{fontSize:'21px',color:'#fff'}}>© 2022 ABC Wholesale.</Typography>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
