import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Rate, Tag } from "antd";
const { Meta } = Card;

const ProductCard = ({ data }) => {
  return (
    <div className="p-4">
      <Card
        hoverable
        className="w-full max-w-sm mx-auto" // Tailwind for responsive width
        cover={
          <img
            alt={data.title}
            src={data.image}
            className="h-64 w-full object-cover" // Tailwind for image styling
          />
        }
      >
        <div className="flex flex-col gap-2">
          {/* Category Tag */}
          <Tag color="blue" className="w-fit">
            {data.category}
          </Tag>

          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {data.title}
          </h2>

          {/* Price */}
          <p className="text-xl font-bold text-green-600">
            ${data.price.toFixed(2)}
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-3">
            {data.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Rate disabled allowHalf value={data.rating.rate} />
            <span className="text-gray-500 text-sm">
              ({data.rating.count} reviews)
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard

// const ProductCard = ({ data }) => {
//     console.log(data);
    
//   return (
//     <Card
//       style={{ width: 300 }}
//       cover={
//         <img
//           alt="example"
//           height={150}
//           className="h-[150px] object-contain"
//           src={data?.image}
//         />
//       }
//     >
        
//       <Meta
//         avatar={
//           <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
//         }
//         title={data?.title}
//         description={data?.description}
//       />
//     </Card>
//   );
// };

// export default ProductCard;
