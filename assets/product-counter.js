document.addEventListener('DOMContentLoaded', function () {
	// Добавьте обработчик событий для общих кнопок плюс и минус
	document.querySelectorAll('.counter-plus-btn').forEach(function (button) {
		button.addEventListener('click', function () {
			var countEl = this.previousElementSibling
			var count = parseInt(countEl.textContent)
			countEl.textContent = count + 1
		})
	})

	document.querySelectorAll('.counter-minus-btn').forEach(function (button) {
		button.addEventListener('click', function () {
			var countEl = this.nextElementSibling
			var count = parseInt(countEl.textContent)
			if (count > 1) {
				countEl.textContent = count - 1
			}
		})
	})
})
