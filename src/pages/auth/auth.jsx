import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

import styles from './auth.module.css';

import google from '../../img/google.svg';
import facebook from '../../img/facebook.svg';
import yandex from '../../img/yandex.svg';
import lock from '../../img/lock.svg';
import auth_decor from '../../img/auth_decor.svg';
import { createRef, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AuthPage = () => {
    const loginInput = createRef()
    const passwordInput = createRef()
    const submitButton = createRef()
    const navigate = useNavigate()
    const [ values, setValues ] = useState({
        login: 'sf_student1',
        password: '4i2385j'
    })

    const onLoginChange = e => {
        setValues({
            ...values,
            login: e.target.value
        })
    }

    const onPasswordChange = e => {
        setValues({
            ...values,
            password: e.target.value
        })
    }

    const onClick = e => {
        e.preventDefault()
        fetch(`https://gateway.scan-interfax.ru/api/v1/account/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Accept": "application/json"
            },
            body: JSON.stringify({login: values.login, password: values.password})
        })
        .then(res => res.json())
        .then((res) => {
            localStorage.setItem('accessToken', res.accessToken)
        })
        navigate('/');
    }
    
    return (
        <>
            <Header />
            <div className="container">
                <div className={styles.auth_page}>
                    <div className={styles.left_column}>
                        <h1 className={styles.h1}>Для оформления подписки <br /> на тариф, необходимо <br /> авторизоваться.</h1>
                        <img src={auth_decor} className={styles.auth_decor} />
                    </div>
                    <div className={styles.right_column}>
                        <img src={lock} className={styles.lock}/>
                        <div className={styles.registration_block}>
                            <div className={styles.login_text}>
                                <a className={`${styles.login_link} ${styles.blue_text}`} href="">Войти</a>
                                <a className={`${styles.login_link} ${styles.black_text}`} href="">Зарегистрироваться</a>
                            </div>
                            <form className={styles.auth_form}>
                                <label>
                                    <p>Логин или номер телефона:</p>
                                    <input 
                                        name="login" 
                                        type="text" 
                                        required 
                                        value={values.login || 'sf_student1'}
                                        onChange={onLoginChange}
                                        ref={loginInput}
                                    />
                                </label>
                                <label>
                                    <p>Пароль:</p>
                                    <input 
                                        name="password" 
                                        type="password" 
                                        required 
                                        value={values.password || '4i2385j'}
                                        onChange={onPasswordChange}
                                        ref={passwordInput}
                                    />
                                </label>
                                <button
                                    type="submit"
                                    className="submit-button"
                                    ref={submitButton}
                                    onClick={onClick}
                                >Войти</button>
                            </form>
                            <Link to='' className={styles.password_reset}>Восстановить пароль</Link>
                            <div className={styles.browser}>
                                <p className="link">Войти через:</p>
                                <img className={styles.browser_link} src={google} />
                                <img className={styles.browser_link} src={facebook} />
                                <img className={styles.browser_link} src={yandex} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AuthPage;
