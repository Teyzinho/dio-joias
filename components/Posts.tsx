"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { PostCardInterface } from '@/types';
import PostCard from './PostCard';

const Posts = () => {
  const [posts, setPosts] = useState<null | PostCardInterface[]>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://job.risestudio.com.br/pages/home?featured=true"
        );
        setPosts(response.data.data.featured);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
      {posts && posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
