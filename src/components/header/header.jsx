import styles from './header.module.css';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext, UserInfoContext } from '../app/app';
import avatar from '../../img/avatar.png';
import loaderImg from '../../img/loader.png';

const Header = () => {
    const logined = useContext(AuthContext)
    const loading = useContext(UserInfoContext)

    const onClick = () => {
        localStorage.removeItem('accessToken')
    }
    
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_inner}>
                    <Link to='/'>
                        <img src={logo} alt="Логотип" className={styles.logo} />
                    </Link>
                    
                    <nav className={styles.nav}>
                        <Link to='' className={styles.nav_link}>Главная</Link>
                        <Link to='' className={styles.nav_link}>Тарифы</Link>
                        <Link to='' className={styles.nav_link}>FAQ</Link>
                    </nav>
                    
                    {logined ? (
                        <div className={styles.profile}>
                            <div className={styles.info}>
                                {!loading ? (
                                    <img className={styles.loader} src={loaderImg} alt="" />
                                ) : (
                                    <div className={styles.companies_block}>
                                        <p className={styles.mini_text}>Использовано компаний</p>
                                        <p className={styles.companies}>{loading.usedCompanyCount}</p>
                                        <p className={styles.mini_text} >Лимит по компаниям</p>
                                        <p className={styles.limit}>{loading.companyLimit}</p>
                                    </div>
                                )}
                            </div>
                            <div className={styles.user}>
                                <p className={styles.name}>Алексей А.</p>
                                <div className={styles.sign_out} onClick={onClick}>Выйти</div>
                                <img src={avatar} className={styles.user_img} alt="" />
                            </div>
                        </div>
                    ) : ( 
                        <div className={styles.auth_buttons}>
                            <Link to='' className={styles.reg}>Зарегистрироваться</Link>
                            <Link to='auth' className={styles.auth_link}>Войти</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
