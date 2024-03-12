import { BsCart } from 'react-icons/bs'

import "./header.styles.css";

const Header = () => {
    return (
        <div className="header-container">
            <h2 className="header-title">CLUB CLOTHING</h2>

                <div className="header-items"> 
                    <div className="header-item">Explorer</div>
                    <div className="header-item">Login</div>
                    <div className="header-item">Criar Conta</div>
                    <div className="header-item">
                        <BsCart size={20} color='#fff'/>
                    </div>
                </div>
        </div>
    )
}

export default Header;