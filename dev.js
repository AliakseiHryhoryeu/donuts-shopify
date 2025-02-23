require('dotenv').config()
const { execSync } = require('child_process')

try {
	execSync(
		'shopify theme dev --store=aliaksei1.myshopify.com --theme-editor-sync',
		{ stdio: 'inherit' }
	)
} catch (error) {
	console.error('Error:', error)
}
