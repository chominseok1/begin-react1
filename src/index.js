import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // html or jsp 로 치면 <style></style>
import App from './App'; // com.sist.dao 패키지 불러오기 => 리액트에서는 component라고 한다.
import reportWebVitals from './reportWebVitals';
 // 태그들을 감싸려면 위에 큰 태그 안에 넣어줘야함! 태그는 꼭 닫혀있어야한다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1>Hello!!</h1>
  <App/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
