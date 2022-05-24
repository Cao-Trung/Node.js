var Crawler = require("crawler");
var fs = require('fs');

var c = new Crawler({
    maxConnections : 10,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            console.log("Response Headers");
            console.log(res.headers);
            console.log("\nStatus Code: ");
            console.log(res.statusCode);
            console.log("\nRequest Method: ");
            console.log(res.request.method);
            console.log("\nRequest Uri: ");
            console.log(res.request.uri);
            console.log("\nRequest Headers: ");
            console.log(res.request.headers);
            console.log("\nOptions: ");
            console.log(res.options);
            var $ = res.$;
            console.log("\nTitle: " + $("title").text());
        }
        done();
    }
});

var url = ['http://www.amazon.com',
        'http://www.facebook.com',
        'http://sinhvien.uneti.edu.vn/',
        'http://www.scrapingbee.com/blog/web-scraping-javascript/#http-clients-querying-the-web',
        'http://viblo.asia/p/lam-quen-voi-nodejs-xay-dung-web-server-don-gian-YWOZrEe7KQ0']

for(var i = 1; i <= url.length; i++)
{
    c.queue(url[i]);
}