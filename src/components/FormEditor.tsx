import React from "react";
import ReactJson from "react-json-view";

interface FormEditorProps {
  schema: {
    formTitle: string;
    formDescription: string;
    fields: any[];
  };
  setSchema: React.Dispatch<React.SetStateAction<FormEditorProps['schema']>>;

}

const FormEditor: React.FC<FormEditorProps> = ({ schema, setSchema }) => {
  const handleEdit = (edit: any) => {
    if (edit.updated_src) {
      setSchema(edit.updated_src);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">JSON Editor</h2>
      <ReactJson
        src={schema}
        onEdit={handleEdit}
        onAdd={handleEdit}
        onDelete={handleEdit}
        theme="monokai"
      />
    </div>
  );
};

export default FormEditor;
