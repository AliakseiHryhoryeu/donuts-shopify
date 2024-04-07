import { FC, ReactNode, useEffect } from 'react'
import { useActions } from 'src/hooks/useActions'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'
import { useAuthMutation } from 'src/store/user/user.api'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Cookies from '../Popups/Cookies/Cookies'
import QuestionsPopup from '../Popups/QuestionsPopup/QuestionsPopup'

// import { Header } from 'src/components/'

interface ILayoutProps {
	children: ReactNode
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
	const [authRequest, { isLoading: isLoading }] = useAuthMutation()

	const { bagPopup, headerPopup, questionsPopup } = useTypedSelector(
		(state: RootState) => {
			return {
				bagPopup: state.popups.bagPopup,
				headerPopup: state.popups.headerPopup,
				questionsPopup: state.popups.questionsPopup
			}
		}
	)

	const allActions = useActions()
	useEffect(() => {
		allActions.updateToken()
		authRequest({})
	}, [])

	return (
		<>
			<Header />
			{children}
			<Footer />
			{/* {questionsPopup && <QuestionsPopup />} */}
			{/* <Cookies /> */}
		</>
	)
}
