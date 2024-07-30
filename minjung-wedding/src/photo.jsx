import Modal from "./modal";
import { motion } from "framer-motion";
import React, { useState } from "react";
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

function PhotoPage(){
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const closeModal = () => {
        setVisible(false);
        document.body.style.overflow = 'unset';
      };
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
    return(
        <motion.div className="photo-page" animate={{ opacity: 1 }}
        transition={{ duration: 2 }} initial={{
          opacity: 0
        }} >
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
        </motion.div>
    )
}

export default PhotoPage;