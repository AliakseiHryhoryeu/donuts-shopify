class InfiniteScroll {
	constructor(element, speed = 2) {
		// Cache DOM queries and bind methods
		this.element = element
		this.speed = speed
		this.animate = this.animate.bind(this)

		// Start initialization
		this.init()
	}

	init() {
		const container = this.element.querySelector('.divider__content')
		const contentWidth = container.offsetWidth
		const screenWidth = window.innerWidth
		const copies = Math.ceil(screenWidth / contentWidth) + 1

		// Create optimized wrapper
		const wrapper = document.createElement('div')
		wrapper.style.cssText = `
			position: absolute;
			display: flex;
			transform: translate3d(0, 0, 0);
			backface-visibility: hidden;
			perspective: 1000px;
		`

		// Use fragment for batch DOM update
		const fragment = document.createDocumentFragment()
		for (let i = 0; i < copies; i++) {
			fragment.appendChild(container.cloneNode(true))
		}
		wrapper.appendChild(fragment)

		// Single DOM operation
		container.remove()
		this.element.appendChild(wrapper)

		// Cache properties
		this.wrapper = wrapper
		this.contentWidth = contentWidth
		this.position = 0

		// Start animation loop
		requestAnimationFrame(this.animate)
	}

	animate() {
		this.position = (this.position - this.speed) % this.contentWidth
		this.wrapper.style.transform = `translate3d(${this.position}px, 0, 0)`
		requestAnimationFrame(this.animate)
	}
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	requestAnimationFrame(() => {
		const dividers = document.querySelectorAll('.divider')
		dividers.forEach((divider) => new InfiniteScroll(divider, 1))
	})
})
