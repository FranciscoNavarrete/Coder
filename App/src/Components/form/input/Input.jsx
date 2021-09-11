export default function Input({type = "text", name, onChange, placeholder}) {

  return (
    <input
      
      type={type}
      name={name}
      placeholder={placeholder || name}
      onChange={onChange}
    />
  );
}
