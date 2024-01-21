import styles from "./Footer.module.scss"

const FooterComp = () => {
	const date = new Date()
	return (
		<footer className={styles.footer}>
			<p>© {date.getFullYear()} Company, Inc</p>
			<p>back to top</p>
		</footer>
	)
}

export default FooterComp
