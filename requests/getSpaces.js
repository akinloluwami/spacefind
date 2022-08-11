import axios from "axios";
import { useState, useEffect } from "react";

export async function getServerSideProps(context) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("business");
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
}
