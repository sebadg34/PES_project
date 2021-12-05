import { React, useEffect, useState , useLayoutEffect} from 'react';
import { motion } from "framer-motion";
import imgSignUp from "../sign-up.svg";
import imgCheck from "../check.svg";
import imgWaiting from "../waiting.svg";
import imgChange from "../change-sos.svg";
import imgStart from "../start.svg";
import { components } from 'react-select';
import RegisterService from "../_hooks/RegisterService";
import MenuItem from "../auxiliars/menuItem"

function Perfil() {
        console.log("CREANDO BOTONES?");
  const [estadoRegistro, setEstadoRegistro] = useState("");
  //const [items, setItems] = useState();
  
  
  

  useLayoutEffect(() => {

    

    async function getRegister() {
      RegisterService.getRegister().then((data) => {
        console.log(data);
    
        if("errors" in data){
          setErrores(data.errors);
        }
        // TIENE REGISTRO
        else if (data.data){
      
          setEstadoRegistro(data.data.estado);
          console.log("TIENE REGISTRO, CARGAR DE ACUERDO SE REQUIERE");
          
        // NO TIENE REGISTRO
        }else{
          console.log("NO TIENE REGISTRO, LIMITAR FUNCIONALIDADES");
        }
        
      
        

    });
    
     

    }

    getRegister();
    
    
    
  }, []);




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
    }
  ];



    
      
    const itemContainer = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      };


      if(estadoRegistro != ""){
        // registrado, muestra todo excepto registrar
        if(estadoRegistro == "Registrada"){
          items.splice(items.findIndex(obj => obj.id === 1), 1);
          console.log("ESTADO: REGISTRADA");
          // Cuando esta en progreso, elimina todo excepto visualizar
        }else if(estadoRegistro == "En progreso"){
          items.splice(items.findIndex(obj => obj.id === 1), 1);
          items.splice(items.findIndex(obj => obj.id === 3), 1);
          items.splice(items.findIndex(obj => obj.id === 4), 1);
        }

        // no esta registrado, elimina todo excepto registrar
       }else{
        items.splice(items.findIndex(obj => obj.id === 2), 1);
        items.splice(items.findIndex(obj => obj.id === 3), 1);
        items.splice(items.findIndex(obj => obj.id === 4), 1);
       }

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