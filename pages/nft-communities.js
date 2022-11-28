import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useMoralis, useNFTBalances } from "react-moralis";
import NftCard from "../components/NftCard";

export default function NftCommunities() {
  const router = useRouter();
  const { address } = router.query;
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-Key":
          "l0yeoaFVI3gtnwHARzSKGgMIi1O5eVkXQPlpLwpZ7mOByd4kDvmvFGmCDCIR3H5q",
      },
    };

    fetch(
      `https://deep-index.moralis.io/api/v2/${`0x0EcB0f4F0Cc7f78b109D5EF748021D799351D57b`}/nft?chain=eth&format=decimal`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setNfts(response.result);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="header">
      <div className="bg"></div>
      <Container fluid className="cont">
        <div className="header__box">
          <h1 className="h2">NFT Communities</h1>

          <div className="flex flex-wrap">
            {nfts?.map((nft, index) => {
              const metaData = JSON.parse(nft.metadata);
              console.log("metadata✅", metaData);
              if (metaData !== null) {
                return (
                  <div className="w-[20%]">
                    <NftCard
                    key={index}
                    imageSrc={metaData?.image}
                    name={nft.name}
                    symbol={nft.symbol}
                    tokenId={nft.token_id}
                    contractType={nft.contract_type}
                    contractAddress={nft.token_address}
                  />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
