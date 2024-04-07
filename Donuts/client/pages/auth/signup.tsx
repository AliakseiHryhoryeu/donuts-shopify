import React, { FC } from 'react'
import { useFormik } from 'formik'
import Head from 'next/head'
import Link from 'next/link'

// import { UserActions } from 'app/store/actions'
// import { RootState } from 'app/store/reducers'
import { signUpSchema } from '../../components/validation/SignupValidation'

// import { useTypedSelector } from '../hooks/useTypedSelector'
// import { RootState } from '../store'
// import { useRouter } from 'next/router'
import { useSignupMutation } from '../../store/user/user.api'
import { FacebookIcon } from 'src/components/svg/FacebookIcon'
import { GoogleIcon } from 'src/components/svg/GoogleIcon'
import { WarningIcon } from 'src/components/svg/WarningIcon'

import styles from 'src/styles/auth.module.scss'

const SignUpPage: FC = () => {
	// const [loginRequest, { isLoading: isLoading }] = useSignupMutation()
	const [loginRequest] = useSignupMutation()
	// const { isAuth } = useTypedSelector((state: RootState) => {
	// 	return {
	// 		isAuth: state.user.isAuth,
	// 	}
	// })
	// const router = useRouter()

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			confirmPassword: '',
			username: '',
			emailSpam: true,
			rights: true
		},
		validationSchema: signUpSchema,
		onSubmit: (values) => {
			loginRequest({
				email: values.email,
				username: values.username,
				password: values.password
			})
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
				<title>DOUGHNUTS - Sign up</title>
			</Head>
			<div className={styles.auth__container}>
				<div className={styles.auth__wrapper}>
					<div className={styles.auth__header}>
						<Link href='/'>DOUGHNUTS</Link>
					</div>
					<div className={styles.auth__title}>Sign up page.</div>

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
								Sign up with your email address
							</div>

							<div className={styles.auth__form__input__wrapper}>
								<div className={styles.auth__form__input__title}>
									What&apos;s your email?
								</div>
								{formik?.errors && (
									<div className={styles.auth__form__input__title__error}>
										{formik?.errors.email}
									</div>
								)}
								<input
									className={styles.auth__form__input}
									placeholder='Enter your email.'
									name='email'
									type='text'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
								/>
							</div>
							<div className={styles.auth__form__input__wrapper}>
								<div className={styles.auth__form__input__title}>
									Create a password
								</div>
								{formik?.errors && (
									<div className={styles.auth__form__input__title__error}>
										{formik?.errors.password}
									</div>
								)}
								<input
									className={styles.auth__form__input}
									placeholder='Create a password.'
									name='password'
									type='password'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
								/>
							</div>
							<div className={styles.auth__form__input__wrapper}>
								<div className={styles.auth__form__input__title}>
									Confirm your password
								</div>
								{formik?.errors && (
									<div className={styles.auth__form__input__title__error}>
										{formik?.errors.password}
									</div>
								)}
								<input
									className={styles.auth__form__input}
									placeholder='Enter your password again.'
									name='confirmPassword'
									type='password'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.confirmPassword}
								/>
							</div>

							{/* Вот тут, в поле ниже, должен быть код доступа к регистрации */}
							<div className={styles.auth__form__input__wrapper}>
								<div className={styles.auth__form__input__title}>
									One-time secret password for access to admin panel
								</div>
								{formik?.errors && (
									<div className={styles.auth__form__input__title__error}>
										{formik?.errors.username}
									</div>
								)}
								<input
									className={styles.auth__form__input}
									placeholder='Secret password'
									name='username'
									type='text'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.username}
								/>
							</div>
							{/* <div
							className={styles.auth__form_checkbox}
							onClick={() => {
								formik.setFieldValue('emailSpam', !formik.values.emailSpam)
							}}
						>
							<input
								className={styles.auth__form_check}
								name='emailSpam'
								type='checkbox'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								checked={formik.values.emailSpam}
							/>
							<div className={styles.auth__form_title}>
								I would prefer not to receive marketing messages from DOUGHNUTS
							</div>
						</div> */}
							<div className={styles.auth__form__checkbox__container}>
								<div className={styles.auth__form__checkbox__input}>
									<input
										name='rights'
										type='checkbox'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										checked={formik.values.rights}
										onClick={() => {
											formik.setFieldValue('rights', !formik.values.rights)
											console.log(formik.values.rights)
										}}
									/>
									<div className={styles.auth__form__checkbox__title}>
										I agree to the{' '}
										<span> DOUGHNUTS Terms and Conditions of Use</span> and{' '}
										<span> Privacy Policy.</span>
									</div>
								</div>
							</div>
							<div className={styles.auth__form__warning}>
								<WarningIcon />
								<div className={styles.auth__form__warning__title}>
									Please accept the terms and conditions to continue.
								</div>
							</div>

							<button
								type='button'
								onClick={() => {
									formik.handleSubmit()
								}}
								className={styles.auth__form__submitBtn}
								style={{ marginBottom: '30px', marginTop: '30px' }}
							>
								Sign up
							</button>

							<div className={styles.auth__secondaryAction__login}>
								Have an account? <Link href='/auth/login'>Log in</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default SignUpPage
