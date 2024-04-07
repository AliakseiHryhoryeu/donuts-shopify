import React, { FC } from 'react'
import Head from 'next/head'

import styles from '../styles/main.module.scss'
import Contacts from 'src/components/sections/Contacts/Contacts'

const CatalogPage: FC = () => (
	<>
		<Head>
			<title>Donuts</title>
		</Head>
		<main className={styles.main}>
			<Contacts />
		</main>
	</>
)

export default CatalogPage
