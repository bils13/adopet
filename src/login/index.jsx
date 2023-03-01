import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/Auth'
import InputText from "../components/InputText"
import Header from '../components/Header'
import logoBlue from '../img/logoAdopet.svg'
import Link from '../components/Link'
import Button from '../components/Button'
import Rodape from '../components/Rodape'

export default () => {

    const { authenticated, login } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('')

    const getUser = (data) => {
        type === 'email' ? setEmail(data) : setPassword(data)
        console.log(data)
    }

    const getType = (data) => {
        setType(data)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log( { email, password })
        login(email, password) //integração com o contexto / api
    }

    return (
        <div className='background_register'>
            <header>
                <Header />
            </header>
            <main>
                <p>{String(authenticated)}</p>
                <section className='login'>
                    <img className='login__logo' src={logoBlue} />
                    <p className='login__text'>Já tem conta? Faça seu login: </p>
                    <section>
                        <form className="login__form" onSubmit={handleSubmit}>
                            <label>Email</label>
                            <InputText classe='width' type='email' placeholder='Insira seu email' name='email' value={getUser} getType={getType}/> 
                            <label>Senha</label>
                            <InputText type='password' placeholder='Insira sua senha' name='senha' value={getUser} getType={getType}/> 
                            <Link link='' classe='login__link' content='Esqueci minha senha'/>
                            <Button class='button' text='Entrar'/>
                        </form>
                    </section>
                </section>
            </main>
            <Rodape />
        </div>
    )
}