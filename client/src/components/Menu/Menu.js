import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Menu.css'
import groupLogo from './assets/group.png'
import disciplineLogo from './assets/discipline.png'
import typeLogo from './assets/type.png'
import newTask from './assets/paper.png'
import rating from './assets/rating.png'
import menu from './assets/menu.png'
import E from './assets/E.png'
import report from './assets/report.png'
import J from './assets/J.png'

const links = [
    {to: '#', label: 'Группа', logo: groupLogo, exact: false},
    {to: '#', label: 'Дисциплина', logo: disciplineLogo, exact: false},
    {to: '#', label: 'Вид занятия', logo: typeLogo, exact: false},
    {to: '#', label: 'Новое занятие', logo: newTask, exact: false},
    {to: '#', label: 'Рейтинг', logo: rating, exact: false},
    {to: '#', label: '', logo: menu, exact: false}
]

class Menu extends React.Component {

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li
                    key={index}
                >
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.props.onClose}
                    >
                        <img src={link.logo} alt=""/>
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }
    
    render() {

        return (
            <React.Fragment>
                <nav className={classes.Menu}>
                    <div className={classes.Logo}>
                        <img src={E} alt=""/>
                        <img src={report} alt=""/>
                        <img src={J} alt=""/>
                    </div>
                    
                    <ul>
                        { this.renderLinks() }
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Menu