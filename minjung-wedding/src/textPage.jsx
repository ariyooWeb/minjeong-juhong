import { motion } from "framer-motion";

function TextPage() {
  return (
    <div className="text-page">
      <div>
        <div className="text-page-divider"></div>
        <div className="text-page-content">
          <motion.div
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0, type: "spring", duration: 2 }}
            initial={{ x: 0, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            exit={{ x: 0, y: 100, opacity: 0 }}
          >
            꼭 잡은 두 손, 마주한 모습 속에서
          </motion.div>
          <motion.div
            animate={{ x: 0, y: 0 }}
            transition={{ delay: 1, type: "spring", duration: 2 }}
            initial={{ x: 0, y: 100 }}
            whileInView={{ x: 0, y: 0 }}
            exit={{ x: 0, y: 100 }}
          >
            기쁨과 슬픔, 때로는 아픔을 함께하며
          </motion.div>
          <motion.div
            animate={{ x: 0, y: 0 }}
            transition={{ delay: 2, type: "spring", duration: 2 }}
            initial={{ x: 0, y: 100 }}
            whileInView={{ x: 0, y: 0 }}
            exit={{ x: 0, y: 100 }}
          >
            자그마한 행복의 계단을 쌓아가겠습니다.
          </motion.div>
          <motion.div
            animate={{ x: 0, y: 0 }}
            transition={{ delay: 3, type: "spring", duration: 2 }}
            initial={{ x: 0, y: 100 }}
            whileInView={{ x: 0, y: 0 }}
            exit={{ x: 0, y: 100 }}
          >
            저희의 이 언약을 함께하시어 축복해 주십시오.
          </motion.div>
        </div>
        <div className="text-page-divider"></div>
      </div>
    </div>
  );
}

export default TextPage;
