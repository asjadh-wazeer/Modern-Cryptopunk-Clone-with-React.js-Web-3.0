import React from 'react';
import CollectionCard from './CollectionCard';
import './PunkList.css'


const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    //1:47:40
    <div className="punkList">
      {punkListData.map((punk) => (
        // <div onClick={() => console.log(punk.token_id)}>
        <div onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;