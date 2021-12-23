import { React, useState , useLayoutEffect} from 'react';
import { motion } from "framer-motion";
import imgSignUp from "../sign-up.svg";
import imgCheck from "../check.svg";
import imgChange from "../change-sos.svg";
import imgStart from "../start.svg";
import imgUnavailable from "../unavailable.svg";
import Swal from 'sweetalert2'

function Perfil({estadoRegistro}) {
    
  const itemContainer = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }; 

  const whyDisabled = (title) => {
    console.log(estadoRegistro);
    if(estadoRegistro == ""){
      Swal.fire(
        'Opción deshabilitada',
        'No puede ' + title.toLowerCase() + " sin antes registrar una solicitud",
        'error'
      )
    }
    else if(estadoRegistro == "Registrada"){
      Swal.fire(
        'Opción deshabilitada',
        'La solicitud ya fue creada',
        'error'
      )
    }
    else {
      Swal.fire(
        'Opción deshabilitada',
        'No puede ' + title.toLowerCase() + " mientras que la solicitud esté en proceso",
        'error'
      )
    }
  }
      
  const items = [
    {
      id: 1,
      title: "Registro del beneficio",
      url: "/registro",
      img: imgSignUp,
      desplegar: estadoRegistro === "" ? true : false,
    },
    {
      id: 2,
      title: "Visualizar solicitud",
      url: "/visualizar-solicitud",
      img: imgCheck,
      desplegar: estadoRegistro != "" ? true : false,
    },
    {
      id: 3,
      title: "Cambiar de sostenedor",
      url: "/cambiar-sostenedor",
      img: imgChange,
      desplegar: estadoRegistro === "Registrada"   ? true : false ,
    
    },
    {
      id: 4,
      title: "Iniciar activación de solicitud",
      url: "/registro",
      img: imgStart,
      desplegar: estadoRegistro ===  "Registrada" ? true : false ,
    }
  ];

  return (
    
  <>
      {items.map((item, i) => (
      <motion.div
      className="menu-items"
      key={item.id}
      variants={itemContainer}
      transition={{ delay: i * 0.3 }}
    
      >
        {
        item.desplegar ? 
          <img src={item.img} alt="food burger" /> :
          <img src={imgUnavailable} style={{opacity: 0.5}} alt="food burger" />
        }
          <motion.div className="item-content">
              <motion.div className="item-title-box">
                  {
                  item.desplegar ? 
                  <a className="item-title linkItem" href={item.url}>{item.title}</a> :
                  <h4 style= {{color: "#898989", opacity: 0.5}} className="button" onClick={() => whyDisabled(item.title)}>{item.title}</h4>
                  }
              </motion.div>
          </motion.div>
      </motion.div>
      ))}    
  </>          
  );

}

export default Perfil;