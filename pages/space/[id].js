//single space with all the details

import React from "react";
import { Button, Text, Link, Flex, Box } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const data = {
    spaceFields:
      "created_at,participant_count,speaker_ids,started_at,ended_at,title,updated_at,scheduled_start",
    expansions: "host_ids",
    userFields: "",
    topicFields: "",
  };
  const response = await axios.get(
    `http://localhost:6600/spaces/${context.params.id}`,
    {
      params: data,
    }
  );
  return {
    props: {
      space: response.data.data,
    },
  };
}

function Space({ space }) {
  console.log(space);
  const hostsId = space?.host_ids;
  return (
    <>
      <Text fontSize="40px">{space?.title}</Text>
      <Flex justifyContent="space-between">
        <Text fontSize="20px">Started {space?.started_at}</Text>
        <Text fontSize="20px">Ended{space?.ended_at}</Text>
      </Flex>
      <Box>
        <Text fontSize={"20px"}>
          {space?.host_ids.length > 1 ? "Hosts" : "Host"}
        </Text>
      </Box>
    </>
  );
}

export default Space;
