import './app.scss';
import './reset.css';
import './index.css';
import React, { useState } from "react";
import Modal from "./modal";
import AccountModal from "./accountModal";
import p1 from "./img/p1.jpg";
import p2 from "./img/p2.jpg";
import p3 from "./img/p3.jpg";
import p4 from "./img/p4.jpg";
import p5 from "./img/p5.jpg";
import p6 from "./img/p6.jpg";
import p7 from "./img/p7.jpg";
import p8 from "./img/p8.jpg";
import p9 from "./img/p9.jpg";
import p10 from "./img/p10.jpg";
import p11 from "./img/p11.jpg";
import p12 from "./img/p12.jpg";
import p13 from "./img/p13.jpg";
import p14 from "./img/p14.jpg";
import p15 from "./img/p15.jpg";
import map from "./img/map.jpg";
import flower from "./img/flower.png";
import flower2 from "./img/flower2.png";
import flower3 from "./img/flower3.png";

function App() {
  const [visible, setVisible] = useState(false);
  const [accountIndex, setAccountIndex] = useState(undefined);
  const closeModal = () => {
    setVisible(false);
    document.body.style.overflow = 'unset';
  };
  const closeAccountModal = () => {
    setAccountIndex(undefined);
  };
  const [index, setIndex] = useState(0);
  const data = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15
  ];
  const photoClick = (index) => {
    setIndex(index);
  };

  const openModal = () => {
    setVisible(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <div className="App">
      <div className="inner">
        <div className="main-page" style={{ backgroundImage: "url(" + p1 + ")" }}>
          <div className="main-page-text">
            <div className="main-page-text-marriage">The marriage of</div>
            <div className="main-page-text-names">
              <div className="main-page-text-names-name">이&nbsp;주&nbsp;홍</div>
              <i class="fa-solid fa-heart"></i>
              <div className="main-page-text-names-name">조&nbsp;민&nbsp;정</div>
            </div>
            <div className="main-page-text-information">
                <div className="main-page-text-information-item">
                  2024년 11월 24일 일요일 오후 1시 20분
                </div>
                <div className="main-page-text-information-item">
                  삼산컨벤션웨딩
                </div>
            </div>
          </div>
        </div>
        <div className="text-page">
          <div className="text-page-divider"></div>
          <div className="text-page-content">
            우리라는 이름으로<br/> 시작하는 삶,<br/> 그 설렘의 순간에<br/> 소중한 분을 초대합니다.
          </div>
          <div className="text-page-divider"></div>
        </div>
        <div className="photo-page">
          <div className="photo-page-title">GALLERY</div>
          <div className="photo-page-grid" onClick={openModal}>
            {data.map((item, index) => (
              <img
                src={item}
                className="photo-page-img"
                onClick={() => photoClick(index)}
              />
            ))}
          </div>
          <Modal
            visible={visible}
            closeModal={closeModal}
            initialSlide={index}
          />
        </div>
        <div className="location-page">
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
        </div>
        <div className="map-page">
            <img src={map} />
          </div>
        <div className="account-page">
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
        </div>
        <div className="footer">
          ariyooWeddingCard
        </div>
      </div>
    </div>
  );
}

export default App;
