import styles from "./ItemListContainer.module.css"


export const ItemListContainer = ({message}) => {
  return (
    <>
    <div className={`container ${styles.Container}`}>
        <img className={styles.ImgGif} src="/beer.gif" alt="beer" />
        {message}
    </div>
    </>
  )
}