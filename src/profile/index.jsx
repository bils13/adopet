import React from 'react'
import Header from '../components/Header'
import InputText from '../components/InputText'
import Button from '../components/Button'
import Picture from '../img/Picture.svg'
import Rodape from '../components/Rodape'
import UserIcon from '../img/User.svg'

export const Profile = () => {
    return(
        <div className='background_message'>
            <header>
                <Header icon={UserIcon}/>
            </header>
            <main>
                <section className='profile'>
                    <div className="profile__text">
                        <h1>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</h1>
                    </div>
                    <form className='profile__form'>
                        <h2 className='profile__title'>Perfil</h2>
                        <label>Foto</label>
                        <div className='profile__picture'>
                            <img src={UserIcon} />
                            <p>Clique na foto para editar</p>
                        </div>
                        <label>Nome</label>
                        <InputText classe='profile__input' type='text' placeholder='Insira seu nome completo'/>
                        <label>Telefone</label>
                        <InputText classe='profile__input' type='text' placeholder='Insira seu telefone e/ou whatsapp'/>
                        <label>Cidade</label>
                        <InputText classe='profile__input' type='text' placeholder='Por qual animal você se interessou?'/>
                        <label>Sobre</label>
                        <textarea className='profile__input textarea' placeholder='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.'></textarea>
                            <div className='profile__button'>
                                <Button text='Salvar'/>
                            </div>
                    </form>
                </section>
            </main>
            <Rodape classe='profile__footer'/>
        </div>
    )
}