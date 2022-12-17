import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Headr.module.scss"

const Header = () => {
  return (
    <div className={style.container}>
      <Link>
        <img src="../assets/images/logo.svg" alt="" />
      </Link>
    </div>
  )
}

export default Header