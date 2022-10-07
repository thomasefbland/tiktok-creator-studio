import { NextPage } from "next";
import Head from "next/head";
import Button from "../components/common/Button";
import styles from '../styles/Contact.module.scss';

const Contact: NextPage = () => {
    return (
        <>
            <Head>
                <title>Contact / Creator Studio for TikTok</title>
            </Head>
            <main>
                <div className={styles.contact_form_container}>
                    <div className={styles.contact_form_header}>
                        <h2>Contact Us</h2>
                    </div>
                    <form>
                        <label htmlFor="">Full Name</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">Email Address</label>
                        <input type="email" name="" id="" />
                        <label htmlFor="">Subject</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">Category</label>
                        <select>
                            <option value="">General Question</option>
                            <option value="">Report A Bug</option>
                        </select>
                        <label htmlFor="">Message</label>
                        <textarea name="" id="" cols={30} rows={10}></textarea>
                    </form>
                    <Button>Submit</Button>
                </div>
            </main></>
    )
}

export default Contact;