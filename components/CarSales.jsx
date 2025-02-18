import React from "react";

class CarSales extends React.Component {
  render() {
    const carSales = [
      {
        id: 1,
        brand: "法拉利",
        model: "SF90 Spider",
        price: "900万元",
        sold: 5,
        year: 2024,
      },
      {
        id: 2,
        brand: "兰博基尼",
        model: "Aventador",
        price: "700万元",
        sold: 3,
        year: 2020,
      },
      {
        id: 3,
        brand: "迈凯伦",
        model: "720S",
        price: "280万元",
        sold: 4,
        year: 2018,
      },
    ];

    return (
      <div>
        <h2>豪车销售情况</h2>
        <div className="car-item">
          {carSales.map((car) => {
            const style = {
              backgroundColor: car.sold > 5 ? "#e6ffe6" : "#ffe6e6",
            };
            return (
              <div className="car-item" key={car.id} style={style}>
                <h3>品牌：{car.brand}</h3>
                <h4>型号：{car.model}</h4>
                <h4>价格：{car.price}</h4>
                <h4>年份：{car.year}</h4>
                <h4>销售数量：{car.sold}辆</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CarSales;