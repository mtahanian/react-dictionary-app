import React from "react";
import ImageListItem from "@material-ui/core/ImageListItem";

export default function PhotosComponet(props) {
  if (props.photos) {
    return (
      <div>
        {props.photos.map((photo, index) => {
          return (
            <ImageListItem key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  srcSet={`${photo.src.landscape}?w=161&fit=crop&auto=format 1x,
                ${photo.src.landscape}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt="thisissunset"
                  loading="lazy"
                  className="gallery-img"
                />
              </a>
            </ImageListItem>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
