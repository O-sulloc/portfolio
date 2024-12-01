import React, { useEffect } from 'react';
import { Home, Navbar, Stack, Project, Experience, Contact } from './components/layouts';
import './App.css';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { i18n } = useTranslation();
  const isLocaleKR = navigator.language.includes('KR'); // check if the user's locale is Korean
  // return boolean value

  useEffect(() => {
    // useEffect를 사용하여 언어 변경이 초기 렌더링 시에만 한 번 실행되도록 설정
    i18n.changeLanguage(isLocaleKR ? "ko-KR" : "en-US");
  }, [isLocaleKR, i18n]);

  return (
    <div className="container">
      <div className='blob-wrapper'>
        <div className='blob'></div>
      </div>
      <Navbar />
      <Home />
      <Stack />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default App