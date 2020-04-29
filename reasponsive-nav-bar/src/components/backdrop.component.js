import React from 'react'
import './backdrop.styles.scss'

const Backdrop = ({handleCloseDrawer}) => (
    <div className ='backdrop' onClick = {handleCloseDrawer}/>
)

export default Backdrop