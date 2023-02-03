import Image from "next/image";
import Link from "next/link";
import { FC, useEffect } from "react";
import * as NavStyles from "@/styles/NavStyles";
import { Container } from "./Container";

const links = [
  {
    title: "Home",
    path: "/",
  },
];

export const Navbar: FC = () => {
  const { LinksContainer, ListContainer, Nav, NavWrapper } = NavStyles;



  useEffect(() => {
    let prevScrollY = window.scrollY;
    const nav = document.getElementById("nav");

    const handleScroll = () => {
      if (nav) {
        if (window.scrollY > prevScrollY) {
          nav.style.display = "none";
        } else {
          nav.style.display = "block";
        }
        prevScrollY = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav id="nav">
      <Container>
        <NavWrapper>
          <Image
            src="/assets/logo.svg"
            alt="ilio logo"
            width={35.87}
            height={20}
          />
          <ListContainer>
            <LinksContainer>
              {links.map(({ path, title }) => (
                <Link key={title} href={path}>
                  {title}
                </Link>
              ))}
            </LinksContainer>
          </ListContainer>
          <Image
            src="/assets/user.svg"
            alt="ilio logo"
            width={40}
            height={40}
          />
        </NavWrapper>
      </Container>
    </Nav>
  );
};
