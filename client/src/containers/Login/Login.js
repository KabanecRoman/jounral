import React, {Component} from 'react'
import classes from './Login.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import is from 'is_js'

export default class Login extends Component {
    state = {
        formControls: {
            email: {
                value: '',
                label: 'Email',
                type: 'email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                label: 'Пароль',
                type: 'password',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    validateControl(value, validation){
        if (!validation){
            return true
        }

        let isValid = true

        if (validation.required){
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email){
            isValid = is.email(value) && isValid
        }

        if (validation.minLength){
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {

        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
        formControls[controlName] = control

        let isFormValid = true
        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }

    submitHandler = e => {
        e.preventDefault()
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input 
                    key = {controlName + index}
                    value = {control.value}
                    label = {control.label}
                    type = {control.type}
                    errorMessage = {control.errorMessage}
                    valid = {control.valid}
                    touched = {control.touched}
                    shouldValidate = {!!control.validation}
                    onChange = {event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Login}>
                <div>
                    <h1>Авторизация</h1>
                    <form onSubmit={this.submitHandler} className={classes.LoginForm}>
                        {this.renderInputs()}

                        <Button 
                            type={'primary'}
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Войти
                        </Button>
                    </form>
                </div>  
            </div>
        )
    }
}