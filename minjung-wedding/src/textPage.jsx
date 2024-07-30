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
            우리라는 이름으로<br/> 시작하는 삶,<br/> 그 설렘의 순간에<br/> 소중한 분을 초대합니다.
          </div>
          <div className="text-page-divider"></div>
        </motion.div>
          
        </div>
)

}

export default TextPage;