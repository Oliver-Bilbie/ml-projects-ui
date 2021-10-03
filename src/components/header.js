import React from 'react';
import { Header, Heading, Box, Anchor, Nav } from 'grommet';
import { Github, Linkedin } from 'grommet-icons';


const navBarItems = [
            { icon: <Github color='text' />, href: "https://github.com/Oliver-Bilbie"},
            { icon: <Linkedin color='text' />, href: "https://www.linkedin.com/in/oliver-bilbie/"}
        ]


const Banner = () => {
    return (
        <Header elevation="small" background="brand" pad="small" height="xsmall" animation="fadeIn" direction="row">
            <Box direction="row" align="center">
                <Heading level="2" color="Text">Machine Learning Projects</Heading>
            </Box>
            <Nav direction="row" pad="medium">
                {navBarItems.map(item => (
                    <Anchor icon={item.icon} href={item.href} />
                ))}
            </Nav>
        </Header>
    );
};

export default Banner;