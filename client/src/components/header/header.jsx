
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
// import './header.css'


function Header() {
  const currentPage = useLocation().pathname;
 
  return (
    <>
      <Nav variant='tabs'>
        <Nav.Item>
          <Nav.Link href="/" active={currentPage === '/'}
          >Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Portfolio" active={currentPage === '/Portfolio'}
          >Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/ContactMe" active={currentPage === '/ContactMe'}
          >Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/* <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <Link
                    to='/'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link 
                    to='/Portfolio'
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                    </Link>
                    </li>
                  
                <li className='nav-item'>
                <Link
                to='/ContactMe'
                className={currentPage === '/ContactMe' ? 'nav-link active' : 'nav-link'}>
                   Contact
                  </Link>
                  </li>
                </ul> */}



    </>
  )
}

export default Header