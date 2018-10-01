import React from 'react'
import { Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = ({userInfo, logout}) => {
    return (
        <div class='ui clearing segment'>
            {userInfo ? 
            <Link to="/"><h2 onClick={logout} class='ui right floated header'>Logout</h2></Link>
                : <Fragment>
                    <Link to="/register"><h2 class='ui right floated header'>Register</h2></Link>
                    <Link to="/login"><h2 class='ui right floated header'>Login</h2></Link>
                    </Fragment>}
            <h2 class='ui left floated header'>Mealpix</h2>
        </div>
    )
}

export default Header