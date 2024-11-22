import React, { useState } from "react";
import FormEditor from "./components/FormEditor";
import FormPreview from "./components/FormPreview";

const initialSchema = {
  formTitle: "Project Requirements Survey",
  formDescription: "Please fill out this survey about your project needs",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Full Name",
      required: true,
      placeholder: "Enter your full name",
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      required: true,
      placeholder: "you@example.com",
      validation: {
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        message: "Please enter a valid email address",
      },
    },
    {
      id: "companySize",
      type: "select",
      label: "Company Size",
      required: true,
      options: [
        { value: "1-50", label: "1-50 employees" },
        { value: "51-200", label: "51-200 employees" },
        { value: "201-1000", label: "201-1000 employees" },
        { value: "1000+", label: "1000+ employees" },
      ],
    },
    {
      id: "industry",
      type: "radio",
      label: "Industry",
      required: true,
      options: [
        { value: "tech", label: "Technology" },
        { value: "healthcare", label: "Healthcare" },
        { value: "finance", label: "Finance" },
        { value: "retail", label: "Retail" },
        { value: "other", label: "Other" },
      ],
    },
    {
      id: "timeline",
      type: "select",
      label: "Project Timeline",
      required: true,
      options: [
        { value: "immediate", label: "Immediate (within 1 month)" },
        { value: "short", label: "Short-term (1-3 months)" },
        { value: "medium", label: "Medium-term (3-6 months)" },
        { value: "long", label: "Long-term (6+ months)" },
      ],
    },
    {
      id: "comments",
      type: "textarea",
      label: "Additional Comments",
      required: false,
      placeholder: "Any other details you'd like to share...",
    },
  ],
};

const App: React.FC = () => {
  const [schema, setSchema] = useState(initialSchema);

  return (
    <div className="flex h-screen">
      {/* Left: JSON Editor */}
      <div className="w-1/2 p-4 bg-gray-100 border-r">
        <FormEditor schema={schema} setSchema={setSchema} />
      </div>

      {/* Right: Form Preview */}
      <div className="w-1/2 p-4 bg-white">
        <FormPreview schema={schema} />
      </div>
    </div>
  );
};

export default App;
