import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);    const submit = async (data) => {
        try {
            if (post) {
                // Update existing post
                let featuredImage = post.featuredImage; // Keep existing image by default

                // If new image is uploaded
                if (data.image && data.image[0]) {
                    const file = await appwriteService.uploadFile(data.image[0]);
                    if (file) {
                        // Delete old image
                        if (post.featuredImage) {
                            await appwriteService.deleteFile(post.featuredImage);
                        }
                        featuredImage = file.$id;
                    }
                }

                // Update post
                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage,
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                // Create new post
                if (!data.image || !data.image[0]) {
                    console.error('Featured image is required for new posts');
                    return;
                }

                // Upload image first
                const file = await appwriteService.uploadFile(data.image[0]);
                
                if (file) {
                    // Create post with image
                    const dbPost = await appwriteService.createPost({
                        ...data,
                        featuredImage: file.$id,
                        userId: userData.$id,
                        status: data.status || 'active'
                    });

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                }
            }
        } catch (error) {
            console.error('Error in post submission:', error);
            // Here you could add user notification about the error
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);    return (
        <form onSubmit={handleSubmit(submit)} className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Section */}
                <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-6">
                    <Input
                        label="Title :"
                        placeholder="Enter the title"
                        className="mb-4"
                        {...register('title', { required: true })}
                    />
                    <Input
                        label="Slug :"
                        placeholder="Enter the slug"
                        className="mb-4"
                        {...register('slug', { required: true })}
                        onInput={(e) => {
                            setValue('slug', e.target.value.replace(/\s+/g, '-').toLowerCase(), {
                                shouldValidate: true,
                            });
                        }}
                    />
                    <RTE
                        label="Content :"
                        name="content"
                        control={control}
                        defaultValue={getValues('content')}
                    />
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Featured Image :
                        </label>
                        <div className="relative">
                            <input
                                type="file"
                                accept="image/*"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                {...register('image', { required: !post })}
                            />
                            <div className="flex items-center justify-center w-full h-12 bg-blue-50 border border-blue-300 rounded-lg text-blue-600 font-medium cursor-pointer hover:bg-blue-100 transition">
                                Choose File
                            </div>
                        </div>
                    </div>
                    {post && post.featuredImage && (
                        <div className="mb-4">
                            <img
                                src={post.featuredImage}
                                alt="Featured"
                                className="w-full h-40 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    )}
                    <Select
                        options={['active', 'inactive']}
                        label="Status"
                        className="mb-4"
                        {...register('status', { required: true })}
                    />
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        {post ? 'Update Post' : 'Submit Post'}
                    </Button>
                </div>
            </div>
        </form>
    );
}
