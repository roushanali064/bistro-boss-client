import { Link } from 'react-router-dom';
import img from '../../assets/404.gif'

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={img} alt="404" />
            <button className='btn uppercase mt-5'><Link to='/'>Back to Home</Link></button>
        </div>
    );
};

export default NotFound;