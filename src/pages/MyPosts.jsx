import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';
import { useSelector } from 'react-redux';

function MyPosts() {
    const [posts, setPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (userData) {
            appwriteService.getPosts([]).then((response) => {
                if (response) {
                    const userPosts = response.documents.filter(
                        (post) => post.userId === userData.$id
                    );
                    setPosts(userPosts);
                }
            });
        }
    }, [userData]);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8">
                <Container>
                    <h1 className="text-2xl font-bold text-center">
                        You haven't created any posts yet.
                    </h1>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default MyPosts;