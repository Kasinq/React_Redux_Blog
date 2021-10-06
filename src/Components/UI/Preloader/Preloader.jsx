import React from 'react'
import './Preloader.scss'
import spinner from '../../../images/Spinner-1s-200px.svg'

const Preloader = () => {
    return <div className="spinner"><img src={spinner} alt='Идет загрузка' /></div>
}

export default Preloader