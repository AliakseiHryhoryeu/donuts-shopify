// Theme JavaScript

// Utility functions
const theme = {
	/**
	 * Format money values based on store currency settings
	 * @param {Number} cents - value in cents
	 * @return {String} value - formatted value
	 */
	formatMoney: function (cents) {
		if (typeof cents === 'string') {
			cents = cents.replace('.', '')
		}

		const value = ''
		const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/
		const formatString = theme.moneyFormat

		function defaultTo(value, defaultValue) {
			return value == null || value !== value ? defaultValue : value
		}

		function formatWithDelimiters(number, precision, thousands, decimal) {
			precision = defaultTo(precision, 2)
			thousands = defaultTo(thousands, ',')
			decimal = defaultTo(decimal, '.')

			if (isNaN(number) || number == null) {
				return 0
			}

			number = (number / 100.0).toFixed(precision)

			const parts = number.split('.')
			const dollars = parts[0].replace(
				/(\d)(?=(\d\d\d)+(?!\d))/g,
				'$1' + thousands
			)
			const cents = parts[1] ? decimal + parts[1] : ''

			return dollars + cents
		}

		switch (formatString.match(placeholderRegex)[1]) {
			case 'amount':
				value = formatWithDelimiters(cents, 2)
				break
			case 'amount_no_decimals':
				value = formatWithDelimiters(cents, 0)
				break
			case 'amount_with_comma_separator':
				value = formatWithDelimiters(cents, 2, '.', ',')
				break
			case 'amount_no_decimals_with_comma_separator':
				value = formatWithDelimiters(cents, 0, '.', ',')
				break
		}

		return formatString.replace(placeholderRegex, value)
	},

	/**
	 * Get viewport width
	 * @return {Number} width
	 */
	getViewportWidth: function () {
		return Math.max(
			document.documentElement.clientWidth,
			window.innerWidth || 0
		)
	},

	/**
	 * Get viewport height
	 * @return {Number} height
	 */
	getViewportHeight: function () {
		return Math.max(
			document.documentElement.clientHeight,
			window.innerHeight || 0
		)
	},

	/**
	 * Check if device is touch-enabled
	 * @return {Boolean}
	 */
	isTouchDevice: function () {
		return (
			'ontouchstart' in window ||
			navigator.maxTouchPoints > 0 ||
			navigator.msMaxTouchPoints > 0
		)
	},
}

// DOM Ready
document.addEventListener('DOMContentLoaded', function () {
	// Add touch class to body if needed
	if (theme.isTouchDevice()) {
		document.body.classList.add('touch-device')
	}

	// Handle skip to content link
	const skipLink = document.querySelector('.skip-to-content-link')
	if (skipLink) {
		skipLink.addEventListener('click', function (event) {
			event.preventDefault()
			const target = document.querySelector(this.getAttribute('href'))
			if (target) {
				target.setAttribute('tabindex', '-1')
				target.focus()
			}
		})
	}
})

// Export theme object
window.theme = theme
