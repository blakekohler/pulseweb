import React from 'react';
import style from './thanksmessage.module.scss'
import kioskred from '../../images/kioskredback.jpg'
import { Link } from "gatsby"

const Thanksmessage  = () => {
  return (<div className={style.container}>
  
  <div className={style.left}>
  <div className={style.row}>
<h1>Thanks for reaching out!</h1>
  <br></br>
  <div className={style.secondaryHeader}>
  <h2 className={style.midwidth}>We'll be in touch with you very soon. </h2>
  
  </div>
  <div className={style.buttonHolder}><Link className={style.homebutton} to="/"> Go Home</Link></div>
  
     </div>
  </div>
  <div className={style.right}>
  </div>
  
  </div>)
};
export default Thanksmessage