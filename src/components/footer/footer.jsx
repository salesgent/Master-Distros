import React, { useState } from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillSkype, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
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
import { Box, Typography } from "@mui/material";
import Image from "next/image";

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
            <h6>Navigate</h6>
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
          {/* <FooterLinksBox
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
          </FooterLinksBox> */}
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
          {/* <FooterLinksBox
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
          </FooterLinksBox> */}
          <FooterLinksBox
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeInOut" }}
          >
            <h6>Contact Us</h6>
            <FooterCol>
              {/* <FooterLink url="/">address1</FooterLink> */}
              {/* <FooterLink url="/"> address2</FooterLink> */}
              <FooterLink url="tel:+4044910786">Call us at +1 404-491-0786</FooterLink>
              <FooterLink url="mailto:cs@masterdistros.com">Email us at cs@masterdistros.com</FooterLink>
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
            </FooterCol>
          </FooterLinksBox>
        </FooterLinksContainer>
        <FooterBottom>
          <Image src="/images/footer/card 2.png" alt="cards" width={231} height={36} layout="fixed" />
          <Typography variant="h6" style={{ fontSize: "21px", color: "#fff" }}>
            © {new Date()?.getFullYear()} Master Distros.
          </Typography>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
