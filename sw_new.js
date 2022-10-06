// importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
importScripts('/buy/plpetc/_next/static/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.setConfig({
        debug: false
    });

    workbox.routing.registerRoute(
        new RegExp('./ui/global_all_cms_globalnav/web-components/2.0/preRender/(consumer|smb)/.*\.js$'),
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'PLP-GN-cache',
            cacheableResponse: {
                statuses: [0, 200], // Make sure 0 is included in this list.
            },
            plugins: [
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 10080, // 1 week in minutes
                })
            ]
        })
    );

    setTimeout(() => {
        console.log('\'n Invokes cache -1 ');
        workbox.routing.registerRoute(
            new RegExp('.*\.png$'),
            new workbox.strategies.CacheFirst({
                cacheName: 'quicklink-cache',
                cacheableResponse: {
                    statuses: [0, 200], // Make sure 0 is included in this list.
                },
                plugins: [
                    new workbox.expiration.Plugin({
                        maxAgeSeconds: 300, // 5 minutes
                    })
                ]
            })
        );
    }, 15000);

   
    setTimeout(() => {
        console.log('\'n Invokes cache -2' );

        workbox.routing.registerRoute(
            new RegExp('.*\/buy\/phones\/$|.*\/buy\/prepaid-phones\/$|.*\/buy\/tablets\/$|.*\/buy\/wearables\/$|.*\/buy\/connected-devices-and-more\/$|.*\/buy\/.*browse.*|.*\/buy\/accessories\/|.*services.att.com\/search\/.*'),
            new workbox.strategies.StaleWhileRevalidate({
                cacheName: 'quicklink-cache',
                cacheableResponse: {
                    statuses: [0, 200], // Make sure 0 is included in this list.
                },
                plugins: [
                    new workbox.expiration.Plugin({
                        maxAgeSeconds: 120, // 2 minutes
                    })
                ]
            })
        );
    }, 15000);
    

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}