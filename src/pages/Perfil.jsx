import {useParams} from 'react-router-dom'


export function Perfil () {
    const params = useParams()
    return  <div>Perfil de {params.id}</div>
}