import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Btn from '../components/Common/Btn';
import Seo from '../components/Common/Seo';

const NotFound = () => {
    return (
        <>
            <Seo title={"Page 404"}/>
            <section className="page404">
                <h1>404</h1>
                <h2>Oops! Page Not Found</h2>
                <p>The page you are looking for doesn't exist or has been moved.</p>
                <Btn name={"primary"} text={"Back To Home"} />
            </section>
        </>
    );
};

export default NotFound;

