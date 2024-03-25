import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMainPage } from 'reducers/module/viewReducer';

function Footer() {
  const dispatch = useDispatch();


  const [currentIndex, setCurrentIndex] = useState(0); // 현재 인덱스를 상태로 관리합니다.

  // 탭을 클릭했을 때 해당 콘텐츠를 보여주는 함수
  const showContent = (index) => {
    console.log(index)
    dispatch({type:"view/SET_MAIN_PAGE", payload: index})
    setCurrentIndex(index); // 현재 인덱스를 변경합니다.
  };

  return (
    <div className="footer">
      <div className={`tab ${currentIndex === 0 ? 'active' : ''}`} onClick={() => showContent(0)}>Tab 1</div>
      <div className={`tab ${currentIndex === 1 ? 'active' : ''}`} onClick={() => showContent(1)}>Tab 2</div>
      <div className={`tab ${currentIndex === 2 ? 'active' : ''}`} onClick={() => showContent(2)}>Tab 3</div>
    </div>
  );
}

export default Footer;