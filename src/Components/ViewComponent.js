import React, { useState, useEffect } from "react";
import axios from "axios";
import { styles } from "./ViewStyles";
import DetailView from "./DetailView";

const ViewComponent = () => {
  const [contributors, setContributors] = useState([]);
  const [click, setClick] = useState(false);
  const [key, setKey] = useState();

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/facebook/react/contributors?per_page=100")
      .then((res) => {
        // Setting Contributors from the Github API
        setContributors(res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []); 
  
  // Click event handler and setting key to display detail view below
  const clickHandler = (i) => {
    setClick(!click);
    setKey(i);
  };

  const ListDisplay = (contributor, i) => {
    return (
      <>
        <div style={styles.listDisplay} key={i}>
          <div style={styles.flexDisplay} onClick={() => clickHandler(i)}>
            <img
              src={contributor.avatar_url}
              alt="contributor_image_url"
              style={styles.avatarStyles}
            />
            <div style={styles.nameStyles}>{contributor.login}</div>
            <div>{contributor.contributions}</div>
          </div>
        </div>
        {click && key === i && <DetailView data={contributor} />}
      </>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.heading}>Facebook React's Contributors List</div>
      <div style={styles.listDisplay}>
        <div style={styles.headingDisplay}>
          <h2>Avatar</h2>
          <h2>User Name</h2>
          <h2>Contributions</h2>
        </div>
      </div>
      <div>
        {contributors &&
          contributors.length &&
          contributors.map((contributor, i) => {
            return ListDisplay(contributor, i);
          })}
      </div>
    </div>
  );
};

export default ViewComponent;
