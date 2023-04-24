import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Article = () => {
    const param = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://k8s-eksdemogroup-44094b9d6c-533340234.ap-northeast-2.elb.amazonaws.com/articles/${param.id}`
                );
                setPost(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [param.id]);

    return (
        <div className="flex items-center justify-center flex-col w-full">
            <div className="w-6/12">
                <div className="border border-gray-300 mt-10 w-full">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2">{post.title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-gray-300 text-center">
                                <td className="p-2">{post.content}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex items-end justify-end w-full">
                    <button
                        className="bg-gray-200 w-20 mt-10 px-2 text-sm py-1 rounded"
                        onClick={() => navigate("/")}
                    >
                        목록으로
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Article;
