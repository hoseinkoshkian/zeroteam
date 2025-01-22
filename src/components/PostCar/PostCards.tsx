import React from "react";
import PostCard from "./PostCard";
export default function PostCards() {
  return (
    <div className="flex flex-wrap gap-4 lg:justify-between lg:gap-y-10">
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    </div>
  );
}
