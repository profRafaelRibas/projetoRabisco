import Headerb from '../components/Headerb'
import Titulo from '../components/Titulo'
import CardList from '@/components/CardList'
import api from '@/services/api'
import { useEffect, useState } from 'react'

export default function produtos() {
    
    const [produtos, setProdutos] = useState([])

    async function buscaProdutos(){
        try {
            const response = await api.get('/produto')
            console.log(response)
            setProdutos(response.data)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
        }
    }

    useEffect(function () {
        buscaProdutos()
        const intervalId = setInterval(buscaProdutos, 5000)
        return (function tempo(){clearInterval(intervalId)})
    }, [])

    return (
        <>
            <Headerb />
            <Titulo texto="Conheça nossos produtos!" />
            
            <CardList produtos={produtos}/>

        </>
    )
}

