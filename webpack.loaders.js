var APP = path.resolve(__dirname, 'app');
module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components)/,
		include: APP,
		loaders: ['react-hot', 'babel-loader'],
	},
	{
		test: /\.css$/,
		include: APP,
		loader: 'style-loader!css-loader'
	},
	{
		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		include: APP,
		loader: "file-loader"
	},
	{
		test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		include: APP,
		loader: "url-loader?limit=1000000&mimetype=application/font-woff"
	},
	{
		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		include: APP,
		loader: "url?limit=10000&mimetype=application/octet-stream"
	},
	{
		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		include: APP,
		loader: "url?limit=10000&mimetype=image/svg+xml"
	},
	{
		test: /\.gif/,
		include: APP,
		loader: "url-loader?limit=10000&mimetype=image/gif"
	},
	{
		test: /\.jpg/,
		include: APP,
		loader: "url-loader?limit=10000&mimetype=image/jpg"
	},
	{
		test: /\.png/,
		include: APP,
		loader: "url-loader?limit=10000&mimetype=image/png"
	},{
      test: /\.json$/,
			include: APP,
      loader: 'json-loader'
    }, {
      test: /\.coffee$/,
      exclude: /node_modules/,
			include: APP,
      loader: 'coffee-loader'
    }, {
      test: /\.cjsx$/,
      exclude: /node_modules/,
			include: APP,
      loaders: ['coffee', 'cjsx']
    }, {
      test: /\.less$/,
			include: APP,
      loader: 'style-loader!css-loader!less-loader'
    }
];
