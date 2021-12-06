import { React, useState , useLayoutEffect} from 'react';
import { motion } from "framer-motion";
import imgSignUp from "../sign-up.svg";
import imgCheck from "../check.svg";
import imgChange from "../change-sos.svg";
import imgStart from "../start.svg";
import RegisterService from "../_hooks/RegisterService";
import Swal from 'sweetalert2'

function Perfil() {
        console.log("CREANDO BOTONES?");
  const [estadoRegistro, setEstadoRegistro] = useState("");
  //const [items, setItems] = useState();
  
  const [desplegar, setDesplegar] = useState("");

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



    
      
    const itemContainer = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      };

  /* 
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
  */
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

                    {item.desplegar ? 
                    <a className="item-title linkItem" href={item.url}>{item.title}</a> :
                    <h4 style= {{color: "#898989"}} className="button" onClick={() => whyDisabled(item.title)}>{item.title}</h4>
                    }
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