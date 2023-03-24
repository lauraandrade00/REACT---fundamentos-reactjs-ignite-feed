import styles from './Post.module.css'
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/lauraandrade00.png" />
                    <div className={styles.authorInfo}>
                        <strong>Laura Andrade</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='22 de março às 17:34h'dateTime='2023-03-22 17:34:21'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.</p>
                <p><a href="">laura.design/doctorcare</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p> 
            </div>
        </article>
    );
}