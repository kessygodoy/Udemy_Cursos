import Head from "next/head";
import styles from './styles.module.css'
import { GetServerSideProps } from "next";
import { console } from "inspector";

import { getSession } from "next-auth/react";
import { TextArea } from "@/components/textarea";

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Meu painel</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qua sua tarefa?</h1>
                        <form action="">
                            <TextArea placeholder="Digite sua tarefa..." />
                            <div className={styles.checkboxArea}>
                                <input 
                                    type="checkbox"
                                    className={styles.checkbox}
                                />
                                <label htmlFor="">Deixar tarefa publica?</label>
                            </div>

                            <button className={styles.button}>
                                Registrar
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req })
   
    if(!session?.user){
        //Se nao tem usuario redireciona para a pagina de login
        return{
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    return {
        props: {},
    }
}