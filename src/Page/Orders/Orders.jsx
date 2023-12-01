const Orders = () => {
  return (
    <>
      <h1>Orders Page</h1>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Ініціали</th>
            <th>Адреса</th>
            <th>Телефон</th>
            <th>Замовлення</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>І.П.</td>
            <td>Адреса клієнта 1</td>
            <td>Телефон клієнта 1</td>
            <td>Замовлення клієнта 1</td>
            <td>Статус клієнта 1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>І.П.</td>
            <td>Адреса клієнта 2</td>
            <td>Телефон клієнта 2</td>
            <td>Замовлення клієнта 2</td>
            <td>Статус клієнта 2</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Orders;
