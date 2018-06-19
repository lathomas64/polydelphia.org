module.exports = {
  siteMetadata: {
    title: 'Polydelphia'
  },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: process.env.NODE_ENV === 'development' ?
                {
                    host: 'preview.contentful.com',
                    spaceId: 'a8e5k0ojvr4s',
                    accessToken: '4e9ae2f88a89c54dae480c56661ff82d08f5e502b10f04c04c3c73c57adabf1a'
                } : {
                    spaceId: 'a8e5k0ojvr4s',
                    accessToken: 'd3b6ef5641dcf42dba128096cae813e8088234e282355382f3eb214762e5d460'
                }
        }
    ]
};
