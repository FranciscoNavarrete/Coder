import {useContext, useState} from "react";
import Loader from "../loading/IsLoading";
import Input from "./input/Input";
import CartContext from "../../Context/CartContext";
import useForm from "../../Hooks/useForm";

export default function Form({onSuccessBuy}) {
  const {items, finalPrice, clear} = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState();

  const {handleSubmit, isLoading, err} = useForm([name, email, phone]);

  const setters = {
    name: setName,
    email: setEmail,
    phone: setPhone,
  };

  const handleChange = ({target}) => {
    setters[target.name](target.value);
  };

  const createTransaction = () => ({
    buyer: {
      name,
      phone,
      email,
    },
    items: items.map(({item}) => ({id: item.id, title: item.title, price: item.price})),
    date: new Date(),
    total: finalPrice,
  });
  const enviar =() => {
      console.log("Datos", name,+ " "+ email,+" "+ phone)
  }
  if (isLoading) return <Loader />;

  return id ? (
    <p >
      Success buy! ID: <strong>{id}</strong>
    </p>
  ) : (
    <form className="container"
      
      onSubmit={(e) => {
        const transaction = createTransaction();
        handleSubmit(e, transaction, (id) => {
          onSuccessBuy();
          clear();
          setId(id);
        });
      }}
    >
      <br/>
      <br/>
      <strong>LLENAR FORMULARIO PARA FINALIZAR SU COMPRA</strong>
      <br/>

      <p>NOMBRE:</p>
      <Input name="name" onChange={handleChange} />
      <br/>
      <br/>
      
      
      <p>TELEFONO</p>
      <Input name="phone" onChange={handleChange} />
      <br/>
      <br/>
      
     
      <p>MAIL</p>
      <Input type="email" name="email" onChange={handleChange} />
      
      <button onClick={enviar}>
        Enviar datos...
      </button>
      {Boolean(err) && err}
    </form>
  );
}
