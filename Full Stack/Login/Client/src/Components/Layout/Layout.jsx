import { useOutlet } from 'react-router-dom';
import Center from '../Center/Center';


const Layout = () => {

    let out = useOutlet()

    return (
        <center>
            {console.log("out", out)}
           {out ? <Outlet /> : <Center /> }
        </center>
    );
};

export default Layout;