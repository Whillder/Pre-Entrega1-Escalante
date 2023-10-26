import { FaShoppingCart } from "react-icons/fa";
import style from "./cartWidget.module.css"

export const CartWidget = () => {
  return (
    <>
    <a className={`nav-link active ${style.linkNavShow}`} aria-current="page" href="#">
      <FaShoppingCart color="white" size={35}/>
    <span className={style.countCar}>0</span></a>
    </>
  )
}
//{`nav-link active ${style.car}`}
