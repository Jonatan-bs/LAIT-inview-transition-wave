export default {
	target: "static",

	/*
	 ** dot env properties
	 */
	env: {},
	publicRuntimeConfig: {
		BASE_URL: process.env.BASE_URL || "http://localhost:3000",
		ROBOTS: process.env.ROBOTS || "false",
		LOCALE: process.env.LOCALE,
	},

	/*
	 ** SSR
	 */
	ssr: process.env.SERVER_RENDER === "true",

	/*
	 ** For private runtime keys
	 */
	privateRuntimeConfig: {},

	/*
	 ** Default head settings
	 */
	head: {
		title: "project-name",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	/*
	 ** Site styling load
	 */
	css: ["@/assets/styles/site.scss"],

	/*
	 ** create router structure
	 */
	router: {
		trailingSlash: true,
	},

	/*
	 ** When generate runs
	 */
	generate: {
		cache: false,
		interval: 100,
		fallback: true,
		trailingSlash: true,
		crawler: false,
		exclude: [],
		routes: "",
	},

	/*
	 ** custom plugins options
	 */
	plugins: ["~/plugins/charAnimation.client.ts"],

	/*
	 ** Auto import of components
	 */
	components: [
		{ path: "~/components", extensions: ["vue"], pathPrefix: false },
	],

	/*
	 ** modules & buildModules
	 */
	buildModules: [
		"nuxt-purgecss",
		"@nuxt/typescript-build",
		"nuxt-font-loader",
	],
	modules: [
		"@nuxtjs/svg",
		"@nuxtjs/robots",
		"nuxt-compress",
		"@nuxtjs/sitemap",
	],
	"nuxt-compress": {
		gzip: {
			cache: true,
		},
		brotli: {
			threshold: 10240,
		},
	},

	/*
	 ** Extends
	 */
	extends: ["@nuxtjs/eslint-config-typescript"],

	/*
	 ** Customize the progress-bar color
	 */
	loading: false,

	/*
	 ** add robots.txt to applikation
	 */
	robots: {
		UserAgent: "*",
		Disallow: process.env.ROBOTS === "false" ? "/" : "",
		sitemap: process.env.BASE_URL + "/sitemap.xml",
	},

	/*
	 ** sitemap settings
	 */
	sitemap: {
		hostname: process.env.BASE_URL || "http://localhost:3000",
		exclude: [],
		trailingSlash: true,
		priority: 1,
		path: "/sitemap.xml",
		gzip: true,
		generate: false,
	},

	/*
	 ** Stylelint config options
	 */
	stylelint: {
		configFile: "stylelint.config.js",
		files: [
			"assets/styles/**/*.{s?(a|c)ss,less,stylus}",
			"{components,layouts,pages}/**/*.{s?(a|c)ss,less,stylus}",
		],
		fix: false,
	},

	/*
	 ** purgecss settings
	 */
	purgeCSS: {
		whitelist: [],
		whitelistPatterns: [
			/__layout/,
			/__nuxt/,
			/is/,
			//...etc
		],
	},

	/*
	 ** build settings.
	 */
	// build: {
	// 	cssSourceMap: process.env.NODE_ENV === "Development",
	// 	// build performance
	// 	minimize: true,
	// 	optimization: {
	// 		splitChunks: {
	// 			chunks: "async",
	// 			minSize: 20000,
	// 			minChunks: 1,
	// 			maxAsyncRequests: 30,
	// 			maxInitialRequests: 30,
	// 			enforceSizeThreshold: 50000,
	// 			cacheGroups: {
	// 				styles: {
	// 					name: "styles",
	// 					test: /\.(css|vue)$/,
	// 					chunks: "all",
	// 					enforce: true,
	// 				},
	// 			},
	// 		},
	// 	},
	// },

	/*
	 ** Font loader
	 */
	fontLoader: {
		url: "https://use.typekit.net/", // typekit url
		prefetch: true,
		preconnect: true,
	},
	loaders: {
		ts: {
			silent: true,
		},
	},
};
