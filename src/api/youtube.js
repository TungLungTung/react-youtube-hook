import axios from 'axios';

const KEY = 'AIzaSyBJJCZKUOpQpI9LpusVNKJgHl2KVqG_4gc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 4,
    key: KEY
  }
});
