import React, { useState } from 'react';
import { Home, Navbar, Stack, Project, Experience, Contact } from './components/layouts';
import './App.css';

const App = () => {
  // const [isDark, setIsDark] = useState(true); // default = dark

  // const darkMode = () => {
  //   setIsDark(!isDark);
  //   document.body.classList.toggle('light-mode');
  //   // toggle 메서드는 특정 클래스가 요소의 클래스 목록에 있으면 제거하고, 없으면 추가하는 기능을 수행
  // }

  return (
    <div className="container">
      <Navbar />
      <Home />
      <Stack />
      <Project />
      <Experience />
      <Contact />
    </div>
  )
}

export default App

// 1. 화면 구성
// 2. 배경 만들기(움직이는 공?)
// 3. glassmorphism 효과 주기