import './loadenv.mjs';

const { INSTAGRAM_KEY } = process.env
var IG = `${INSTAGRAM_KEY}`;

export const handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(IG),
  };
};