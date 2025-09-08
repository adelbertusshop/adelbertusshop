const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const order = JSON.parse(event.body);

    const response = await fetch('https://api.hoplix.com/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'HOPLIX_PUBLIC_KEY': process.env.HOPLIX_PUBLIC_KEY,
        'HOPLIX_SECRET_KEY': process.env.HOPLIX_SECRET_KEY
      },
      body: JSON.stringify(order)
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Zamówienie wysłane!', data })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Błąd przy wysyłaniu zamówienia', error: err.message })
    };
  }
};
