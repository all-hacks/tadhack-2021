var telnyx = require('telnyx')('KEY017BFEC2634C5F53261A5733D00B29D6_Y4YLWiVPnEI06noq85fxfO');

telnyx.messages.create(
  {
    'from': '+15073078187',    //'+18665552368', // Your Telnyx number
    'to': '+12256124680',
    'text': 'Hello, World!!!'
  },
  function(err, response) {
    // asynchronously called
    console.log(JSON.stringify(response, null, 4));
  }
);
