import React, {Component} from 'react'
import classes from './Layout.css'
import Menu from '../components/Menu/Menu'

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>

                <Menu />

                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout