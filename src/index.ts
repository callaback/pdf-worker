import puppeteer from "@cloudflare/puppeteer";

const generateDocument = (name: string) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <style>
    html, body, #container {
    width: 100%;
      height: 100%;
    margin: 0;
    }
      body {
        font-family: Baskerville, Georgia, Times, serif;
        background-color: #f7f1dc;
      }
      strong {
        color: #5c594f;
    font-size: 128px;
    margin: 32px 0 48px 0;
      }
    em {
    font-size: 24px;
    }
      #container {
    flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
    text-align: center
      }
    </style>
  </head>

  <body>
    <div id="container">
    <em>This is to certify that</em>
    <strong>${name}</strong>
    <em>has rendered a PDF using Cloudflare Workers</em>
  </div>
  </body>
</html>
`;
};

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    }

    const { searchParams } = new URL(request.url);
    let name = searchParams.get("name");
    const url = searchParams.get("url");

    if (!name && !url) {
      return new Response("Please provide either ?name= or ?url= parameter", {
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    const browser = await puppeteer.launch(env.BROWSER);
    const page = await browser.newPage();

    if (url) {
      // Snapshot URL
      await page.goto(url, { waitUntil: 'networkidle2' });
    } else {
      // Generate certificate
      const document = generateDocument(name);
      await page.setContent(document);
    }

    const pdf = await page.pdf({ printBackground: true });
    await browser.close();

    return new Response(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  },
};
