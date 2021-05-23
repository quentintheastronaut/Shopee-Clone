import React, { PureComponent } from 'react'
import Navbar from './NavBar/Navbar'
import './Header.css'
import SearchBar from './SearchBar/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import Cart from '/Users/quan0402/Desktop/Shopee Clone/shopee/src/components/Cart/Cart.js'

class Header extends PureComponent {

    render(){
        return (
            <div className="header">
                <Navbar/>
                <div className="header_with_search">
                    <a className="header__logo" href="hello">
                        <div className="logo">
                            <div className="s">S</div>
                            <FontAwesomeIcon icon={faShoppingBag} color="white" size="2x" className="shopbag"/>
                        </div>
                        
                        <div href="hello" className="shopee" >Shopee</div>
                    </a>
                    
                    <SearchBar/>
                    <div className="header__cart">
                        <FontAwesomeIcon icon={faShoppingCart} color="white" size="4x"/>
                        <div className="myCart">
                        
                            <Cart/>
                        </div>
                    </div>
                </div> 
                <div className="recommendbar">
                    <a href="hello" className="recommendbar__opt">Sandal Nữ</a>
                    <a href="hello" className="recommendbar__opt">Hoodie Nam</a>
                    <a href="hello" className="recommendbar__opt">Áo Nữ</a>
                    <a href="hello" className="recommendbar__opt">Dép Nam</a>
                    <a href="hello" className="recommendbar__opt">Quần Nam</a>
                    <a href="hello" className="recommendbar__opt">Balo Nữ</a>
                    <a href="hello" className="recommendbar__opt">Váy Trắng</a>
                    <a href="hello" className="recommendbar__opt">Áo Nam</a>
                </div>

               
            </div>
        )
    }
}

export default Header