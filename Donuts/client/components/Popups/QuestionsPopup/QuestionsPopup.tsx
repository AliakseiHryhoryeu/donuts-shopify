import { useFormik } from 'formik'
import React, { FC } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'
import CrossIcon from 'src/components/svg/CrossIcon'
import { loginSchema } from 'src/components/validation/LoginValidation'

import styles from './QuestionsPopup.module.scss'

export const QuestionsPopup: FC = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			phone: ''
		},
		validationSchema: loginSchema,
		onSubmit: (values) => {
			// loginRequest({
			// 	email: values.email,
			// 	password: values.password
			// })
		}
	})

	return (
		<ContainerMaxWidth className={styles.questions__container}>
			<ContainerWrapper className={styles.questions__wrapper}>
				<section className={styles.questions__left__container}></section>
				<section className={styles.questions__right__container}>
					<div className={styles.questions__right__wrapper}>
						<div className={styles.questions__right__title}>
							Any other questions?
							<div className={styles.questions__right__close}>
								<CrossIcon />
							</div>
						</div>
						<div className={styles.questions__right__subtitle}>
							Fill out the form and our manager will contact you within 15
							minutes to clarify the details
						</div>
						<form
							className={styles.questions__form__container}
							onSubmit={formik.handleSubmit}
							noValidate
						>
							{formik?.errors && (
								<div className={styles.questions__form__input__error}>
									{formik?.errors.name}
								</div>
							)}
							<input
								className={styles.questions__form__input}
								placeholder='Your name'
								name='name'
								type='text'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.name}
							/>

							{formik?.errors && (
								<div className={styles.questions__form__input__error}>
									{formik?.errors.phone}
								</div>
							)}
							<input
								className={styles.questions__form__input}
								placeholder='Phone number'
								name='phone'
								type='text'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.phone}
							/>
							<button
								type='button'
								onClick={() => {
									formik.handleSubmit()
								}}
								className={styles.questions__form__submitBtn}
							>
								Callback
							</button>
						</form>
					</div>
				</section>
			</ContainerWrapper>
			<div className={styles.questions__bg}></div>
		</ContainerMaxWidth>
	)
}

export default QuestionsPopup
