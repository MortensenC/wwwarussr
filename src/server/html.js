export default function html(options) {
  const {
    app = "main",
    title = "SaaS Product Development Services | Blockchain, IoT, and Machine Learning",
    description = "arus is a product development firm with expertise in blockchain, IoT, and machine learning. Our senior teams have been building scalable, production-ready applications for the last 10 years, launching more than 250 products. Visit our website to learn more.",
    stylesheet = "",
    markup
  } = options;

  return `<!doctype html>
            <html lang = "en" >
                <head>
                    <meta charset="utf-8">
                    <title>${title}</title>
                    <meta name="description" content=${description}/>
                    <meta name="author" content="arus"/>
                    <meta property="og:image" content="https://s3.amazonaws.com/ahoyimaagesbvi/img/hero28.jpg"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link href="css/socicon.css" rel="stylesheet" type="text/css" media="all"/>
                    <link href="css/iconsmind.css" rel="stylesheet" type="text/css" media="all" />
                    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
                    <link href="css/interface-icons.css" rel="stylesheet" type="text/css" media="all" />
                    <link href="css/owl.carousel.css" rel="stylesheet" type="text/css" media="all" />
                    <link href="css/theme-mediumblue.css" rel="stylesheet" type="text/css" media="all" />
                    <link href="css/custom.css" rel="stylesheet" type="text/css" media="all" />
                    <link href='https://fonts.googleapis.com/css?family=Lora:400,400italic,700|Montserrat:400,700' rel='stylesheet' type='text/css'/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400italic%7CKarla:400,700" rel="stylesheet" type="text/css"/>
                    <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
                    <link href="css/font-karlaopensans.css" rel="stylesheet" type="text/css"/>
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
                <body className="theme--boxed scroll-assist" data-reveal-selectors="section:not(.masonry):not(:first-of-type):not(.parallax)">
                    <div id="root">${markup}</div>
                    <script src="/app/${app}.bundle.js</script>
                    <script src="js/jquery-2.1.4.min.js"></script>
                    <script src="js/isotope.min.js"></script>
                    <script src="js/scrollreveal.min.js"></script>
                    <script src="js/parallax.js"></script>
                    <script src="js/scripts.js"></script>
                </body>
                </html>`;
}
