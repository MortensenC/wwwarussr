export default function html(options) {
  const { app = "main", markup, helmet } = options;

  return `
    <!doctype html>
            <html lang = "en" >
                <head>
                    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all"/>
                    <link href="css/theme-mediumblue.css" rel="stylesheet" type="text/css" media="all"/>

                    <link href="css/socicon.css" rel="stylesheet" type="text/css" media="all"/>
                    <link href="css/iconsmind.css" rel="stylesheet" type="text/css" media="all" />
                    <link href="css/interface-icons.css" rel="stylesheet" type="text/css" media="all" />
                    <link href='https://fonts.googleapis.com/css?family=Lora:400,400italic,700|Montserrat:400,700' rel='stylesheet' type='text/css'/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400italic%7CKarla:400,700" rel="stylesheet" type="text/css"/>
                    <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
                    
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
                <body class="theme--boxed">
                    
                    <div id="root">${markup}</div>
                    <script src="/app/vendor.bundle.js"></script>
                    <script src="/app/${app}.bundle.js"></script>
                    
                </body>
                </html>
  `;
}
