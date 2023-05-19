import { useEffect, useRef, useState } from "react";
import { PostCard } from "../components";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { SkeletonCard } from "../components/SkeletonCard";
export const HomePage = () => {
  const [posts, setPost] = useState(new Array(3).fill(false));
  const [toggle, setToggle] = useState(true);
  const postRef = useRef(collection(db, "post"));
  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postRef.current);
      setPost(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    getPosts();
  }, [toggle, postRef]);

  return (
    <section>
      {posts.map((post, index) =>
        post ? (
          <PostCard
            key={post.id}
            post={post}
            toggle={toggle}
            setToggle={setToggle}
          />
        ) : (
          <SkeletonCard key={index} />
        )
      )}
    </section>
  );
};
