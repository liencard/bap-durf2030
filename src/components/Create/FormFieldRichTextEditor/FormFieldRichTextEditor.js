import dynamic from 'next/dynamic';
import { useField } from '@formiz/core';

const FormFieldRichTextEditor = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Teksteditor laden</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    ['bold', 'italic', 'underline', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = ['header', 'bold', 'italic', 'underline', 'blockquote', 'list', 'bullet', 'link', 'image', 'video'];

export default (props) => {
  const { setValue, value } = useField(props);
  const { label, type, required, multiline, rows, InputProps, defaultValue } = props;

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <FormFieldRichTextEditor
      modules={modules}
      value={value ?? defaultValue}
      formats={formats}
      theme="snow"
      onChange={handleChange}
    />
  );
};
