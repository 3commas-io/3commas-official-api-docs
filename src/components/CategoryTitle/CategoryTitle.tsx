import styles from './CategoryTitle.module.css'

interface ICategoryTitle {
    title: string
}

export function CategoryTitle({title}:ICategoryTitle) {
    return <p className={styles.categoryTitle}>{title}</p>
}