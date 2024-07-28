import React from "react";

type FormField = {
  name: string;
  label: string;
  type: string;
};

type FormProps = {
  fields: FormField[];
  onSubmit: (data: Record<string, any>) => void;
};

const Form: React.FC<FormProps> = ({ fields, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries()) as Record<string, any>;
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label htmlFor={field.name} className="text-sm">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            className="p-2 border rounded"
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
