import React from "react";
import { useState , useEffect } from "react";
import { dbService } from "jbase";

const Home = () => {
  const [jweet, setJweet] = useState("");
  const [jweets, setJweets] = useState([]);
  const getJweets = async () => {
    const dbJweets = await dbService.collection("jweets").get();
    
    dbJweets.forEach((document) => {
        const jweetObject ={
            ...document.data(),
            id:document.id,
        };
      setJweet((prev) => [jweetObject, ...prev]);

    });
  };
  
  useEffect(() => {
    getJweets();
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("jweet").add({
      jweet,
      createdAt: Date.now(),
    });
    setJweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setJweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={jweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Jweet" />
      </form>
      <div>
          {jweets.map((jweet)=>(
              <div key={jweet.id}>
                  <h4>{jweet.jweet}</h4>
              </div>    
          ))}
      </div>
    </div>
  );
};
export default Home;
