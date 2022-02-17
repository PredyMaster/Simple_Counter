import React, { useContext } from "react";
import styles from "../Assets/css/myStyles.module.css";
import Button from "./Button";
import { countContext } from "../utils/Context"

const DisplayCount = () => {
    const {count} = useContext(countContext);

    return (
        <div>
            <div className={styles.displayCount}>{count}</div>
            <div className={styles.groupButtons}>
                <Button className={styles.Buttonazo} action={"Añade"} />
                <Button className={styles.Buttonazo} action={"Quita"} />
            </div>
        </div>
    )
}

export default DisplayCount;