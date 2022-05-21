import React, {useState, useEffect} from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";
const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  //console.log("punkListData", punkListData[selectedPunk]);
  console.log("selectedPunk", selectedPunk);
  console.log("punkListData", punkListData);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]); //2:27:26 Page will update if the punk list changes or the selected punk changes
  //bcz that's what u want right you don't want to hit refresh every single time to see the change, want to see it real time

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk?.image_original_url}
              alt=""
            />
          </div>
        </div>
        <div className="abc">
          <div className="punkDetails" style={{ color: "#fff" }}>
            <div className="title">{activePunk.name}</div>
            {/* <div className="title">Bandana Abcdefghijk</div> */}

            <span className="itemNumber">•#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>

            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activePunk.owner.address}</div>
                <div className="ownerHandle">@asjadh</div>
              </div>
              <div className="ownerLinkContainer">
                <div className="ownerLink">
                  <img src={instagramLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={twitterLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={moreIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;




// // /////////////////////////////////////////////


// import React, { useState, useEffect } from "react";
// import instagramLogo from "../assets/owner/instagram.png";
// import twitterLogo from "../assets/owner/twitter.png";
// import moreIcon from "../assets/owner/more.png";
// import "./Main.css";
// const Main = ({ selectedPunk, punkListData }) => {
//   const [activePunk, setActivePunk] = useState(punkListData[0]);
//   //console.log("punkListData", punkListData[selectedPunk]);
//   console.log("selectedPunk", selectedPunk);
//   console.log("punkListData", punkListData);

//   useEffect(() => {
//     setActivePunk(punkListData[selectedPunk]);
//   }, [punkListData, selectedPunk]); //2:27:26 Page will update if the punk list changes or the selected punk changes
//   //bcz that's what u want right you don't want to hit refresh every single time to see the change, want to see it real time

//   return (
//     <div className="main">
//       <div className="mainContent">
//         <div className="punkHighlight">
//           <div className="punkContainer">
//             <img
//               className="selectedPunk"
//               src={activePunk?.image_original_url}
//               alt=""
//             />
//           </div>
//         </div>

//         <div className="punkDetails" style={{ color: "#fff" }}>
//           <div className="title">{activePunk.name}</div>
//           {/* <div className="title">Bandana Abcdefghijk</div> */}

//           <span className="itemNumber">•#{activePunk.token_id}</span>
//         </div>

//         <div className="owner">
//           <div className="ownerImageContainer">
//             <img src={activePunk.owner.profile_img_url} alt="" />
//           </div>

//           <div className="ownerDetails">
//             <div className="ownerNameAndHandle">
//               <div>{activePunk.owner.address}</div>
//               <div className="ownerHandle">@asjadh</div>
//             </div>

//             <div className="ownerLink">
//               <img src={instagramLogo} alt="" />
//             </div>
//             <div className="ownerLink">
//               <img src={twitterLogo} alt="" />
//             </div>
//             <div className="ownerLink">
//               <img src={moreIcon} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
