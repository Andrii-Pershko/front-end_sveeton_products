import { Table, Th, Tr } from 'components/Basket/BasketList/BasketList.styled';

const Order = () => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>№</Th>
          <Th>Ініціали</Th>
          <Th>Номер</Th>
          <Th>Адреса</Th>
          <Th>Товар</Th>
        </Tr>
      </thead>
      <tbody></tbody>
    </Table>
  );
};

export default Order;
