import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [recentPosts, setRecentPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch recent posts
        appwriteService.getPosts([]).then((response) => {
            if (response) {
                setRecentPosts(response.documents.slice(0, 5));
            }
        });
    }, []);

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="bg-blue-600 text-white py-12 text-center">
                <h1 className="text-4xl font-bold">Welcome to MegaBlog</h1>
                <p className="mt-4 text-lg">Insights, stories, and expertise from our community</p>
                <button
                    className="mt-6 px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100"
                    onClick={() => navigate('/all-posts')}
                >
                    Browse Latest Posts
                </button>
            </div>

            {/* Recent Posts Section */}
            <Container>
                <h2 className="text-2xl font-bold mt-8 mb-4">Recent Posts</h2>
                <div className="flex flex-wrap -mx-4">
                    {recentPosts.map((post) => (
                        <div key={post.$id} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>

            {/* About Section */}
            <div className="bg-blue-50 py-12">
                <Container>
                    <h2 className="text-2xl font-bold text-center mb-4">About MegaBlog</h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto">
                        MegaBlog is a platform where writers and readers come together to share their thoughts, stories, and expertise. Whether you're a seasoned writer or just starting, MegaBlog provides the tools and audience to make your voice heard. Join our vibrant community and explore a world of ideas.
                    </p>
                </Container>
            </div>
        </div>
    );
}

export default Home;