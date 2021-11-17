import { React } from 'react';
import { motion } from "framer-motion";
import imgSignUp from "../sign-up.svg";
import imgCheck from "../check.svg";
import imgChange from "../change-sos.svg";
import imgStart from "../start.svg";

function Perfil() {
        
    const items = [
        {
          id: 1,
          title: "Registro del beneficio",
          url: "/registro",
          img: imgSignUp,
        },
        {
          id: 2,
          title: "Visualizar solicitud",
          url: "/visualizar-solicitud",
          img: imgCheck,
        },
        {
          id: 3,
          title: "Cambiar de sostenedor",
          url: "/cambiar-sostenedor",
          img: imgChange,
        },
        {
          id: 4,
          title: "Iniciar activación de solicitud",
          url: "/registro",
          img: imgStart,
        },
    ];
      
    const itemContainer = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      };
    
    return (
    <>
        {items.map((item, i) => (
        <motion.div
        href="/registro"
        className="menu-items"
        key={item.id}
        variants={itemContainer}
        transition={{ delay: i * 0.3 }}
      
        >
            <img src={item.img} alt="food burger" />
            <motion.div className="item-content">
                <motion.div className="item-title-box">
                    <a className="item-title linkItem" href={item.url}>{item.title}</a>
                {/* <motion.h5 className="item-price">${item.price}</motion.h5> */}
                </motion.div>
                {/* <motion.p className="item-desc">{item.desc}</motion.p> */}
            </motion.div>
        </motion.div>
        ))}              
    </>
    );
}

export default Perfil;