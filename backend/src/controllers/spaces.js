require("dotenv").config();
const axios = require("axios");

const getSpaces = async (req, res) => {
  const { search, state, spaceFields, expansions, userFields, topicFields } =
    req.query;
  const endpoint = `https://api.twitter.com/2/spaces/search?query=${search}&state=${state}&space.fields=${spaceFields}&expansions=${expansions}&user.fields=${userFields}&topic.fields=${topicFields}`;

  const response = await axios.get(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
    },
  });
  res.status(200).json(response.data);
};

getSingleSpace = async (req, res) => {
  const { id } = req.params;
  const { spaceFields, expansions, userFields, topicFields } = req.query;
  const endpoint = `https://api.twitter.com/2/spaces/${id}?space.fields=${spaceFields}&expansions=${expansions}&user.fields=${userFields}&topic.fields=${topicFields}`;

  const response = await axios.get(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
    },
  });
  res.status(200).json(response.data);
};

module.exports = { getSpaces, getSingleSpace };
