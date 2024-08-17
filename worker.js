addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname.split('/').filter(Boolean);

    if (path.length === 0) {
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Jet-Mirror</title>
                <style>
                    body { 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        justify-content: center; 
                        height: 100vh; 
                        margin: 0; 
                        text-align: center;
                        padding: 20px;
                        box-sizing: border-box;
                    }
                    h1 { 
                        font-size: 6em; 
                        margin: 0; 
                    }
                    p { 
                        font-size: 2em; 
                        margin-top: 20px;
                    }
                    @media (max-width: 600px) {
                        h1 {
                            font-size: 3em;
                        }
                        p {
                            font-size: 1em;
                        }
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to Jet-Mirror ❤️🚀</h1>
                <p>Made with ❤️ by <a href='https://telegram.me/hrishikesh2861'>Lord Puneet 👑</a></p>
            <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"8b489cb8ce354109","version":"2024.7.0","r":1,"token":"eccf25e4d3e941929d83676c3f662deb","serverTiming":{"name":{"cfL4":true}}}' crossorigin="anonymous"></script>
            </body>
            </html>
        `;
        return new Response(html, {
            headers: { 'Content-Type': 'text/html' },
        });
    }
    if (path.length === 2) {
        const botName = path[0];
        const startParam = path[1];
        const telegramUrl = `https://telegram.me/${botName}?start=${startParam}`;
        const displayText = `Opening ${botName}...`;

        const dynamicHtml = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Jet-Mirror ❤️🚀</title>
                <style>
                    body { 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        justify-content: center; 
                        height: 100vh; 
                        margin: 0; 
                        text-align: center;
                        padding: 20px;
                        box-sizing: border-box;
                    }
                    h1 { 
                        font-size: 6em; 
                        margin: 0; 
                    }
                    p { 
                        font-size: 2em; 
                        margin-top: 20px;
                    }
                    @media (max-width: 600px) {
                        h1 {
                            font-size: 3em;
                        }
                        p {
                            font-size: 1em;
                        }
                    }
                </style>
                <script>
                    setTimeout(function() {
                        window.location.href = '${telegramUrl}';
                    }, 4000);
                </script>
            </head>
            <body>
                <h1>Welcome to Jet-Mirror ❤️🚀</h1>
                <p>${displayText}</p>
            <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"8b489f46e9e2cdf6","version":"2024.7.0","r":1,"token":"eccf25e4d3e941929d83676c3f662deb","serverTiming":{"name":{"cfL4":true}}}' crossorigin="anonymous"></script>
            </body>
            </html>
        `;
        return new Response(dynamicHtml, {
            headers: { 'Content-Type': 'text/html' },
        });
    }
    return new Response('Invalid URL format', { status: 400 });
}
