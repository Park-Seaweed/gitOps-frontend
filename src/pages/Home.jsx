import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://k8s-eksdemogroup-44094b9d6c-533340234.ap-northeast-2.elb.amazonaws.com/articles");
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex items-center justify-center flex-col w-full">
            <div className="w-6/12">
                <div className="border border-gray-300 mt-10 w-full">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2">글 제목이당</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr
                                    key={post.id}
                                    className="border-t border-gray-300 text-center"
                                    onClick={() =>
                                        navigate(`/article/${post.id}`)
                                    }
                                >
                                    <td className="p-2">{post.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-end justify-end w-full">
                    <button
                        className="bg-gray-200 w-20 mt-10 px-2 text-sm py-1 rounded"
                        onClick={() => navigate("/write")}
                    >
                        글 쓰기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
