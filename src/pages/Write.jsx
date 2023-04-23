import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Write = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        content: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handlePost = async () => {
        try {
            await axios.post(
                "backend-svc.backend/articles",
                formData
            );
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex items-center justify-center flex-col w-full">
            <div className="w-6/12">
                <div className="border border-gray-300 mt-10 w-full">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 text-left">
                                    <label>
                                        제목:
                                        <input
                                            type="text"
                                            name="title"
                                            className="bg-gray-200 outline-none ml-1"
                                            value={formData.title}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2">
                                    내용:
                                    <textarea
                                        type="text"
                                        name="content"
                                        className="outline-none w-full h-[200px] resize-none"
                                        value={formData.content}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex items-end justify-end w-full">
                    <button
                        className="bg-gray-200 w-20 mt-10 px-2 text-sm py-1 rounded"
                        onClick={handlePost}
                    >
                        작성
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Write;
