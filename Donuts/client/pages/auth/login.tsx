import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import { useFormik } from 'formik'

import { loginSchema } from 'src/components/validation/LoginValidation'
// import { FacebookIcon } from 'src/components/svg/FacebookIcon'
// import { GoogleIcon } from 'src/components/svg/GoogleIcon'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { useLoginMutation } from 'src/store/user/user.api'
import { RootState } from 'src/store'

import { FacebookIcon } from 'src/components/svg/FacebookIcon'
import { GoogleIcon } from 'src/components/svg/GoogleIcon'

import styles from 'src/styles/auth.module.scss'

const LoginPage: FC = () => {
	const router = useRouter()
	const [loginRequest, { isLoading: isLoading }] = useLoginMutation()

	const { isAuth } = useTypedSelector((state: RootState) => {
		return {
			isAuth: state.user.isAuth
		}
	})

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			remember: true
		},
		validationSchema: loginSchema,
		onSubmit: (values) => {
			loginRequest({
				email: values.email,
				password: values.password
			})
		}
	})
	// if (isAuth === true) {
	// 	router.push('/')
	// }
	useEffect(() => {
		if (isAuth == true) {
			router.push('/')
		}
	}, [isAuth])
	return (
		<>
			<Head>
				<title>DOUGHNUTS - Login page</title>
			</Head>
			<div className={styles.auth__container}>
				<div className={styles.auth__wrapper}>
					<div className={styles.auth__header}>
						<Link href='/'>DOUGHNUTS</Link>
					</div>
					<div className={styles.auth__title}>Login page.</div>

					<form
						className={styles.auth__form__container}
						onSubmit={formik.handleSubmit}
						noValidate
					>
						<div className={styles.auth__form__wrapper}>
							<div className={styles.auth__form__social__wrapper}>
								<div
									className={`${styles.auth__form__social__btn} ${styles.auth__form__social__facebook}`}
								>
									<FacebookIcon />
									Continue with facebook
								</div>
								<div
									className={`${styles.auth__form__social__btn} ${styles.auth__form__social__google}`}
								>
									<GoogleIcon />
									Continue with google
								</div>
							</div>
							<div className={styles.auth__form__divider}>
								<span>or</span>
							</div>

							<div className={styles.auth__form__title}>
								Login with your email address
							</div>
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
									placeholder='Email address.'
									name='email'
									type='text'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
								/>
							</div>
							<div className={styles.auth__form__input__wrapper}>
								<div className={styles.auth__form__input__title}>Password</div>
								{formik?.errors && (
									<div className={styles.auth__form__input__title__error}>
										{formik?.errors.password}
									</div>
								)}
								<input
									className={styles.auth__form__input}
									placeholder='Password.'
									name='password'
									type='password'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
								/>
								<div className={styles.auth__form__input__subtitle}>
									<Link href='/auth/passreset'>Forgot your password?</Link>
								</div>
							</div>
							<div className={styles.auth__form__checkbox__container}>
								<div className={styles.auth__form__checkbox__input}>
									<input
										name='remember'
										type='checkbox'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										checked={formik.values.remember}
									/>
									<div className={styles.auth__form__checkbox__title}>
										Remember me
									</div>
								</div>
								<button
									type='button'
									onClick={() => {
										formik.handleSubmit()
									}}
									className={styles.auth__form__submitBtn}
								>
									log in
								</button>
							</div>
							<a
								className={styles.auth__secondaryAction__secondaryBtn}
								href='/auth/signup'
							>
								Don’t have an account?
							</a>

							<a
								className={styles.auth__secondaryAction__primaryBtn}
								href='/auth/signup'
							>
								Sign up
							</a>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default LoginPage
