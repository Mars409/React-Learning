import React from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.css';
import Header from './Header';
import Footer from './Footer';
import { Carousel } from 'antd';
import CustomCard from './CustomCard';

const Main = () => {
  return (
    <>
      <Header />
      <Carousel autoplay>
        <div>
          <img alt="example1" src="path/to/image1.jpg" />
        <CustomCard title="标题1" description="描述1" cover="path/to/image1.jpg" avatar="path/to/avatar1.jpg" />
        </div>
        <div>
          <img alt="example2" src="path/to/image2.jpg" />
          <CustomCard title="标题2" description="描述2" cover="path/to/image2.jpg" avatar="path/to/avatar2.jpg" />
        </div>
        <div>
          <img alt="example3" src="path/to/image3.jpg" />
          <CustomCard title="标题3" description="描述3" cover="path/to/image3.jpg" avatar="path/to/avatar3.jpg" />
        </div>
      </Carousel>
      <Footer />
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<Main />);