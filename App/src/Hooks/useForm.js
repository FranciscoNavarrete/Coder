import {useState} from "react";
import salesService from "../services/salesService";

export default function useForm(fields) {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = (e, transaction, callback) => {
    e.preventDefault();
    setIsLoading(true);
    setErr("");

    let validFields = 0;

    fields.forEach((field) => {
      validFields += field.trim().length ? 1 : 0;
    });

    if (validFields === fields.length) {
      return salesService.create(transaction).then((id) => {
        setIsLoading(false);
        callback(id);
      });
    } else {
      setErr("Los campos deben contener al menos un carácter");
      setIsLoading(false);
    }
  };

  return {handleSubmit, isLoading, err};
}
