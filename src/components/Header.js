import React from "react";
import { Badge, Button, Container, FormControl, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { AiFillDelete } from "react-icons/ai";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import './style.css'
const Header = () => {
  const{state:{cart},dispatch}=CartState()
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 , paddingtop: '0px'}}>
      <Container>
        <Navbar.Brand>
          <Link to="/">shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search" >
          <FormControl
            style={{ width: 500 }}
            className="m-auto"
            placeholder="Search a product"
          />
        </Navbar.Text>
        <nav>
          <Dropdown  >
            <Dropdown.Toggle  variant="success" id="dropdown-basic">
              <TfiShoppingCartFull
                color="white"
                fontSize="30px"
                
                
              />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{minWidth:370}} >
            {cart.length> 0 ?(<>
              {cart.map(prod=>(
                <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.avatar}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.username}</span>
                        <span> Rs.{prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}

                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
              ))}
              <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
            </>):(<span >Cart is Empty</span>)}
              
              {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */} 
            </Dropdown.Menu>
          </Dropdown>
        </nav>
      </Container>
    </Navbar>
  );
};

export default Header;
