import axios from "axios";
import { useEffect, useState } from "react";
import { detailStyles } from "./DetailStyles";

const DetailView = (props) => {
  const { data } = props;
  const [details, setDetails] = useState();

  useEffect(() => {
    axios
      .get(data.url)
      .then((res) => {
        // get details for specific user and store in details
        setDetails(res.data);
      })
      .catch((err) => console.log("Error : ", err));
    // data url as a dependency. Make useEffect run on change of data url
  }, [data.url]);  

  return (
    <div style={detailStyles.container}>
      <h2>Detailed View</h2>
      <div style={detailStyles.rowStyle}>
        <img
          src={data.avatar_url}
          alt="image_url"
          style={detailStyles.avatarStyles}
        />
        <div>
          <div style={detailStyles.flexSpacing}>
            <div>
              <h3>{details && details.name}</h3>
              <i>
                <div>
                  {details && details.bio ? details.bio : "No Bio mentioned"}
                </div>
              </i>
            </div>
          </div>
          <br />
          <div style={detailStyles.flexSpacing}>
            <div>Location : </div>
            <div>{details && details.location? details.location : 'No location mentioned'}</div>
          </div>
          <div style={detailStyles.flexSpacing}>
            <div>Followers Count : </div>
            <div>{details && details.followers}</div>
          </div>
          <div style={detailStyles.flexSpacing}>
            <div>Following Count : </div>
            <div>{details && details.following}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailView;
