import { Api } from "../providers";
import { ICriarClassificados } from '../interfaces'

const criarClassificados = (data: ICriarClassificados) =>
    Api.post('/api/Classificados',
        JSON.stringify(data),
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

export const ClassificadosServices = {
    criarClassificados
}