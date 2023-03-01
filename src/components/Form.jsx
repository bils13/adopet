import InputText from '../components/InputText'
import Button from '../components/Button'
import Rodape from '../components/Rodape'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom'
let users = []

const schema = yup.object({ //validação 
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Digite um e-mail válido.').required('O e-mail é obrigatório'),
    password: yup.string().min(6, 'A senha deve conter pelo menos 6 caracteres.').required('A senha é obrigatória'),
    passwordC: yup.string().min(6, 'A senha deve conter pelo menos 6 caracteres.').required('A senha é obrigatória').oneOf([yup.ref('password')], 'As senhas não se conferem.'),
  }).required();

export default () => {
    const navigate = useNavigate()
    const [state, setState ] = useState('')
    const [stateTwo, setStateTwo] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        window.matchMedia('(max-width: 700px)').matches &&  setState(window.matchMedia('(max-width: 700px)'))
        window.matchMedia('(min-width: 1440px)').matches && setStateTwo(window.matchMedia('(min-width: 1440px)'))
    }, [])
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema) // passar como parametro quando se tem validação
    })

    const addUser = data => {
        getUsers(data.email)
        if(users.length>0){
            users.forEach(element => {
                if(element === data.email) {
                    setError(true)
                }
                else {
                    localStorage.setItem(data.email, JSON.stringify(data))
                    setError(false)
                    navigate('/login')
                }
            })
        }
        else {
            localStorage.setItem(data.email, JSON.stringify(data))
            navigate('/login')
        }
    } 

    const getUsers = data => {
        let userString = localStorage.getItem(`${data}`)
        let userObj
        if(userString!=null) {
            userObj = JSON.parse(userString)
            return users.push(userObj.email)
        }
        
    }

    return (
        <form onSubmit={handleSubmit(addUser)}>
            <div className='register__label'>

                {state.matches && (<label>Email</label>) }
                {state.matches && (<InputText type='email' name='email' register={register} required='required: true' placeholder='Escolha o seu melhor e-mail'/>) }
                {state.matches && (<label>Nome</label>) }
                {state.matches && (<InputText type='text' name='name' register={register} required='required: true' placeholder='Digite seu nome completo'/>) }
                
                {!state.matches && (<label>Nome</label>) }
                {!state.matches && (<InputText type='text' name='name' register={register} required='required: true' placeholder='Digite seu nome completo'/>) }
                {!state.matches && (<label>Email</label>) }
                {!state.matches && (<InputText type='email' name='email' register={register} required='required: true' placeholder='Escolha o seu melhor e-mail' />) }

                <label>Senha</label>
                <InputText type='password' name='password' register={register} required='required: true' placeholder='Crie uma senha' classe={errors.passwordC ? 'border-red' : ''} />
                <label>Confirme sua senha</label>
                <InputText type='password' name='passwordC' register={register} required='required: true' placeholder='Repita a senha criada acima' classe={errors.passwordC ? 'border-red' : ''}/>

                {errors.passwordC && (<p className='invalidPassword'>{errors.passwordC?.message}</p>)}
                {error==true && (<p className='invalidEmail'>E-mail já cadastrado no sistema.</p>)}

                {stateTwo.matches && (<Button class='register__button' text='Cadastrar!'/>)}
                {!stateTwo.matches && (<Button class='register__button' text='Cadastrar'/>)}

                <Rodape />
            </div>
        </form>
    )
}