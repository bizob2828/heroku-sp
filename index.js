var SparkPost = require('sparkpost');
var client = new SparkPost();

var trans = {};
trans.campaign = 'first-mailing';
trans.from = 'test@sp.com';
trans.subject = 'First SDK Mailing';

// Add some content to your email
trans.html = '<html><body><h1>Congratulations, {{name}}!</h1><p>You just sent your very first mailing!</p></body></html>';
trans.text = 'Congratulations, {{name}}!! You just sent your very first mailing!';
trans.substitutionData = {name: 'YOUR FIRST NAME'};

// Pick someone to receive your email
trans.recipients = [{ address: { name: 'YOUR FULL NAME', email: 'bizob2828@yahoo.com' } }];

// Send it off into the world!
client.transmissions.send(trans, function(err, res) {
 if (err) {
   console.log('Whoops! Something went wrong');
   console.log(err);
 } else {
  console.log('Woohoo! You just sent your first mailing!');
 }
});
