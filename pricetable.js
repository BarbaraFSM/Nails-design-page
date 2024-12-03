import React from "react";

const PriceTable = () => {
  const services = [
    { name: "Aplicação de qualquer extensor", price: "R$ 165" },
    { name: "Manutenção de 15 a 21 dias", price: "R$ 120" },
    { name: "Manutenção de 21 a 30 dias", price: "R$ 130" },
    { name: "Manutenção após 30 dias", price: "R$ 140" },
    { name: "Arte livre e francesa definitiva", price: "A partir de R$ 20" },
    { name: "Arte encapsulada (total)", price: "R$ 30" },
    { name: "Banho de gel", price: "R$ 120" },
    { name: "Spa dos pés", price: "R$ 45" },
  ];

  return (
    <section className="price-table">
      <h2>Tabela de Valores</h2>
      <table>
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default PriceTable;
