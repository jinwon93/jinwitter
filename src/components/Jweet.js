import React, { useState } from "react";
import { dbService } from 'jbase';

const Jweet = ({ jweetObj }) => {
   const [editing , setEditing] = useState(false);
   const [newJweet, setNewJweet] = useState(jweetObj.text);
   const onDeleteClick = async () => {
     const ok = window.confirm("Are you sure you want to delete");
     if (ok) {
       await dbService.doc(`jweets/${jweetObj.id}`).delete();
     }
   };
}

export default Jweet;