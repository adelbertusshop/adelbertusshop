export async function handler(event, context) {
  try {
    const order = JSON.parse(event.body);

    // Wysyłka do Hoplix API
    const response = await fetch("https://api.hoplix.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.HOPLIX_PUBLIC_KEY,
        "x-secret-key": process.env.HOPLIX_SECRET_KEY,
      },
      body: JSON.stringify(order),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
}
