import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  // const like = 1;
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

useEffect(()=> {
  console.log("Like is changed: ",like)
},[like,dislike]);



  return (

    <div className="counter-container">
      <IconButton className="likes-dislikes"
        onClick={() => setLike(like + 1)} color="primary" aria-label="upload picture">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>

      </IconButton>


      <IconButton className="likes-dislikes"
        onClick={() => setDisLike(dislike + 1)} color="primary" aria-label="upload picture">
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>




      {/* <p>{like}</p> */}
    </div>

  );
}
