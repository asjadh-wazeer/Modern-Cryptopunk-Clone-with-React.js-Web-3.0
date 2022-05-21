import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import nftImg from './assets/bafkreidqv7fjr7w4ovjsc5v7muld5wxxakpk63ke4p7v6hvggti3ogqgoe.jpg';
import {useState, useEffect} from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {

  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  useEffect(()=>{
    const getMyNfts = async() => {
      const openseaData = await axios.get (
         //"https://testnets-api.opensea.io/assets?asset_contract_address=0xC36d211Da64a4cDD727F722196545Ec8799BeD9e&order_direction=asc"
         "https://testnets-api.opensea.io/assets?asset_contract_address=0xC58B92C3E439494e4ca44B186A40c7a2483a6B94&order_direction=asc"
      )
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    }

    getMyNfts()
  },[])

  return (
    <div className="app">
      <Header />

      {punkListData.length > 0 && ( //2:31:45
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />

          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}

      {/* <Main selectedPunk={selectedPunk} punkListData={punkListData} /> */}

      {/* <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image={nftImg}
      /> */}
      {/* <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} /> */}
    </div>
  );
}

export default App;
