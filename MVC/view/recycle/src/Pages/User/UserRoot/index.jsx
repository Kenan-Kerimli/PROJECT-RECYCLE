import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../../Components/User/Navbar';
import Footer from '../../../Components/User/Footer';
import styled from 'styled-components';

const Main = styled.main`
  min-height: 100vh;
  margin-top: 0;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
`;

function UserRoot() {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default UserRoot;
