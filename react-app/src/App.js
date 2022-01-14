import React from 'react';
import './App.scss';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { SecondaryButton } from './components/atoms/button/SecondaryButton'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const onClickAdmin = () => navigate({ pathname: "/users", state: { isAdmin: true } });
  const onClickGeneral = () => navigate({ pathname: "/users", state: { isAdmin: false } });
  return (
    <DefaultLayout>
      <SContainer>
        <h2>トップページ</h2>
        <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      </SContainer>
    </DefaultLayout>
  );
}

const SContainer = styled.div`
  text-align: center;
`
