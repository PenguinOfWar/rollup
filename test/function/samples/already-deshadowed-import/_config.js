module.exports = {
	description: 'handle already module import names correctly if they are have already been deshadowed',
	warnings: [
		{
			code: 'CIRCULAR_DEPENDENCY',
			importer: 'bob.js',
			message: 'Circular dependency: bob.js -> alice.js -> bob.js'
		}
	]
};
