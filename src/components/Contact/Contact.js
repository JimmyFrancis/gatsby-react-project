import React from 'react'
import StyledTitle from '../StyledTitle'
import styles from '../../css/contact.module.css'
const Contact = () => {
    return  <section className={styles.contact}>
        <StyledTitle title="contact" subtitle="us"/>
        <div className={styles.center}>
            <form action="https://formspree.io/email@domain.tld"
            method="POST" className={styles.form}>
                <div>
                <label htmlFor="name">name</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className={styles.formControl}
                    placeholder="john smith" />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className={styles.formControl}
                    placeholder="email@email.com" />
                </div>
                <div>
                <label htmlFor="message">message</label>
                    <textarea name="message" id="message" rows="10" className={styles.formControl} placeholder="hello there"/>
                </div>
                <div>
                    <input type="submit" value="submit" className={styles.submit}/>
                </div>
                </form>
        </div>
    </section>

}

export default Contact
