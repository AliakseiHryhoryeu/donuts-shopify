import React, { FC } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'
import ClearFilters from 'src/components/Filters/ClearFilters/ClearFilters'
import ColorFilter from 'src/components/Filters/ColorFilter'
import DefaultFilter from 'src/components/Filters/DefaultFilter'
import TasteFilter from 'src/components/Filters/TasteFilter'

import styles from './catalog.module.scss'
import Products from 'src/components/Products/Products'

export const Catalog: FC = () => {
	return (
		<ContainerMaxWidth>
			<ContainerWrapper className={styles.catalog__container}>
				<div className={styles.catalog__title}>Donuts</div>
				<ContainerWrapper className={styles.catalog__filters__container}>
					<DefaultFilter />
					<TasteFilter />
					<ColorFilter />
					<ClearFilters />
				</ContainerWrapper>
				<Products itemCount={12} />
			</ContainerWrapper>
		</ContainerMaxWidth>
	)
}

export default Catalog
