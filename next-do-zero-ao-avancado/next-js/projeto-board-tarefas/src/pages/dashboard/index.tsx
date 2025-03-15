import Head from "next/head";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from './styles.module.css'
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { TextArea } from "@/components/textarea";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

export default function Dashboard() {
    const [input, setInput] = useState("");
    const [publicTask, setPublicTask] = useState(false);

   function handleChangePublic(e: ChangeEvent<HTMLInputElement>){
    console.log(e.target.checked)
    setPublicTask(e.target.checked)
} 
    function handleRegisterTask(ev: FormEvent){
        ev.preventDefault();

        if(input === ""){
            alert("Digite a sua tarefa")
            return;
        }

        alert("Tarefa registrada com sucesso!")
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Meu painel</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qua sua tarefa?</h1>
                        <form onSubmit={handleRegisterTask}>
                            <TextArea placeholder="Digite sua tarefa..." 
                            value={input}
                            onChange={(e:ChangeEvent<HTMLTextAreaElement>) => 
                                setInput(e.target.value)}
                            />
                            <div className={styles.checkboxArea}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={publicTask}
                                    onChange={handleChangePublic}
                                />
                                <label htmlFor="">Deixar tarefa publica?</label>
                            </div>

                            <button className={styles.button}>
                                Registrar
                            </button>
                        </form>
                    </div>
                </section>

                <section className={styles.taskContainer}>
                    <h1>Minhas tarefas</h1>

                    <article className={styles.task}>
                        <div className={styles.tagContainer}>
                            <label className={styles.tag} htmlFor="">Publico</label>
                            <button className={styles.shareButton}>
                                <FiShare2 size={22} color="#3183ff" />
                            </button>
                        </div>
                        <div className={styles.taskContent}>
                            <p>Estudar NextJS</p>
                            <button className={styles.trashButton}><FaTrash size={24} color="#ea3140" /></button>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req })

    if (!session?.user) {
        //Se nao tem usuario redireciona para a pagina de login
        return {
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