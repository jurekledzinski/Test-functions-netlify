exports.handler = async function (event, context) {
  console.log(JSON.parse(event.body), 'event');
  console.log(context, 'context');
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: event.body,
    }),
  };
};
