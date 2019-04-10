export default function html(options) {
  const { app = "main", markup, helmet } = options;

  return `
    <!doctype html>
            <html lang = "en" >
                <head>
                    ${helmet.title.toString()}
                    ${helmet.meta.toString()}
                    <script>
                        (function(i, s, o, g, r, a, m) {
                            i['GoogleAnalyticsObject'] = r;
                        i[r] = i[r] || function() {
                            (i[r].q = i[r].q || []).push(arguments)
                        }, i[r].l = 1 * new Date();
                        a = s.createElement(o),
                            m = s.getElementsByTagName(o)[0];
                        a.async = 1;
                        a.src = g;
                        m.parentNode.insertBefore(a, m)
                        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
                    
                        ga('create', 'UA-104321314-1', 'auto');
                        ga('send', 'pageview');
                    </script>
                </head>
                <body class="theme--boxed scroll-assist " data-reveal-selectors="section:not(.masonry):not(:first-of-type):not(.parallax)">
                    <div id="root">${markup}</div>
                    <script src="/app/${app}.bundle.js"</script>
                    <script src="js/jquery-2.1.4.min.js"></script>
                    <script src="js/isotope.min.js"></script>
                    <script src="js/scrollreveal.min.js"></script>
                    <script src="js/parallax.js"></script>
                    <script src="js/scripts.js"></script>
                </body>
                </html>
  `;
}
