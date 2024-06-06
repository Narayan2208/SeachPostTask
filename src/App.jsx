import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import PostList from "./PostList";
import "./App.css"
const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Post Search with debounce feature</h1>
      <SearchBox onSearch={handleSearch} />

      <PostList posts={filteredPosts} isLoading={isLoading} />
    </div>
  );
};

export default App;
