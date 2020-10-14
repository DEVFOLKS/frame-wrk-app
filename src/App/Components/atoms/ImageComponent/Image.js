import React, { Suspense } from "react";
import { useImage } from "react-image";
import { Spinner } from "../Spinner";

function ImageComp({ image }) {
  const { src } = useImage({
    srcList: image,
  });

  return (
    <img
      src={src}
      loader={<Spinner type={"CircleLoader"} loading={true} color="green" />}
    />
  );
}

export default function ImageComponent({ image }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImageComp image={image} />
    </Suspense>
  );
}
