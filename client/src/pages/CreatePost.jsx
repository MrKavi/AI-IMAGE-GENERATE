import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { FormField } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", prompt: "", photo: "" });
  const [generatingImg, setGenerationImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};
  const handleChange = (e) => {};
  const handleSurpriseMe = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-black text-[32px]">Create </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Create imagination and visually stunning images through
          AI-Image-Generator and share them with friends
        </p>
      </div>
      <form className=" mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            lableName="Your Name"
            type="text"
            name="name"
            placeholder="kavin"
            vlaue={form.name}
            handleChange={handleChange}
          />
          <FormField
            lableName="Prompt"
            type="text"
            name="prompt"
            placeholder="A Space Shuttle flying above Cape Town, digital art"
            vlaue={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative"></div>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;