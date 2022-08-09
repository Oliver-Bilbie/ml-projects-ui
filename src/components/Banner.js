import React from "react";
import { Header, Heading, Box, Anchor, Nav } from "grommet";
import { Github, Linkedin, MailOption } from "grommet-icons";

const navBarItems = [
  {
    key: "email",
    icon: <MailOption color="text-strong" />,
    url: "mailto:oliverbilbie@tuta.io",
  },
  {
    key: "github",
    icon: <Github color="text-strong" />,
    url: "https://github.com/Oliver-Bilbie",
  },
  {
    key: "linkedin",
    icon: <Linkedin color="text-strong" />,
    url: "https://www.linkedin.com/in/oliver-bilbie/",
  },
];

const Banner = () => {
  return (
    <Header
      elevation="small"
      background="brand"
      pad="small"
      height="xsmall"
      animation="fadeIn"
      direction="row"
    >
      <Box direction="row" align="center">
        <Heading level="2" color="text-strong">
          Machine Learning Projects
        </Heading>
      </Box>
      <Nav direction="row" pad="medium" color="text-strong">
        {navBarItems.map((item) => (
          <Anchor key={item.key} icon={item.icon} onClick={() => {window.open(item.url, "_blank")}} />
        ))}
      </Nav>
    </Header>
  );
};

export default Banner;
