import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from '../../components/menu/menu';
import { Header } from '../../components/header/header';
import { Main } from '../../components/main/main.jsx';
import styles from './home.module.css'
import { Footer } from '../../components/footer/footer';

export function HomePage() {

  return (
    <>
      <Menu />
      <Header />
      <Main />
      <Footer />
    </>
  );
}