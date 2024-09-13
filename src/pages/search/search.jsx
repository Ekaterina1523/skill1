import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

import styles from './search.module.css';
import rocket from '../../img/rocket.svg';
import document from '../../img/Document.png';
import folders from '../../img/Folders.png';

const SearchPage = () => {
    
    return (
        <>
            <Header />
            <div className="container">
                <div className={styles.search_holder}>
                    <div className={styles.head}>
                        <h1 className={styles.h1}>Найдите необходимые <br /> данные в пару кликов.</h1>
                        <p className={styles.subtitle}>Задайте параметры поиска. <br /> Чем больше заполните, тем точнее поиск</p>
                        <img className="document" src={document} />
                        <img className="folders" src={folders} />
                    </div>
                    <form className={styles.search}>
                        <div className={styles.left_inputs}>
                            <label className={styles.label}>
                                <p className={styles.text}>ИНН компании*</p>
                                <input className={styles.input} type="text" placeholder="10 цифр" maxlength="10" required />
                            </label>
                            <label className={styles.label}>
                                <p className={styles.text}>Тональность</p>
                                <select className={styles.select}>
                                    <option value="positive">позитивная</option>
                                    <option value="negative">негативная</option>
                                    <option value="random">любая</option>
                                </select>
                            </label>
                            <label className={styles.label}>
                                <p className={styles.text}>Количество документов в выдаче*</p>
                                <input className={styles.input} type="number" placeholder="от 1 до 1000" max="1000" min="0" required />
                            </label>
                            <div className={styles.labels}>
                                <p className={styles.labels_text}>Диапазон поиска*</p>
                                <select className={styles.select} name="beginning" required>
                                    <option value="">Дата начала</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                                <select className={styles.select} name="exit" id="" required >
                                    <option value="">Дата конца</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.right_inputs}>
                            <div className={styles.checkboxes}>
                                <label className={styles.checkbox_label}>
                                    <input className={styles.checkbox_label_input} type="checkbox" />
                                    <p className={styles.checkbox_label_text}>Признак максимальной полноты</p>
                                </label>
                                <label className={styles.checkbox_label}>
                                    <input className={styles.checkbox_label_input} type="checkbox" />
                                    <p className={styles.checkbox_label_text}>Упоминания в бизнес-контексте</p>
                                </label>
                                <label className={styles.checkbox_label}>
                                    <input className={styles.checkbox_label_input} type="checkbox" />
                                    <p className={styles.checkbox_label_text}>Главная роль в публикации</p>
                                </label>
                                <label className={styles.checkbox_label}>
                                    <input className={styles.checkbox_label_input} type="checkbox" />
                                    <p className={styles.checkbox_label_text}>Публикации только с риск-факторами</p>
                                </label>
                                <label className={styles.checkbox_label}>
                                    <input className={styles.checkbox_label_input} type="checkbox" />
                                    <p className={styles.checkbox_label_text}>Включать технические новости рынков</p>
                                </label>
                                <label className={styles.checkbox_label}>
                                    <input className={styles.checkbox_label_input} type="checkbox" />
                                    <p className={styles.checkbox_label_text}>Включать анонсы и календари</p>
                                </label>
                                <label className={styles.checkbox_label}>
                                    <input className={styles.checkbox_label_input} type="checkbox" />
                                    <p className={styles.checkbox_label_text}>Включать сводки новостей</p>
                                </label>
                            </div>
                            <div className={styles.submit_block}>
                                <a href="" className="button">Поиск</a>
                                <p>* Обязательные к заполнению поля</p>
                            </div>
                        </div>
                    </form>
                    <img className={styles.image} src={rocket} alt="" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SearchPage;
