import {useState, useEffect} from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos,setVideos] = useState([]);

  /// ComponentDidMount just run 1 times.
  useEffect(() => {
    search(defaultSearchTerm);
  },[defaultSearchTerm]);
  
  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      }
    });
    // Set videos to state and pass in to children component
    setVideos(response.data.items);
  };

  /// React Convention
  return [videos, search];

  /// CommonJS, return object
  // return {videos, onTermSubmit};

}

export default useVideos;