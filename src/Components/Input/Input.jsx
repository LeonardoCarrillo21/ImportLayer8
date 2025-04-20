
export function Input( {placeholder, type, name, id , user,setUser}) {
    
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }
    
    return <input
        className="border-gray-700  p-2 w-full mx-1 border-2 rounded-2xl"
        type= {type}
        name= {name}
        id= {id}
        placeholder= {placeholder}
        onChange={handleChange}
    />
}
