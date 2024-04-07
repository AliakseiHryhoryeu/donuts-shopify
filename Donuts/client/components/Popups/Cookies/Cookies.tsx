import React from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'
import styles from './cookies.module.scss'

export default function Cookies() {
	return (
		<ContainerMaxWidth className={styles.cookies__container}>
			<ContainerWrapper className={styles.cookies__wrapper}>
				<div className={styles.cookies__img}>
					<img src='static/Cookies/cookies.png' alt='' />
				</div>
				<div className={styles.cookies__text__container}>
					<div className={styles.cookies__text__title}>
						We love cookies! That's why we use them!
					</div>

					<div className={styles.cookies__text__description}>
						We use cookies for proper and effective service delivery. You may
						set the terms of storage or access to cookie in Your browser or
						configuring the service according to the principles of using cookies
						in our privacy policy, where You can also check the terms of
						processing Your personal data.
					</div>
					<div className={styles.cookies__text__buttons}>
						<div className={styles.cookies__text__buttons__disallow}>
							Disallow cookies
						</div>
						<div className={styles.cookies__text__buttons__allow}>
							Yummy, I'm eating it!
						</div>
					</div>
				</div>
			</ContainerWrapper>
		</ContainerMaxWidth>
	)
}
