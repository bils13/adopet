import React from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import InputText from '../components/InputText'
import Rodape from '../components/Rodape'
import UserIcon from '../img/User.svg'

export const Message = () => {

    return (
        <React.Fragment>
            <div className='background_message'>
                <header>
                    <Header icon={UserIcon}/>
                </header>
                <main>
                    <section className='message'>
                        <div className="message__text">
                            <h1>Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:</h1>
                        </div>
                        <form className='message__form'>
                            <label>Nome</label>
                            <InputText classe='message__input' type='text' placeholder='Insira seu nome completo'/>
                            <label>Telefone</label>
                            <InputText classe='message__input' type='text' placeholder='Insira seu telefone e/ou whatsapp'/>
                            <label>Nome do animal</label>
                            <InputText classe='message__input' type='text' placeholder='Por qual animal você se interessou?'/>
                            <label>Mensagem</label>
                            <textarea className='message__input textarea' placeholder='Escreva sua menssagem...'></textarea>
                            <div className='message__button'>
                                <Button text='Enviar'/>
                            </div>
                        </form>
                    </section>
                </main>
                <Rodape classe='message__footer'/>
            </div>
        </React.Fragment>
    )
}