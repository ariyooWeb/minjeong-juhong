import {motion} from "framer-motion";

function TextPage(){
return (
    <div className="text-page"  >
        <motion.div animate={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", duration: 2 }} initial={{
      x:0, y:100, opacity: 0
    }} whileInView={{
      opacity: 1,
      y: 0
    }}>
        <div className="text-page-divider"></div>
          <div className="text-page-content">
            꼭 잡은 두 손, 마주한 모습 속에서<br/> 기쁨과 슬픔, 때로는 아픔을 함께하며<br/> 자그마한 행복의 계단을 쌓아가겠습니다.<br/> 저희의 이 언약을 함께하시어 축복해 주십시오.
          </div>
          <div className="text-page-divider"></div>
        </motion.div>
          
        </div>
)

}

export default TextPage;