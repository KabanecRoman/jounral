import React from 'react'
import classes from './Input.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}


const Input = props => {
    const inputType = props.inputType || 'text'
    const cls = [classes.Input]
    const htmlFor = `${inputType}-${Math.random()}`

    const inputCls = []

    if(!props.touched){
        inputCls.push(classes.Untouched)
    }

    if(isInvalid(props)){
        cls.push(classes.invalid)
        inputCls.push(classes.Invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={props.type}
                id={props.htmlFor}
                value={props.value}
                onChange ={props.onChange}
                className ={inputCls.join(' ')}
            />

            {
                isInvalid(props)
                ? <span> {props.errorMessage || 'Введите верное значение'} </span>
                : null
            }
            
        </div>
    )
}

export default Input