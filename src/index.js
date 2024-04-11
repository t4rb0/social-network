import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
let posts = [{text:"aasbebar",id:1},{text:"yhhyrtuyrt",id:2},{text:"ythgfghdfg",id:3}]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// git add .   - добавить файлы в систему контроля версий
// git commit -m "сообщения"  - сохранить изменения
// git push  - загрузить изменения на удаленный репозиторий