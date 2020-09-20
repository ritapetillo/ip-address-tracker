import React from "react";
import styles from "../styles/IpCard.module.css";

function IpCard({ ipDetails }) {
  const location = ipDetails.location;
  return (
    <div className={styles.ipCard}>
      <div className="">
        <h3 className="">IP</h3>
        <h2 className="">{ipDetails.ip}</h2>
      </div>
      <div className="">
        <h3 className="">location</h3>
        <h2 className="">
          {location?.city}
          <br />
          {location?.region}
          <br />
          {location?.postalCode}, {location?.country}
        </h2>
      </div>
      <div className="">
        <h3 className="">timezone</h3>
        <h2 className="">UTC{location?.timezone}</h2>
      </div>
      <div className="border-0">
        <h3 className="">isp</h3>
        <h2 className="">{ipDetails?.isp}</h2>
      </div>
    </div>
  );
}

export default IpCard;
