import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';

export default () => {

	switchNavBar = params => {
		const { logoutUser, user, gitHubUser } = this.props;
		switch (params.userType) {
			case 'GitHub User':
				return (
					<Nav>
            <Nav.Link
              href='/wishlist'
              style={
                {
                  color: 'white'
                }
              }
            >
              Wishlist
            </Nav.Link>
						<Nav.Link href={`/user/${params.id}`}> {gitHubUser.name} </Nav.Link>
						<Button
							onClick={() => {
								logoutUser(user.id);
							}}>
							Logout
						</Button>
					</Nav>
				);
			case 'Existing customer':
				return (
					<Nav>
						<Nav.Link
              href={`/user/${params.id}`}
              style={
                {
                  color: 'white'
                }
              }
            >
							{params.firstName} {params.lastName}
            </Nav.Link>
            <Nav.Link
              href='/wishlist'
              style={
                {
                  color: 'white'
                }
              }
            >
              Wishlist
            </Nav.Link>
            <Button
              onClick={() => {
                logoutUser(user.id);
              }}
              style={
                {
                  color: 'white'
                }
              }
            >
              Logout
            </Button>
          </Nav>
        );

			case 'Admin':
        return (
          <Nav>
            <Nav.Link
              href={`/user/${params.id}`}
              style={
                {
                  color: 'white'
                }
              }
            >
              Hello, {params.firstName} {params.lastName}
            </Nav.Link>
            <Button
              onClick={() => {
                logoutUser(user.id);
              }}
              style={
                {
                  color: 'white',
                  backgroundColor: '#343a40',
                  border: '0',
                  borderRadius: '0',
                }
              }
            >
              {' '}
              Logout{' '}
            </Button>
          </Nav>
        );
      default:
        return (
          <Nav>
            <Nav.Link
              href='/signup'
              style={
                {
                  color: 'white'
                }
              }
            >
              Sign Up
            </Nav.Link>
            <Nav.Link
              href='/login'
              style={
                {
                  color: 'white'
                }
              }
            >
              Login
            </Nav.Link>
          </Nav>
        );
    }
  };

	return (
	  <Navbar
        bg='dark'
        style={
          {
            height: '7rem',
            backgroundColor: 'black',
            fontWeight: '100',
            padding: '0 5rem',
          }
        }
      >
				<Navbar.Brand>
          Logo
        </Navbar.Brand>
        <Nav
          className='mr-auto'
        >
          <Nav.Link 
            href='/home'
            style={
              {
                color: 'white'
              }
            }
          >
					Home
          </Nav.Link>
          <Nav.Link 
            href='/about'
            style={
            {
              color: 'white'
            }
            }
          >
            About
          </Nav.Link>
          <Nav.Link 
            href='/products/page/1'
            style={
              {
                color: 'white'
              }
            }
          >
            Shop
          </Nav.Link>
          <Nav.Link 
            href='/gallery'
            style={
              {
                color: 'white'
              }
            }
          >
            Photo Booth
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            href='/cart'
            style={
              {
                color: 'white'
              }
            }
          >
            Cart
          </Nav.Link>
          {this.switchNavBar(user, gitHubUser)}
        </Nav>
      </Navbar>
    );
}
