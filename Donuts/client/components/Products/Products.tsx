import React, { FC } from 'react'
import ContainerWrapper from '../ContainerWrapper'
import Product from './Product/Product'
import styles from './products.module.scss'

interface IProductsProps {
	itemCount: number
}
export const Products: FC<IProductsProps> = ({ itemCount }) => {
	const render = () => {
		const renderComponent = []
		for (let i = 0; i < itemCount; i++) {
			renderComponent.push(i)
		}
		return renderComponent
	}

	return (
		<ContainerWrapper className={styles.products__wrapper}>
			{itemCount && render().map((itemKey) => <Product key={itemKey} />)}
		</ContainerWrapper>
	)
}

export default Products
