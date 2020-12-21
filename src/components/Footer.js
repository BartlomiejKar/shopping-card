import React from 'react';

import styles from "../css/footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.container_footer}>
            <div className={styles.h3_footer}>
                <h3 className={styles.h3}>Znajdź nasze sklepy </h3>
                <h3 className={styles.h3}>Zapisz się do newslettera</h3>
            </div>
            <div className={styles.footer_contacts}>
                <div className={styles.contacts}>
                    <h4>informacje</h4>
                    <ul className={styles.contacts_ul}>
                        <li className={styles.contacts_li}>Regulamin</li>
                        <li className={styles.contacts_li}>Kariera</li>
                        <li className={styles.contacts_li}>Polityka prywatności</li>
                        <li className={styles.contacts_li}>Historia Marki</li>
                        <li className={styles.contacts_li}>Pomoc</li>
                    </ul>
                </div>
                <div className={styles.contacts}>
                    <h4> płatność i dostawa</h4>

                    <p className={styles.contacts_delivery}>formy płatności</p>
                    <p>Karta płatnicza, przelew online, przelew tradycyjny, płatność przy odbiorze.</p>
                    <p className={styles.contacts_delivery}>Metody płatności</p>
                    <p>Przesyłki wysyłamy firmą InPost Paczkomat. Zawartość paczki jest ubezpieczona na pełną kwotę.</p>
                    <p className={styles.contacts_delivery}>Koszty dostawy:</p>
                    <p>InPost Paczkomat: 10 zł</p>
                </div>
                <div className={styles.contacts}>
                    <h4>Kontakt</h4>
                    <span>+48 123 456 789</span>
                    <p>Pn - Pt od 8:00 do 18:00</p>
                </div>
            </div>
            <div className={styles.footer_copyright}>
                <p>Bartłomiej Karelus</p>
            </div>
        </footer>

    )
}

export default Footer;