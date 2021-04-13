const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');

const Sitemap = configureSitemap({
    baseUrl: 'https://sny.nu',
    exclude: [
        '[url]/*',
        'error/*'
    ],
    excludeIndex: true,
    isTrailingSlashRequired: true,
    targetDirectory: __dirname + '/public',
    pagesDirectory: __dirname + '/pages',
});

Sitemap.generateSitemap();
