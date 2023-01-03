import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import SearchBox from '../../components/SetName/SearchBox.component';

const Home = () => {
    return (
        <div>
            <>
                <MDBNavbar light bgColor='dark'>
                    <MDBContainer fluid className='justify-content-center'>
                        <MDBNavbarBrand tag="span" className='mb-0 h1 text-white'>NPM package search</MDBNavbarBrand>
                    </MDBContainer>
                </MDBNavbar>
            </>
            <SearchBox/>
        </div>

    )
}

export default Home