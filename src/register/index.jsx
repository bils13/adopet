import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import logoBlue from '../img/logoAdopet.svg'

export default () => {
    return (
        <div className='background_register'>
            <header>
                <Header />
            </header>
            <main>
                <section className='register'>
                    <img src={logoBlue}></img>
                    <div className='register__text'>
                        <h2>Ainda não tem cadastro?</h2>
                        <h3>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</h3>
                        <Form />
                    </div>
                </section>
            </main>
        </div>
    )
}