module.exports = {
	siteMetadata: {
		title: `Rishav`,
		description: `My Portfolio and Blog Site`,
		author: `@sttronn`,
		url: `https://raptori.dev`,
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-root-import`,
		`gatsby-plugin-react-helmet`,
		`gatsby-remark-reading-time`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/posts`,
			},
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							backgroundColor: 'transparent',
							maxWidth: 900,
							linkImagesToOriginal: false,
						},
					},
					`gatsby-remark-smartypants`,
				],
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							backgroundColor: 'transparent',
							maxWidth: 900,
							linkImagesToOriginal: false,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Raptori`,
				short_name: `Raptori`,
				start_url: `/`,
				background_color: `#43b9b7`,
				theme_color: `#43b9b7`,
				display: `minimal-ui`,
				icon: `src/images/icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				anonymize: true,
				trackingId: 'UA-140200159-1',
			},
		},
		`gatsby-theme-waves`,
	],
}
