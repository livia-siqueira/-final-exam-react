import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { Container, Text } from './styles'



export function PageError(){
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate("/Registration")
    }
    const handleLogin = () => {
        navigate("/")
    }
    return (
        <Container>
            <span><AiOutlineCloseCircle color="#868686" size={190}/></span>
            <Text>log in or register to access this page</Text>
            <div className="buttons">
            <button onClick={handleRegister}>Sign Up</button>
            <button onClick={handleLogin}>Log in </button>
            </div>
        </Container>
    )
}