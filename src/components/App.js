import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

/// custom Hook
import useVideos from "../hooks/useVideos";

const App = () => {
  
  const defaultSearchTerm = 'reactjs';
  const [selectedVideo, setSelectedVideo] = useState(null);
  /// Using custom HOOK.
  const [videos,search] = useVideos(defaultSearchTerm);

  /// Rerender sau khi nhan dc list videos
  useEffect(() => {
    setSelectedVideo(videos[0]);
  },[videos]); 
  
  return(
    <div className="ui container">
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              {/* If arrow function take 1 argument and just 1 pass to function callback, just call callback */}
              {/* (video) => setSelectedVideo(video) ~~~ setSelectedVideo */}
              <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
            </div>
          </div>
        </div>
      </div>
  );

}

export default App;