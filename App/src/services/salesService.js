import {firestore} from "../Components/Firebase/index";

const salesService = {
  create: (transaction) =>
    firestore
      .collection("/transactions")
      .add(transaction)
      .then(({id}) => id),
};

export default salesService;
