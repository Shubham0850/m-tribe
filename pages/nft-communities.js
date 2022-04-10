import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useMoralis, useNFTBalances } from "react-moralis";

export default function NftCommunities() {
  const router = useRouter();
  const { address } = router.query;
  const [nfts, setNfts] = useState([]);
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  const fetchNft = async () => {
    const items = await fetch(
      `https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=50`
    )
      .then((res) => res.json())
      .then((res) => {
        return res.assets;
      })
      .catch((e) => {
        console.error(e);
        console.error("Could not talk to OpenSea");
        return null;
      });
  };

  useEffect(() => {
    getNFTBalances({ params: { chain: "0x4" } })
      .then((res) => setNfts(res?.result))
      .catch((err) => console.log(err));
 
  }, []);

  return (
    <div className="header">
      <div className="bg"></div>
      <Container fluid className="cont">
        <div className="header__box">
          <h1 className="h2">NFT Communities</h1>

          {nfts?.map((nft, index) => {
            console.log(nft)
            return (
             <div>
                <img
                src={nft?.image || "error"}
                alt=""
                style={{ height: "300px" }}
                
              />
              <p className="p">{nft?.name}</p>
              <p className="p">{nft?.token_address}</p>
             </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
