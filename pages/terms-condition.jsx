import { StaticPage } from "@salesgenterp/ui-components";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const data = {
  mainTitle: "Terms of Use",
  content: [
    {
      p: "Welcome to Mater Distros USA! These terms and conditions of use (“Terms of Use”) apply to your use of the Mater Distros USA website and any affiliated websites and mobile applications (collectively, the “Site”). By accessing or using the Site, you agree to be bound by these Terms of Use.",
    },
    {
      p: (
        <>
          <p>
            Use of Site You may use the Site only for lawful purposes and in accordance with these Terms of Use. You
            agree not to use the Site:
          </p>
          <ul>
            <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>
              To engage in any conduct that restricts or inhibits anyone’s use or enjoyment of the Site, or which, as
              determined by Mater Distros USA, may harm Mater Distros USA or users of the Site, or expose them to
              liability.
            </li>
            <li>
              To impersonate or attempt to impersonate Mater Distros USA, a Mater Distros USA employee, another user, or
              any other person or entity.
            </li>
            <li>
              To use any robot, spider, or other automatic device, process, or means to access the Site for any purpose,
              including monitoring or copying any of the material on the Site.
            </li>
          </ul>
        </>
      ),
    },
    {
      p: (
        <>
          Intellectual Property The Site and its entire contents, features, and functionality (including but not limited
          to all information, software, text, displays, images, video, and audio, and the design, selection, and
          arrangement thereof), are owned by Mater Distros USA, its licensors, or other providers of such material and
          are protected by United States and international copyright, trademark, patent, trade secret, and other
          intellectual property or proprietary rights laws.
        </>
      ),
    },
    {
      p: (
        <>
          User Content The Site may allow you to post, submit, publish, display, or transmit to other users or other
          persons (hereinafter, “post”) content or materials (collectively, “User Content”). You retain any copyright in
          the User Content that you post to the Site. By posting User Content on the Site, you grant Mater Distros USA a
          perpetual, worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, copy,
          modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise
          exploit in any manner such User Content in all formats and distribution channels now known or hereafter
          devised (including in connection with the Site and Mater Distros USA’s business and on third-party sites and
          services), without further notice to or consent from you, and without the requirement of payment to you or any
          other person or entity.
        </>
      ),
    },
    {
      p: (
        <>
          Disclaimer of Warranties The Site and its contents are provided &quot;as is&quot; and &quot;as available&quot;
          without warranty of any kind, either express or implied, including but not limited to any warranties of
          merchantability, fitness for a particular purpose, non-infringement, or accuracy. Mater Distros USA does not
          warrant that the Site will be uninterrupted or error-free.
        </>
      ),
    },
    {
      p: (
        <>
          Limitation of Liability Mater Distros USA, its affiliates, and their respective officers, directors,
          employees, agents, licensors, suppliers, successors, and assigns will not be liable for any indirect,
          incidental, special, consequential, or punitive damages, including but not limited to damages for loss of
          profits, use, data, or other intangible losses, arising out of or relating to your access to or use of, or
          inability to access or use, the Site or any content on the Site.
        </>
      ),
    },
    {
      p: (
        <>
          Indemnification You agree to indemnify, defend, and hold harmless Mater Distros USA, its affiliates, and their
          respective officers, directors, employees, agents, licensors, suppliers, successors, and assigns from and
          against all claims, losses, expenses, damages, and costs (including, but not limited to, reasonable
          attorneys&apos; fees) arising from or relating to any User Content you post on the Site.
        </>
      ),
    },
  ],
};

const Component = (props) => {
  return (
    <Container>
      <StaticPage data={data} colors={{ primaryColor: "#DDA60A" }} />
    </Container>
  );
};

export default Component;

const Container = styled.div`
  p {
    font-size: 1.2rem;
  }
`;
