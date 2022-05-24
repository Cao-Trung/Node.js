var https = require('https');

function link(url)
{
    https.get(url, function(res) {
        var content = '';
        res.on('data', function(chunk) {
            content = content + chunk;
        });
        res.on('end', function() {
            //console.log(content);
            var a = content.indexOf('<title>') + 7;
            var z = content.indexOf('</title>');
            var title = [];
            title.push(content.slice(a, z));
            console.log("\nTitle: " + title);

            console.log("\nResponse Headers");
            console.log(res.headers);
            console.log("\nStatus Code: ");
            console.log(res.statusCode);
        });
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });

    return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
}

var url = ['https://www.youtube.com/watch?v=DYTknOoJhFQ',
        'https://github.com/Cao-Trung/Node.js',
        'https://www.tutorialspoint.com/nodejs/nodejs_response_object.htm',        
        'https://www.scrapingbee.com/blog/web-scraping-javascript/#http-clients-querying-the-web',
        'https://viblo.asia/p/lam-quen-voi-nodejs-xay-dung-web-server-don-gian-YWOZrEe7KQ0']

async function run()
{
    for(var i = 0; i < url.length; i++)
    {   
        var gg = await link(url[i]);
    }
}

run();
