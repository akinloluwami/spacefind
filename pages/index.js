import { Button, Text, Link } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Home() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("money");
  const [state, setState] = useState("");
  const [spaceFields, setSpaceFields] = useState("");
  const [expansions, setExpansions] = useState("");
  const [userFields, setUserFields] = useState("");
  const [topicFields, setTopicFields] = useState("");

  useEffect(() => {
    console.log("fetching...");
    const data = {
      search: searchQuery,
      state: "all",
      spaceFields: "title",
      expansions: "",
      userFields: "",
      topicFields: "",
    };
    axios
      .get("http://localhost:6600/spaces", { params: data })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Link fontSize="40px">Discover "what's happening"</Link>
      {data.length < 1
        ? "Loading..."
        : data.map((item) => {
            return (
              <div key={item.id}>
                <Link fontSize="20px" href={`/space/${item.id}`}>
                  {item.title}
                </Link>
              </div>
            );
          })}
    </>
  );
}
