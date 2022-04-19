/* Foundation Challenges */

/**
 * A function which takes an array of employee objects and
 * returns just an array of their quotes so we can later put
 * them on the website.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {string[]} A list of the employees quotes for the website
 */
 const employee = [
    {
      name: "Soude",
      quote: "carpe diem",
      yearsEmployed: 2,
      isManagement: false,
    },
    {
      name: "Daniela",
      quote: "carpe diem 2",
      yearsEmployed: "21",
      isManagement: "true",
    },
    {
      name: "Moni",
      quote: "carpe diem 3",
      yearsEmployed: "5",
      isManagement: "false",
    },
  ];
  //     const getEmployeeQuotes = (employeeArr) => {
  //     return employeeArr.map(employee => employee.quote)
  //   };
  
  //   const quotes = getEmployeeQuotes(employee)
  //   console.log(quotes)
  
  const getEmployeeQuotes = (employeeArr) => {
    return employeeArr.map((employee, iter) => {
      if (iter === 0) {
        console.log("keys", Object.keys(employee));
        console.log("values", Object.values(employee));
        console.log("entries", Object.entries(employee));
        console.log("how many key we have", Object.keys(employee).length);
      }
      return employee.quote;
    });
  };
  
  const quotes = getEmployeeQuotes(employee);
  console.log(quotes);
  
  const emptyObject = {
    notEmpty: true,
  };
  
  console.log(Object.keys(emptyObject).length === 0);
  
  /**
   * A function to find the most expensive item in the basket and returns it in order to offer this customer a discount
   * later on down the line.
   *
   * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
   * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number}} The most expensive item in the shopping basket
   */
  
  const myBasket = [
    {
      name: "tv",
      price: 300,
      hasFreeShipping: true,
      quantity: 1,
    },
  
    {
      name: "chair",
      price: 49,
      hasFreeShipping: true,
      quantity: 8,
    },
  
    {
      name: "sofa",
      price: 280,
      hasFreeShipping: true,
      quantity: 1,
    },
  ];
  let mostExpensiveItemIdx = -1;
  let maxPrice = 0;
  
  const findMostExpensiveItem = (shoppingBasketArr) => {
    shoppingBasketArr.forEach((item, index) => {
      if (item.price > maxPrice) {
        maxPrice = item.price;
        mostExpensiveItemIdx = index;
      }
      return shoppingBasketArr[mostExpensiveItemIdx];
    });
  
    // with reduce
  
    const initialValue = {
      name: "empty shopping bag",
      price: 0,
      hasFreeShipping: true,
      quantity: 1,
    };
  
    const mostExpItem = shoppingBasketArr.reduce((acc, item, arr) => {
      if (item.price > acc.price) return item;
      else return acc;
    }, initialValue);
  
    return shoppingBasketArr.sort((a, b) => b.price - a.price)[0];
  };
  
  const mostExpensive = findMostExpensiveItem(myBasket);
  console.log(mostExpensive);
  
  /**
   * A function which add a new key of totalPrice to each shopping basket item in the array where total cost is
   * the price * the quantity of items ordered i.e.
   * {
   *  name: "jeans",
   *  price: 30,
   *  hasFreeShipping: false,
   *  quantity: 2,
   *  totalPrice: 60
   * }
   * Then returns a new array of objects
   *
   * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
   * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} A new array where each object has had a total price added to it
   */
  
  const settotalPrice = (shoppingBasketArr) => {
      // with map
    const newArray = shoppingBasketArr.map((item) => {
      return {
        ...item,
        totalPrice: item.price * item.quantity,
      };
    });
    return newArray;
  };
  
  //with for each
  const newArray2 = [];
  shoppingBasketArr.forEach((item) => {
    const newItem = {
      ...item,
      totalPrice: item.price * item.quantity,
    };
    newArray2.push(newItem);
  });
  
  const basketWithTotalPrice = settotalPrice(myBasket)
  console.log(basketWithTotalPrice)
  
  // const object1 = {
  //     a: 'somestring',
  //     b: 42
  //   };
  
  //   for (const [key, value] of Object.entries(object1)) {
  //     console.log(`${key}: ${value}`);
  //   }
  
  // expected output:
  // "a: somestring"
  // "b: 42"
  