import {useAuth} from '../context/authContext'

export function ProtectedComponent({ children }){

    const {user, loading} = useAuth()

    if(loading) return (<h1>loading</h1>)

    if(!user) return <></>

    return (children)

}