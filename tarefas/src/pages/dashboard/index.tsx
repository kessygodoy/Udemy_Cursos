import Head from "next/head";
import styles from './styles.module.css'

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Meu painel</title>
            </Head>

            <h1>Página Painel</h1>
        </div>
    )
}