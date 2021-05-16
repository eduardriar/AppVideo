import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    originals: [],
    trends: [],
  });

  useEffect(async () => {
    console.log("hooks");
    const request = await fetch(API);
    
    request.json().then((response) => {
      console.log(response);
      setVideos(response);
    });
  }, []);

  return videos;
};

export default useInitialState;
