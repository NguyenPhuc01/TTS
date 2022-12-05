// import { Avatar, Card, Skeleton, Switch } from "antd";
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// const { Meta } = Card;
// const Loading = () => {
//   const [loading, setLoading] = useState(true);
//   const onChange = (checked) => {
//     setLoading(!checked);
//   };

//   const listProduct = useSelector((state) => state.Product.allProduct);

//   return (
//     <>
//       <Card
//         style={{
//           width: 240,
//           height: 350,
//           margin: "10px",
//         }}
//         actions={[]}
//         cover={
//           <img
//             alt="example"
//             src="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
//             style={{ paddingTop: 10 }}
//           />
//         }
//       >
//         <Skeleton loading={loading} active>
//           <Meta title="Card title" description="This is the description" />
//         </Skeleton>
//       </Card>
//     </>
//   );
// };

// export default Loading;
