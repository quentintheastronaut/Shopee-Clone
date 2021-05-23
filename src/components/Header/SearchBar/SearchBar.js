import React from 'react'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import Cart from '/Users/quan0402/Desktop/Shopee Clone/shopee/src/components/Cart/Cart.js'

class SearchBar extends React.PureComponent {
    constructor(){
        super()
        this.state = {
            
        }
        this.handleChange = this.handleChange.bind()
    }

    handleChange(){

    }
    
    render(){
        return(
            
                <div className="searchbar">
                    
                    <input className="searchbar__input" placeholder="Tìm sản phẩm, thương hiệu và tên shop" type="text"/>
                    

                    <button className="searchbar__btn">
                        <FontAwesomeIcon icon={faSearch} size='1x' color="white"/>
                    </button>
                </div>
            
        )
    }
}

export default SearchBar