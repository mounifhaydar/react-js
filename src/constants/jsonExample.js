export const JSON_EXAMPLE_LEFT = {
    UserName: "Jhon",
    Orders: [
        {
            OrderId: 1,
            Amount: 100.03,
        },
        {
            OrderId: 2,
            Amount: 130.03,
        }
    ],
    created_at: "2007-10-20T05:24:19Z",
    location: "San Francisco",
  };

  export const JSON_EXAMPLE_RIGHT = {
    UserName: "Jhon",
    Orders: [
        {
            OrderId: 1,
            Amount: 100.00,
        },
        {
            OrderId: 2,
            Amount: 150.01,
        }
    ],
    created_at: "2007-10-20T05:30:19Z"
  };