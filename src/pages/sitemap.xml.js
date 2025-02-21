import axios from 'axios';

function generateSitemap(urls) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('')}
</urlset>`;
}

function escapeXml(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function createURL(loc, changefreq, priority, lastmod = new Date().toISOString()) {
    return `<url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <changefreq>${escapeXml(changefreq)}</changefreq>
    <priority>${escapeXml(priority.toString())}</priority>
  </url>`;
}

export async function getServerSideProps({ res }) {
    const api = 'https://www.swabilaundry.ae/api';
    const urls = [];

    try {
        const [blogs, blogcategories, services,locations] = await Promise.all([
           
            axios.get(`${api}/blog`).catch(() => null),
            axios.get(`${api}/blogcategory`).catch(() => null),
            // axios.get(`${api}/offers`).catch(() => null),
            axios.get(`${api}/subcategories`).catch(() => null),
            axios.get(`${api}/locations`).catch(() => null),
     
        ]);

        if (blogs?.data) {
            blogs.data.forEach(blog =>
                urls.push(createURL(`https://www.swabilaundry.ae/pages/blog/${blog.web_slug}`, 'always', '0.6', blog.updatedAt))
            );
        }
        if (blogcategories?.data) {
            blogcategories.data.forEach(blogcategory =>
                urls.push(createURL(`https://www.swabilaundry.ae/pages/blogcategories/${blogcategory.web_slug}`, 'always', '0.6', blogcategory.updatedAt))
            );
        }
      
        
        if (services?.data) {
            services.data.forEach(service =>
                urls.push(createURL(`https://www.swabilaundry.ae/pages/services/${service.slug}`, 'always', '0.5'))
            );
        }
       

        if (locations?.data) {
            locations.data.forEach(location =>
                urls.push(createURL(`https://www.swabilaundry.ae/pages/locations/${location.slug}`, 'always', '0.5'))
            );
        }
        // Add static URLs
        urls.push(createURL('https:///www.swabilaundry.ae/', 'daily', '1.0'));
        urls.push(createURL('https:///www.swabilaundry.ae/pages/aboutus', 'always', '0.8'));
        urls.push(createURL('https:///www.swabilaundry.ae/pages/homepage', 'always', '0.8'));
        urls.push(createURL('https:///www.swabilaundry.ae/pages/businesspage', 'always', '0.8'));
        urls.push(createURL('https:///www.swabilaundry.ae/pages/contactus', 'always', '0.8'));
        urls.push(createURL('https:///www.swabilaundry.ae/pages/privacypolicy', 'always', '0.8'));
        urls.push(createURL('https:///www.swabilaundry.ae/pages/termsandconditions', 'always', '0.8'));
        urls.push(createURL('https:///www.swabilaundry.ae/pages/privacypolicy', 'always', '0.8'));
        urls.push(createURL('https:///www.swabilaundry.ae/pages/faq', 'always', '0.8'));
        urls.push(createURL('https:///www.swabilaundry.ae/pages/offers', 'always', '0.8'));
        urls.push(createURL('https:///www.swabilaundry.ae/pages/pricing', 'always', '0.8'));

        const sitemap = generateSitemap(urls);

        res.setHeader('Content-Type', 'text/xml');
        res.write(sitemap);
        res.end();
    } catch (error) {
        console.error('Error generating sitemap:', error);
        res.statusCode = 500;
        res.end();
    }

    return {
        props: {},
    };
}

export default function Sitemap() {
    return null;
}
