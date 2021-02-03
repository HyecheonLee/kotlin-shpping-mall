import React from 'react';
import { APP_NAME } from '../config';
import Link from 'next/link'
import { useRouter } from 'next/router'

import { isAdmin, isLogged, loggedEmail } from "../actions/auth";
import { Nav, Navbar } from 'react-bootstrap';


const Header = (props) => {
  const router = useRouter();
  const logout = async (e) => {
    localStorage.removeItem("authToken");
    await router.push("/user/signIn")
  }
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <div className="container">
        <Link href=" /">
          <Navbar.Brand href="#">
            {APP_NAME}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          {isLogged() ?
            <Nav className="ml-auto">
              <Link href="/product/upload">
                <Nav.Link href="#home">업로드</Nav.Link>
              </Link>
              <Nav.Link onClick={logout}>로그아웃</Nav.Link>
              <Link href={isAdmin() ? "/admin" : "/user"}>
                <Nav.Link href="#">{loggedEmail()}</Nav.Link>
              </Link>
            </Nav> :
            <Nav className="ml-auto">
              <Link href="/user/signIn">
                <Nav.Link href="/user/signIn">로그인</Nav.Link>
              </Link>
              <Link href="/user/signUp">
                <Nav.Link href="/user/signIn">회원가입</Nav.Link>
              </Link>
            </Nav>}
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Header;
