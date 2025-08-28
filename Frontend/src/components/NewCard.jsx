import React from "react";

function NewCard() {
    console.log("rendering NewCard");
  const data1 = [
    {
      name: "amazon basics",
      descrption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse similique veniam.",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.GxJqRcbcz4wCh6bSK2IQfwHaHa?pid=Api&P=0&h=180",
    },
  ];

  return (
    <div className="card h-52 w-32 px-3 py-2 bg-zinc-400  justify-center">
          <div className="w-full h-full bg-zinc-600">
              {/* <img src=={ }" alt="" /> */}
      </div>
    </div>
  );
}

export default NewCard;
