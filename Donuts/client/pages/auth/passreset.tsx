import React, { FC } from 'react'
// import { useRouter } from 'next/router'
import Head from 'next/head'
import { useFormik } from 'formik'

import { passResetSchema } from 'src/components/validation/PassResetValidation'
// import { useTypedSelector } from 'src/hooks/useTypedSelector'
// import { RootState } from '../store'

import styles from 'src/styles/auth.module.scss'
import Link from 'next/link'

const PassResetPage: FC = () => {
	// const router = useRouter()
	// const { isAuth } = useTypedSelector((state: RootState) => {
	// 	return {
	// 		isAuth: state.user.isAuth
	// 	}
	// })

	const formik = useFormik({
		initialValues: {
			email: ''
		},
		validationSchema: passResetSchema,
		// onSubmit: (values) => {
		// 	// will be send mail to email
		// }
		onSubmit: (values) => {
			// will be send mail to email
		}
	})
	// useEffect(() => {
	// 	if (isAuth === true) {
	// 		router.push('/')
	// 	}
	// }, [])

	return (
		<>
			<Head>
				<title>DOUGHNUTS - Password Reset</title>
			</Head>
			<div className={styles.auth__container}>
				<div className={styles.auth__wrapper}>
					<div className={styles.auth__header}>
						<Link href='/'>DOUGHNUTS</Link>
					</div>
					<div className={styles.auth__title}>Password Reset</div>
					<div className={styles.auth__subtitle}>
						Enter your <span>DOUGHNUTS email address</span> that you used to
						register.
						<br />
						We&apos;ll send you an email a link to reset your password.
					</div>
					<form
						className={styles.auth__form__container}
						onSubmit={formik.handleSubmit}
						noValidate
					>
						<div className={styles.auth__form__wrapper}>
							<div className={styles.auth__form__input__wrapper}>
								<div className={styles.auth__form__input__title}>
									Email address
								</div>
								{formik?.errors && (
									<div className={styles.auth__form__input__title__error}>
										{formik?.errors.email}
									</div>
								)}
								<input
									className={styles.auth__form__input}
									placeholder='Email address'
									name='email'
									type='text'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
								/>
							</div>
							<button
								type='button'
								onClick={() => {
									formik.handleSubmit()
								}}
								className={styles.auth__form__submitBtn}
							>
								Send
							</button>
							{/* <div className={styles.auth__help__title}>
								If you still need help, contact
								<Link href='/support'>DOUGHNUTS Support</Link>.
							</div> */}
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default PassResetPage
