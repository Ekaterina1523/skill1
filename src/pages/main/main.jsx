import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

import styles from './main.module.css';

import group from '../../img/top_banner.png';
import group1 from '../../img/middle_banner.svg';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../components/app/app";
import lamp from '../../img/lamp.svg'
import arrow from '../../img/arrow.svg'
import notebook from '../../img/notebook.svg'
import swiper_1 from '../../img/swiper_1.png'
import swiper_2 from '../../img/swiper_2.png'
import swiper_3 from '../../img/swiper_3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";

const MainPage = () => {
    const logined = useContext(AuthContext)

    return (
        <>
            <Header  />
            <div className='container'>
                <div className={styles.block}>
                    <div className={styles.left}>
                        <p className={styles.heading}>
                            Сервис по поиску <br /> публикаций <br /> о компании <br /> по его ИНН
                        </p>
                    </div>
                    <div className={styles.right}>
                        <img src={group} alt="group" />
                    </div>
                    <div className={styles.text}>
                        <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                        {logined && (
                            <Link to='search' className={styles.button}>
                                Запросить данные
                            </Link>
                        )}
                    </div>
                </div>
                <Swiper
                    className={styles.why_we}
                    modules={[Navigation]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={3}
                    onSlideChange={() => {}}
                    onSwiper={(swiper) => {}}
                >
                    <SwiperSlide className={styles.swiper_slide}>
                        <img src={swiper_1} alt="" />
                        <p>Высокая и оперативная скорость <br /> обработки заявки</p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <img src={swiper_2} alt="" />
                        <p>Огромная комплексная база <br /> данных, обеспечивающая <br /> объективный ответ на запрос</p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <img src={swiper_3} alt="" />
                        <p>Защита конфеденциальных сведений, <br /> не подлежащих разглашению по <br /> федеральному законодательству</p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <img src={swiper_1} alt="" />
                        <p>Высокая и оперативная скорость <br /> обработки заявки</p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <img src={swiper_2} alt="" />
                        <p>Огромная комплексная база <br /> данных, обеспечивающая <br /> объективный ответ на запрос</p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <img src={swiper_3} alt="" />
                        <p>Защита конфеденциальных сведений, <br /> не подлежащих разглашению по <br /> федеральному законодательству</p>
                    </SwiperSlide>
                </Swiper>
                <img src={group1} className={styles.middle_banner} />
                <div className={styles.cards_holder}>
                    <p className={styles.title_bold}>наши тарифы</p>

                    <div className={styles.cards}>
                        <div className={`${styles.card} ${logined && styles.active}`}>
                            <div className={`${styles.card_head} ${styles.head_orange}`}>
                                <p className={`${styles.inter_30} ${styles.mt_10}`}>Beginner</p>
                                <p className={styles.inter_18}>Для небольшого исследования</p>
                                <img className={styles.card_head_img} src={lamp} alt="" />
                            </div>
                            <div className={styles.card_body}>
                                <div className={`${styles.inter_14} ${styles.badge}`}>Текущий тариф</div>
                                <p className={styles.inter_30}>799 ₽ <span className={styles.span}>1 200 ₽</span></p>
                                <p className={`${styles.inter_18} ${styles.mt_60}`}>Подзаголовок</p>
                                <p className={styles.inter_20}>В тариф входит:</p>
                                <ul className={styles.ul}>
                                    <li className={`${styles.inter_18} ${styles.li}`}>Безлимитная история запросов</li>
                                    <li className={`${styles.inter_18} ${styles.li}`}>Безопасная сделка</li>
                                    <li className={`${styles.inter_18} ${styles.li}`}>Поддержка 24/7</li>
                                </ul>
                
                                {logined ? (
                                    <button className={`${styles.card_button} ${styles.for_logined} ${styles.inter_20}`}>Перейти в личный кабинет</button>
                                ) : (
                                    <button className={`${styles.card_button} ${styles.inter_20}`}>Подробнее</button>
                                )}
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={`${styles.card_head} ${styles.head_blue}`}>
                                <p className={`${styles.inter_30} ${styles.mt_10}`}>Pro</p>
                                <p className={styles.inter_18}>Для HR и фрилансеров</p>
                                <img className={styles.card_head_img} src={arrow} alt="" />
                            </div>
                            <div className={styles.card_body}>
                                <div className={`${styles.inter_14} ${styles.badge}`}>Текущий тариф</div>
                                <p className={styles.inter_30}>799 ₽ <span className={styles.span}>1 200 ₽</span></p>
                                <p className={`${styles.inter_18} ${styles.mt_60}`}>Подзаголовок</p>
                                <p className={styles.inter_20}>В тариф входит:</p>
                                <ul className={styles.ul}>
                                    <li className={`${styles.inter_18} ${styles.li}`}>Безлимитная история запросов</li>
                                    <li className={`${styles.inter_18} ${styles.li}`}>Безопасная сделка</li>
                                    <li className={`${styles.inter_18} ${styles.li}`}>Поддержка 24/7</li>
                                </ul>
                
                                <button className={`${styles.card_button} ${styles.inter_20}`}>Подробнее</button>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={`${styles.card_head} ${styles.head_black}`}>
                                <p className={`${styles.inter_30} ${styles.mt_10}`}>Business</p>
                                <p className={styles.inter_18}>Для корпоративных клиентов</p>
                                <img className={styles.card_head_img} src={notebook} alt="" />
                            </div>
                            <div className={styles.card_body}>
                                <div className={`${styles.inter_14} ${styles.badge}`}>Текущий тариф</div>
                                <p className={styles.inter_30}>799 ₽ <span className={styles.span}>1 200 ₽</span></p>
                                <p className={`${styles.inter_18} ${styles.mt_60}`}>Подзаголовок</p>
                                <p className={styles.inter_20}>В тариф входит:</p>
                                <ul className={styles.ul}>
                                    <li className={`${styles.inter_18} ${styles.li}`}>Безлимитная история запросов</li>
                                    <li className={`${styles.inter_18} ${styles.li}`}>Безопасная сделка</li>
                                    <li className={`${styles.inter_18} ${styles.li}`}>Поддержка 24/7</li>
                                </ul>
                
                                <button className={`${styles.card_button} ${styles.inter_20}`}>Подробнее</button>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MainPage;
