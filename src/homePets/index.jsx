import React from 'react'
import Header from '../components/Header'
import Pets from '../components/Pets'
import UserIcon from '../img/User.svg'
import Dunga from '../img/DogDunga.svg'
import Felicia from '../img/CatFelicia.svg'
import Sirius from '../img/DogSirius.svg'
import Rodape from '../components/Rodape'
import Button from '../components/Button'

export default () => {
    return (
        <div className='background_homepets'>
            <header>
                <Header icon={UserIcon}/>
            </header>
            <main>
                <section className='homepets'>
                    <h1 className='homepets__title'>Olá! Veja os amigos disponíveis para adoção!</h1>
                    <Pets 
                        img={Dunga}
                        name='Dunga'
                        years='2 anos'
                        size='Porte pequeno'
                        description='Calmo e educado'
                        city='Rio de Janeiro (RJ)'
                    />
                    <Pets 
                        img={Felicia}
                        name='Felicia'
                        years='3 anos'
                        size='Porte pequeno'
                        description='Ativa e carinhosa'
                        city='Nova Iguaçu (RJ)'
                    />
                    <Pets 
                        img={Sirius}
                        name='Sirius'
                        years='6 meses'
                        size='Porte grande'
                        description='Ativo e educado'
                        city='Duque de Caxias (RJ)'
                    />
                </section>
            </main>
            <Rodape />
        </div>
    )
}