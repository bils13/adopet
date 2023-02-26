import React from 'react'
import InputText from "../components/InputText"
import Header from '../components/Header'
import logoBlue from '../img/logoAdopet.svg'
import Link from '../components/Link'
import Button from '../components/Button'
import Rodape from '../components/Rodape'

export default () => {
    return (
        <div className='background_register'>
            <header>
                <Header />
            </header>
            <main>
                <section className='login'>
                    <img className='login__logo' src={logoBlue} />
                    <p className='login__text'>Já tem conta? Faça seu login: </p>
                    <section>
                        <form className="login__form">
                            <label>Email</label>
                            <InputText classe='width' type='email' placeholder='Insira seu email' name='email'/> 
                            <label>Senha</label>
                            <InputText type='password' placeholder='Insira sua senha' name='senha'/> 
                            <Link link='' classe='login__link' content='Esqueci minha senha'/>
                            <Button class='button' text='Entrar'/>
                        </form>
                    </section>
                    <Rodape />
                </section>
            </main>
            
        </div>
    )
}