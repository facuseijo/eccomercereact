import Container from "react-bootstrap/Container";

import {Item} from "./Item";

export const ItemList= ({items}) => {
   return (
    <Container>
        {items.map((item) => (
            <Item item= {Item} />
        ))}
    </Container>
   );
};



