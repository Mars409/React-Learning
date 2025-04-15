import React from "react";
import { View, Image } from "@tarojs/components";

const NameCard = ({ cardInfo }) => {
  return (
    <View>
      <View>
        <Image
          src="https://my-bucket-wyj.oss-cn-shanghai.aliyuncs.com/images/%E7%86%8A%E4%BA%8C.png"
          style={{ width: "100px", height: "100px", borderRadius: "100px" }}
        />
      </View>

      <View>
        <View>{cardInfo.name}</View>
        <View>{cardInfo.phone}</View>
      </View>
    </View>
  );
};

export default NameCard;
