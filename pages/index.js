import React, { useState } from "react";
import Head from "next/head";
import Input from "../components/Input.js";
import IpCard from "../components/IpCard.js";
import dynamic from "next/dynamic";

const MapIp = dynamic(() => import("../components/MapIp.js"), { ssr: false });

function Home() {
  const [ip, setIp] = useState("");
  const [ipData, setIpData] = useState("");

  const handleSubmit = async (ip) => {
    await setIp(ip);
    console.log(ip);
    getIpDetails(ip);
  };

  const getIpDetails = async (ip) => {
    const res = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_Ycuf9ssDWYjHU8yM3Xx7cs7R0Vv3B&ipAddress=${ip}`
    );
    const json = await res.json();
    setIpData(json);
  };

  return (
    <div>
      <Head>
        <title>IP Tracker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossorigin=""
        />
      </Head>
      <div className="Home">
        <Input handleSubmit={handleSubmit} ipTyped={ip} />
        <IpCard ipDetails={ipData} />
        <MapIp cordinates={ipData.location} />
      </div>
    </div>
  );
}

export default Home;
