import React from 'react'
import Header from '../components/Header'
import Pets from '../components/Pets'
import UserIcon from '../img/User.svg'
import Dunga from '../img/DogDunga.svg'
import Felicia from '../img/CatFelicia.svg'
import Sirius from '../img/DogSirius.svg'
import Rodape from '../components/Rodape'
import Fiona from '../img/Fiona.svg'
import Yoda from '../img/Yoda.svg'
import Sid from '../img/Sid.svg'
import Lua from '../img/Lua.svg'
import Amora from '../img/Amora.svg'
import Zelda from '../img/Zelda.svg'


export default () => {
    return (
        <div className='background_homepets'>
            <header>
                <Header icon={UserIcon}/>
            </header>
            <main>
                <div className='homepets__title'>
                    <h1><span>Olá!</span> Veja os amigos disponíveis para adoção!</h1>
                </div>
                <section className='homepets'>
                    <div className='pets__layout'>
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
                        <Pets 
                            img={Fiona}
                            name='Fiona'
                            years='6 meses'
                            size='Porte grande'
                            description='Ativo e educado'
                            city='Duque de Caxias (RJ)'
                        />
                        <Pets 
                            img={Sid}
                            name='Sid'
                            years='6 meses'
                            size='Porte grande'
                            description='Ativo e educado'
                            city='Duque de Caxias (RJ)'
                        />
                        <Pets 
                            img={Yoda}
                            name='Yoda'
                            years='6 meses'
                            size='Porte grande'
                            description='Ativo e educado'
                            city='Duque de Caxias (RJ)'
                        />
                        <Pets 
                            img={Lua}
                            name='Lua'
                            years='6 meses'
                            size='Porte grande'
                            description='Ativo e educado'
                            city='Duque de Caxias (RJ)'
                        />
                        <Pets 
                            img={Zelda}
                            name='Zelda'
                            years='6 meses'
                            size='Porte grande'
                            description='Ativo e educado'
                            city='Duque de Caxias (RJ)'
                        />
                        <Pets 
                            img={Amora}
                            name='Amora'
                            years='6 meses'
                            size='Porte grande'
                            description='Ativo e educado'
                            city='Duque de Caxias (RJ)'
                        />
                    </div>
                </section>
            </main>
            <Rodape classe='homepets__footer'/>
        </div>
    )
}