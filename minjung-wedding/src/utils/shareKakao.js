export const shareKakao = (route, title) => { 
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("a75d16e7ea132d7152ce13b003c6cc24");
      }
  
      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "민정 ❤ 주홍",
          description: "2024년 11월 24일 일요일 오후 1시 20분 삼산컨벤션웨딩",
          imageUrl: "https://ifh.cc/g/sAwh6Z.jpg",
          link: {
            mobileWebUrl: route,
            webUrl: route
          }
        },
        buttons: [
          {
            title: "모바일 청첩장 보기",
            link: {
              mobileWebUrl: route,
              webUrl: route
            }
          }
        ]
      });
    }
  };