import React from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import logoWhite from '../img/logoAdopetWhite.svg';
import Ilustration from '../img/Ilustração.svg';
import Rodape from '../components/Rodape';

export default () => {
    return (
        <div className='background_home '>
            <header className='header'>
                <Header />
            </header>
            <main>
                <section className='main'>
                    <img src={logoWhite} />
                    <h1>Boas-vindas!</h1>
                    <p>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
                    <Button classe='button' text='Já tenho conta' click={'login'}/>
                    <Button classe='button' text='Quero me cadastrar' click={'register'}/>
                </section>
            </main>
            <div className='ilustration'>
                <img src={Ilustration} />
            </div>
            <footer>
                <Rodape classe='footer'/>
            </footer>
        </div>
    )
}
