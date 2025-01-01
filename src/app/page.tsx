import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Home() {
  const data = await client.fetch('* [_type == "product"] {_id, productName, productPrice,"imageUrl": productImage.asset -> url}');
  // console.log(data);
  return (
    <div className="container flex shadow-lg p-4">
      <h1>Sanity Data </h1>
      {data.map((product: any) => (
        <div key={product._id}>
          <Image className="max-h-46" src={product.imageUrl} width={200} height={400} alt={product.productName} />
          <h2>{product.productName}</h2>
          <p>{product.productPrice}</p>
        </div>
      ))}

    </div>
  );
}
