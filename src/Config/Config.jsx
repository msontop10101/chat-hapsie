// import axios from "axios"

export const Config = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "x-api-key": "97219bf581b2b570fa63a4ac90c8e149b2469b49dfbc468b5ca95e661685a1d9fac89cc8a8f381c1b5a4b3e8135846dddaaea45d4e644f5c109e8b89f26f2b54",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-Requested-With",
    },
  };
  return config;
};
