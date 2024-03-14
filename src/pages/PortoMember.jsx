import {useParams} from "react-router"

export function PortoMember({name}){
    const{ portoId } = useParams()
    const member = PortoMember
    return <h1> Team Member - {name}</h1>
}