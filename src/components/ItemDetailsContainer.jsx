import { useState, useEffect, useContext } from "react";
import { Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

import { Load } from "./Load";
import { ItemDetail } from './ItemDetail';

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "Items", id); 

    getDoc(refDoc)
      .then((snapshot) => {
        setItem({ id: snapshot.id, ...snapshot.data() });
      })
      .finally(() => setLoading(false))

  }, [id]);


return (
  <Container className="d-flex flex-wrap mt-3">
    {loading ? <Load /> : <ItemDetail item={item.id} />}
  </Container>
);
};
