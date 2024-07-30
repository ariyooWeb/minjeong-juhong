import './app.scss';
import './reset.css';
import './index.css';
import React, { useState } from "react";
import { motion } from "framer-motion";
import AccountModal from "./accountModal";
import map from "./img/map.jpg";
import flower from "./img/flower.png";
import flower2 from "./img/flower2.png";
import flower3 from "./img/flower3.png";
import TextPage from "./textPage";
import PhotoPage from "./photo";
import p1 from "./img/p1.jpg";

function App() {
  const [accountIndex, setAccountIndex] = useState(undefined);
 
  const closeAccountModal = () => {
    setAccountIndex(undefined);
  };

  return (
    <div className="App">
      <div className="inner">
        <div className="main-page" style={{ backgroundImage: "url(" + p1 + ")" }}>
          <div className="main-page-text">
            <motion.div className="main-page-text-marriage"  animate={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", duration: 2 }} initial={{
      x:500, opacity: 0
    }} whileInView={{
     x: 0
    }}>The marriage of</motion.div>
            <motion.div className="main-page-text-names" animate={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", duration: 2 }} initial={{
      x:0, y:100, opacity: 0
    }} whileInView={{
      y: 0
    }}>
              <div className="main-page-text-names-name">이&nbsp;주&nbsp;홍</div>
              <i class="fa-solid fa-heart"></i>
              <div className="main-page-text-names-name">조&nbsp;민&nbsp;정</div>
            </motion.div>
            <motion.div className="main-page-text-information" animate={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", duration: 2 }} initial={{
      x:0, y:100, opacity: 0
    }} whileInView={{
      opacity: 1,
      y: 0
    }} exit={{ opacity: 0 }}>
                <div className="main-page-text-information-item">
                  2024년 11월 24일 일요일 오후 1시 20분
                </div>
                <div className="main-page-text-information-item">
                  삼산컨벤션웨딩
                </div>
            </motion.div>
          </div>
        </div>
        <TextPage/>
        <PhotoPage/>
        <motion.div className="location-page" animate={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", duration: 2 }} initial={{
      x:0, y:100, opacity: 0
    }} whileInView={{
      opacity: 1,
      y: 0
    }} exit={{ opacity: 0 }}>
          <div className="location-page-main">
            <div className="location-page-main-bold">삼산컨벤션웨딩</div>
            <div className="location-page-main-bold">인천 부평구 삼산동 458-1</div>
          </div>
          <div className="location-page-divider"></div>
          <div className="location-page-way">
            <div className="location-page-way-type">
              <div className="location-page-way-type-title">시내/시외노선버스 안내</div>
              <div className="location-page-way-type-flex">
                <div className="location-page-way-type-box">
                  <div className="location-page-way-type-box-number">
                    <div className="location-page-way-type-box-number-type"><div className="location-page-way-type-box-number-type-text">&bull;</div>부평역</div>
                    <div className="location-page-way-type-box-number-bus">558, 565</div>
                  </div>
                </div>
                <div className="location-page-way-type-box">
                  <div className="location-page-way-type-box-number">
                    <div className="location-page-way-type-box-number-type"><div className="location-page-way-type-box-number-type-text">&bull;</div>부평구청</div>
                    <div className="location-page-way-type-box-number-bus">1200(신촌&#183;홍대) 시외버스</div>
                  </div>
                </div>
                <div className="location-page-way-type-box">
                  <div className="location-page-way-type-box-number">
                    <div className="location-page-way-type-box-number-type"><div className="location-page-way-type-box-number-type-text">&bull;</div>부개역</div>
                    <div className="location-page-way-type-box-number-bus">67-1, 79, 760(동수역) 시내버스</div>
                  </div>
                </div>
                <div className="location-page-way-type-box">
                  <div className="location-page-way-type-box-number">
                    <div className="location-page-way-type-box-number-type"><div className="location-page-way-type-box-number-type-text">&bull;</div>송내역</div>
                    <div className="location-page-way-type-box-number-bus">37, 87</div>
                  </div>
                </div>
                <div className="location-page-way-type-box">
                  <div className="location-page-way-type-box-number">
                    <div className="location-page-way-type-box-number-type"><div className="location-page-way-type-box-number-type-text">&bull;</div>동수역</div>
                    <div className="location-page-way-type-box-number-bus">760(부개역) 시내버스</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="location-page-divider"></div>
            <div className="location-page-way-type">
              <div className="location-page-way-type-title">지하철 이용 안내</div>
              <div className="location-page-way-type-box">지하철 7호선 삼산체육관역 3번 출구</div>
            </div>
            <div className="location-page-divider"></div>
            <div className="location-page-way-type">
              <div className="location-page-way-type-title">주차장 안내</div>
              <div className="location-page-way-type-box">건물 뒷편 지하 1,2층 (동시주차 1000대 가능)</div>
            </div>
          </div>
        </motion.div>
        <div className="map-page">
            <img src={map} />
          </div>
        <motion.div className="account-page"  animate={{scale: 1, opacity: 1}}
    transition={{ type: "spring", duration: 2 }} initial={{
     opacity: 0, scale: 0
    }} >
          <div className="account-page-title">신랑 & 신부에게 마음 전하실 곳</div>
          <div className="account-page-title-hint">축복의 의미로 축의금을 전달해보세요.</div>
          <div className="account-page-box">
            <div
              className="account-page-box-one"
              onClick={() => setAccountIndex(0)}
            >
              신랑 측 계좌번호
            </div>
            <div
              className="account-page-box-one"
              onClick={() => setAccountIndex(1)}
            >
              신부 측 계좌번호
            </div>
          </div>
          <AccountModal
            visible={accountIndex !== undefined && true}
            closeAccountModal={closeAccountModal}
            index={accountIndex}
          />
        </motion.div>
        <div className="footer">
          ariyooWeddingCard
        </div>
      </div>
    </div>
  );
}

export default App;
