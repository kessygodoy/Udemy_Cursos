import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime"
import styles from "./styles.module.css"

export function TextArea({...rest}: HtmlProps<HTMLTextAreaElement>) {
    return (
        <textarea className={styles.textarea} {...rest}></textarea>
    )
}