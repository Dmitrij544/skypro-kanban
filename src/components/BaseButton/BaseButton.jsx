import { StyledInput, StyledTextarea } from './BaseInput.styled'; 

const BaseInput = ({
   tag = "input",
   id,
   name,
   placeholder = "",
   type = "text",
   error = false,
   value,
   onChange,
}) => {
   const Component = tag === "textarea" ? StyledTextarea : StyledInput;

   return (
      <Component
         id={id}
         name={name}
         type={type}
         placeholder={placeholder}
         $error={error}
         value={value}
         onChange={onChange}
      />
   );
};

export default BaseInput;