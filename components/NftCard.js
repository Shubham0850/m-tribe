import { useRouter } from "next/router";
import React from "react";

function NftCard({
  imageSrc,
  name,
  tokenId,
  contractType,
  symbol,
  contractAddress,
  key,
}) {
  const router = useRouter();

  const handleSelect = () => {
    const selectedNft = {
      name,
      imageSrc,
      tokenId,
      contractType,
      contractAddress,
      symbol,
    };

    localStorage.setItem("selectedNft", JSON.stringify(selectedNft));

    // router.push("/preview-merch");
  };

  return (
    <div className="w-full p-2" onClick={handleSelect} key={key}>
      <img src={`${imageSrc}`} width={"100%"} />
      <h3 className="text-white text-sm">
        {name} #{tokenId}
      </h3>

      <p className="text-white text-xs">{contractType}</p>

      <p className="text-white text-xs">SYM: {symbol}</p>
      <p></p>
    </div>
  );
}

export default NftCard;
