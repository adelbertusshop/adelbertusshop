exports.handler = async (event) => {
  const order = JSON.parse(event.body);

  // przykładowa odpowiedź
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Zamówienie odebrane", order }),
  };
};
