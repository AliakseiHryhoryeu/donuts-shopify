import React, { FC } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'

import styles from './Contacts.module.scss'

import MapComponent from './MapComponent'

export const Contacts: FC = () => {
	return (
		<ContainerMaxWidth className={styles.contacts__container}>
			<img
				src='static/Contacts/bg_top.svg'
				className={styles.contacts__bg_top}
				alt=''
			/>
			<img
				src='static/Contacts/bg_bottom.svg'
				className={styles.contacts__bg_bottom}
				alt=''
			/>
			<ContainerWrapper className={styles.contacts__wrapper}>
				<div className='contacts'>
					<div className={styles.contacts__text__container}>
						<div className={styles.contacts__text__title}>Opening Times</div>
						<div className={styles.contacts__text__subtitle}>
							<b>MON</b> 9:00 - 20:00
						</div>
						<div className={styles.contacts__text__subtitle}>
							<b>TUE</b> 9:00 - 20:00
						</div>
						<div className={styles.contacts__text__subtitle}>
							<b>WED</b> 9:00 - 20:00
						</div>
						<div className={styles.contacts__text__subtitle}>
							<b>THU</b> 9:00 - 20:00
						</div>
						<div className={styles.contacts__text__subtitle}>
							<b>FRI</b> 9:00 - 20:00
						</div>
						<div className={styles.contacts__text__subtitle}>
							<b>SAT</b> 9:00 - 20:00
						</div>
						<div className={styles.contacts__text__subtitle}>
							<b>SUN</b> 9:00 - 20:00
						</div>
					</div>
					<div className={styles.contacts__text__container}>
						<div className={styles.contacts__text__title}>Address</div>
						<div className={styles.contacts__text__subtitle}>
							324 Main St Carbondale, Pennsylvania(PA), 18407
						</div>
					</div>
					<div className={styles.contacts__text__container}>
						<div className={styles.contacts__text__title}>Phone</div>
						<div className={styles.contacts__text__subtitle}>
							+1 (123) 123-33-44
						</div>
					</div>
					<div className={styles.contacts__text__container}>
						<div className={styles.contacts__text__title}>E-mail</div>
						<div className={styles.contacts__text__subtitle}>
							donuts@gmail.com
						</div>
					</div>
				</div>
				<div className={styles.contacts__map}>
					<MapComponent />
				</div>
			</ContainerWrapper>
		</ContainerMaxWidth>
	)
}

export default Contacts
