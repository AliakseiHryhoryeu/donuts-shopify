import React, { FC } from 'react'
import Head from 'next/head'

import stylesBag from '../styles/bag.module.scss'
import stylesMain from '../styles/main.module.scss'

import CrossIcon from 'src/components/svg/CrossIcon'
import ContainerWrapper from 'src/components/ContainerWrapper'
import Products from 'src/components/Products/Products'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'

const BagPage: FC = () => (
	<>
		<Head>
			<title>Donuts</title>
		</Head>
		<ContainerMaxWidth className={stylesMain.main}>
			<ContainerMaxWidth>
				<ContainerWrapper className={stylesBag.bag__wrapper}>
					<div className={stylesBag.bag__header}>
						<div className={stylesBag.bag__title}>Your bag</div>
						<div className={stylesBag.bag__crossIcon}>
							<CrossIcon />
						</div>
					</div>
					<ContainerWrapper className={stylesBag.bag__products__wrapper}>
						<Products itemCount={12} />
					</ContainerWrapper>
					<ContainerWrapper className={stylesBag.bag__total__wrapper}>
						<div className={stylesBag.bag__total__price}>
							Total cost: 52.85$
						</div>
						<div className={stylesBag.bag__total__submitBtn}>Checkout</div>
					</ContainerWrapper>
				</ContainerWrapper>
			</ContainerMaxWidth>
		</ContainerMaxWidth>
	</>
)

export default BagPage
