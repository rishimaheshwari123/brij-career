"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Bold, Italic, Underline, List, ListOrdered } from "lucide-react";

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    contact: "",
    experience: "",
    salary: "",
  });

  const [activeTab, setActiveTab] = useState("write");
  const [previewHtml, setPreviewHtml] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "desc") {
      setPreviewHtml(e.target.value.replace(/\n/g, "<br />"));
    }
  };

  const handleFormatting = (format) => {
    const textarea = document.querySelector('textarea[name="desc"]');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.desc.substring(start, end);
    let formattedText = "";
    let cursorPosition = 0;

    switch (format) {
      case "bold":
        formattedText = `**${selectedText}**`;
        cursorPosition = 2;
        break;
      case "italic":
        formattedText = `*${selectedText}*`;
        cursorPosition = 1;
        break;
      case "underline":
        formattedText = `__${selectedText}__`;
        cursorPosition = 2;
        break;
      case "bullet":
        formattedText = selectedText
          .split("\n")
          .map((line) => `• ${line}`)
          .join("\n");
        cursorPosition = 2;
        break;
      case "numbered":
        formattedText = selectedText
          .split("\n")
          .map((line, i) => `${i + 1}. ${line}`)
          .join("\n");
        cursorPosition = 3;
        break;
      default:
        return;
    }

    const newDesc =
      formData.desc.substring(0, start) +
      formattedText +
      formData.desc.substring(end);
    setFormData({ ...formData, desc: newDesc });

    setPreviewHtml(
      newDesc
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/__(.*?)__/g, "<u>$1</u>")
        .replace(/• (.*?)(\n|$)/g, "<li>$1</li>")
        .replace(/\d+\. (.*?)(\n|$)/g, "<li>$1</li>")
        .replace(/\n/g, "<br />")
    );

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + cursorPosition, end + cursorPosition);
    }, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/job/create`,
        formData
      );
      toast.success(response.data.message);
      setFormData({
        title: "",
        desc: "",
        contact: "",
        experience: "",
        salary: "",
      });
      setPreviewHtml("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error in creating job");
    }
  };

  return (
    <div className="max-w-2xl mx-auto border p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Create Job</h2>
      <p className="text-sm text-gray-500 mb-4">
        Fill in the details to post a new job opening
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block font-medium">
            Job Title
          </label>
          <input
            id="title"
            name="title"
            placeholder="e.g. Senior Frontend Developer"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="desc" className="block font-medium">
            Description
          </label>
          <div className="border rounded-md">
            <div className="flex items-center gap-2 p-2 border-b bg-gray-100">
              <button
                type="button"
                className="p-1"
                onClick={() => handleFormatting("bold")}
              >
                {/* <Bold className="h-4 w-4" /> */}
              </button>
              <button
                type="button"
                className="p-1"
                onClick={() => handleFormatting("italic")}
              >
                {/* <Italic className="h-4 w-4" /> */}
              </button>
              <button
                type="button"
                className="p-1"
                onClick={() => handleFormatting("underline")}
              >
                {/* <Underline className="h-4 w-4" /> */}
              </button>
              <button
                type="button"
                className="p-1"
                onClick={() => handleFormatting("bullet")}
              >
                {/* <List className="h-4 w-4" /> */}
              </button>
              <button
                type="button"
                className="p-1"
                onClick={() => handleFormatting("numbered")}
              >
                {/* <ListOrdered className="h-4 w-4" /> */}
              </button>
            </div>

            <textarea
              id="desc"
              name="desc"
              placeholder="Describe the job requirements, responsibilities, and benefits..."
              value={formData.desc}
              onChange={handleChange}
              className="w-full p-3 min-h-[200px] border-0 focus:ring-0 rounded-t-none"
              required
            />
          </div>
          <p className="text-xs text-gray-500">
            Use the formatting tools to customize your description.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact" className="block font-medium">
              Contact Information
            </label>
            <input
              id="contact"
              name="contact"
              placeholder="Email or phone number"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="experience" className="block font-medium">
              Experience (years)
            </label>
            <input
              id="experience"
              name="experience"
              placeholder="e.g. 2-3 years"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>

        <div>
          <label htmlFor="salary" className="block font-medium">
            Salary Range
          </label>
          <input
            id="salary"
            name="salary"
            placeholder="e.g. $80,000 - $100,000"
            value={formData.salary}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md"
        >
          Create Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;
