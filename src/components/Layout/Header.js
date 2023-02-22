import { Fragment } from "react"
import drinksImage from '../../assets/bubbleTea.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
    return (
      <Fragment>
        <header className={classes.header}>
          <h1>ReactDrinks</h1>
          <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
          <img src={drinksImage} alt="Drnks" />
        </div>
      </Fragment>
    )

}


export default Header