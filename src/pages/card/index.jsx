import { View, Text, Input, Button, Image } from "@tarojs/components";
import "./index.scss";
import { useState } from "react";

export default function Card() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [showCard, setShowCard] = useState(false);

  const handleGenerateCard = () => {
    console.log(name, position, company, phone, email); // 调试数据
    setShowCard(true);
  };

  const handleClear = () => {
    setName("");
    setPosition("");
    setCompany("");
    setPhone("");
    setEmail("");
    setShowCard(false);
    console.log("数据已清空"); // 清空时的调试信息
  };

  return (
    <View>
      <Text>姓名：</Text>
      <Input
        value={name}
        onInput={(e) => setName(e.detail.value)}
        placeholder="请输入姓名"
      />
      <Text>职位：</Text>
      <Input
        value={position}
        onInput={(e) => setPosition(e.detail.value)} // 改为 onInput
        placeholder="请输入职位"
      />
      <Text>公司：</Text>
      <Input
        value={company}
        onInput={(e) => setCompany(e.detail.value)} // 改为 onInput
        placeholder="请输入公司"
      />
      <Text>电话：</Text>
      <Input
        value={phone}
        onInput={(e) => setPhone(e.detail.value)} // 改为 onInput
        placeholder="请输入电话"
      />
      <Text>邮箱：</Text>
      <Input
        value={email}
        onInput={(e) => setEmail(e.detail.value)} // 改为 onInput
        placeholder="请输入邮箱"
      />
      <View className="button-group">
        <Button type="primary" onTap={handleGenerateCard}>
          生成名片
        </Button>
        <Button onTap={handleClear}>清空</Button>
      </View>
      {showCard && (
        <View className="card">
          <Image
            className="avatar"
            src="https://my-bucket-wyj.oss-cn-shanghai.aliyuncs.com/images/%E7%86%8A%E4%BA%8C.png"
            mode="aspectFill"
          />
          <View className="info">
            <Text className="name">{name}</Text>
            <Text className="position">{position}</Text>
            <Text className="company">{company}</Text>
            <Text className="contact">{phone}</Text>
            <Text className="contact">{email}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
