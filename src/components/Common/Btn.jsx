import { Link } from "react-router-dom"
import '../../index.css'

const Btn = ({ name, link = "#", text, onClick }) => {
    return (
        <Link 
            className={`btn ${name}`} 
            to={link} 
            onClick={onClick}
        >
            {text}
        </Link>
    )
}

export default Btn;