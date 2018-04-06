import React from "react";

import SocialIcon from "./components/SocialIcon";
import SocialLink from "./components/SocialLink";
import GMLink from "./components/GMLink";
import NavigationWrapper from "./components/NavigationWrapper";
import NavSection from "./components/NavSection";
import StyledLogo from "./components/StyledLogo";
import LogoText from "./components/LogoText";

import logo from "./assets/logo.png";
import octocat from "./assets/octocat.svg";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";

// Navigation is a Header component based on our corporate site
// It is intended to be replaced by a header component from gm-ui-components
// when such a component exists.
class Navigation extends React.Component {
  render() {
    return (
      <NavigationWrapper>
        <NavSection>
          <StyledLogo src={logo} />
          <a
            title="Decipher Technology Studios"
            href="http://www.deciphernow.com/home"
          >
            <LogoText>
              <div>Decipher Technology</div>
              <div>Studios</div>
            </LogoText>
          </a>
        </NavSection>
        <NavSection>
          <GMLink
            title="Grey Matter"
            href="http://www.deciphernow.com/grey-matter"
          >
            Grey Matter
          </GMLink>
          <GMLink title="Solutions" href="http://www.deciphernow.com/solutions">
            Solutions
          </GMLink>
          <GMLink
            title="Services and Support"
            href="http://www.deciphernow.com/services-and-support"
          >
            Services & Support
          </GMLink>
          <GMLink title="Company" href="http://www.deciphernow.com/company">
            Company
          </GMLink>

          <SocialLink href="http://github.com/DecipherNow">
            <SocialIcon src={octocat} />
          </SocialLink>
          <SocialLink href="http://twitter.com/deciphernow">
            <SocialIcon src={twitter} />
          </SocialLink>
          <SocialLink href="http://www.linkedin.com/company/decipher-technology-studios">
            <SocialIcon src={linkedin} />
          </SocialLink>
        </NavSection>
      </NavigationWrapper>
    );
  }
}

export default Navigation;
