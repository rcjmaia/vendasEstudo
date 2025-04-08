import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>Topo da Página</header>
      <aside className={styles.menu}>Menu lateral</aside>
      <main className={styles.content}>
        <h2>Conteúdo Principal</h2>
        <p>Aqui vai o conteúdo do site.</p>
      </main>
      <footer className={styles.footer}>Rodapé</footer>
    </div>
  );
}