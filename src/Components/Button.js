import React, { useContext } from "react";
import { countContext } from "../utils/Context";
import styles from "../Assets/css/myStyles.module.css";


const Button = ({action}) => {
    const { setCount } = useContext(countContext);

    return(
        
        <button className={styles.Buttonazo}
            onClick= {() => {

                if(action === "Añade"){
                    setCount((count) => count + 1);
                }else if( action === "Quita"){
                    setCount((count) => count - 1);
                }
                
            }}
        >
        {action}
        </button>            
        
        
    )
}

export default Button;