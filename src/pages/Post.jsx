import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full max-w-4xl mx-auto mb-8 relative bg-white rounded-xl shadow-lg p-4">
                    <div className="relative rounded-xl overflow-hidden bg-gray-50 mb-4">
                        <div className="aspect-w-16 aspect-h-9">
                            <img
                                src={appwriteService.getFilePreview(post.featuredImage)}
                                alt={post.title}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/1600x900?text=Blog+Post+Image';
                                }}
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {isAuthor && (
                        <div className="absolute right-6 top-6 z-10">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">{post.title}</h1>
                    <div className="prose prose-lg max-w-none prose-img:rounded-xl prose-img:mx-auto prose-img:shadow-md">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
