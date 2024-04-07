import React, { FC } from 'react'
import Head from 'next/head'

import styles from 'src/styles/main.module.scss'

const Home: FC = () => (
	<>
		<Head>
			<title>Donuts</title>
		</Head>
		<main className={styles.main}></main>
	</>
)

export default Home
