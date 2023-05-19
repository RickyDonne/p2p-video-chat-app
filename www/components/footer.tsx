import React from "react";
import Container from "./container";

interface FooterHeaderProps {
  title: string;
}

function FooterHeader(props: FooterHeaderProps) {
  const { title } = props;

  return <h5 className="mb-5 font-medium text-2xl">{title}</h5>;
}

interface FooterParagraphProps {
  children: React.ReactNode;
}

function FooterParagraph(props: FooterParagraphProps) {
  const { children } = props;

  return <p className="mb-5">{children}</p>;
}

export default function Footer() {
  return (
    <div className="text-slate-300">
      <Container>
        <>
          <FooterHeader title="About" />
          <FooterParagraph>
          Peer-to-peer video conferencing, often shortened to P2P, refers to a direct connection between two or more devices for audio and video data streams in real-time. Enabled by WebRTC, that means when you dial in to a peer-to-peer video call, your computer is actually “talking” directly to the other attendees’ computers, with no intermediary.
          </FooterParagraph>
        </>
      </Container>
    </div>
  );
}
