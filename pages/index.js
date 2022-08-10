import { Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
export default function Home() {
  const [data, setData] = useState([]);

  const fetchSpaces = async () => {
    const endpoint =
      "https://api.twitter.com/2/spaces/search?query=tech&state=live&space.fields=started_at,title,participant_count,speaker_ids&expansions=&user.fields&topic.fields";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`,
    };
    //fetch data
    const response = await axios.get(endpoint, { headers });
    setData(response.data);

    console.log(res.data);
  };
  return (
    <>
      <Text>
        Chakra UI is a React UI library that provides a set of components that
        are designed to be used together.
      </Text>
      <Button onClick={fetchSpaces}>Fetch Spaces</Button>
    </>
  );
}
