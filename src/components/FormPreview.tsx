import React from "react";
import { useForm } from "react-hook-form";

interface FormPreviewProps {
  schema: any;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h1 className="text-lg font-bold mb-4">{schema.formTitle}</h1>
      <p className="text-gray-600 mb-6">{schema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {schema.fields?.map((field: any) => {
          switch (field.type) {
            case "text":
            case "email":
              return (
                <div key={field.id}>
                  <label className="block font-medium mb-1">
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    {...register(field.id, {
                      required: field.required ? "This field is required" : false,
                      pattern: field.validation?.pattern
                        ? {
                            value: new RegExp(field.validation.pattern),
                            message: field.validation.message,
                          }
                        : undefined,
                    })}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border p-2"
                  />
                  {errors[field.id] && (
                    <p className="text-red-500 text-sm">{String(errors[field.id]?.message)}</p>

                  )}
                </div>
              );
            case "select":
              return (
                <div key={field.id}>
                  <label className="block font-medium mb-1">{field.label}</label>
                  <select
                    {...register(field.id, { required: field.required })}
                    className="w-full border p-2"
                  >
                    <option value="">Select...</option>
                    {field.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors[field.id] && (
                    <p className="text-red-500 text-sm">This field is required</p>
                  )}
                </div>
              );
            case "textarea":
              return (
                <div key={field.id}>
                  <label className="block font-medium mb-1">{field.label}</label>
                  <textarea
                    {...register(field.id)}
                    placeholder={field.placeholder}
                    className="w-full border p-2"
                  ></textarea>
                </div>
              );
            default:
              return null;
          }
        })}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPreview;
