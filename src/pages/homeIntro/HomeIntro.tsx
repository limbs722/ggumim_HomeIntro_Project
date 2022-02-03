import { useFetch } from 'hooks';
import { useState, useEffect } from 'react';
import { ProductInfo } from '../.';
import HomeIntroStyled from 'assets/styles/HomeIntro/HomeIntroStyled';

const { Container, Center, VeiwContentImage } = HomeIntroStyled;

const apiParams = {
  url: process.env.REACT_APP_API_URL,
  method: 'GET',
};

export interface IProductInfoProps {
  productId: string;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: string;
  imageUrl: string;
  isTooltip: boolean;
}

export default function HomeIntro() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [productList, setProductList] = useState<Array<IProductInfoProps>>([]);
  const { response } = useFetch(apiParams);

  useEffect(() => {
    if (!response) return;

    const newList = response.productList.reduce((acc, value) => {
      acc.push({
        productId: value.productId,
        productName: value.productName,
        outside: value.outside,
        pointX: value.pointX,
        pointY: value.pointY,
        priceOriginal: value.priceOriginal,
        priceDiscount: value.priceDiscount,
        discountRate: value.discountRate,
        imageUrl: value.imageUrl,
        isTooltip: false,
      });
      return acc;
    }, []);

    setProductList(newList);
    setImageUrl(response.imageUrl);
  }, []);

  function onClick(type: string, id: string) {
    switch (type) {
      case 'tagBtn':
        const newList = productList.reduce(
          (acc: Array<IProductInfoProps>, value: IProductInfoProps) => {
            if (value.productId === id) {
              acc.push({
                productId: value.productId,
                productName: value.productName,
                outside: value.outside,
                pointX: value.pointX,
                pointY: value.pointY,
                priceOriginal: value.priceOriginal,
                priceDiscount: value.priceDiscount,
                discountRate: value.discountRate,
                imageUrl: value.imageUrl,
                isTooltip: !value.isTooltip,
              });
            } else {
              acc.push({
                ...value,
                isTooltip: false,
              });
            }
            return acc;
          },
          []
        );
        setProductList(newList);
        break;
      default:
        break;
    }
  }

  return (
    <Container>
      <ProductInfo
        imgUrl={imageUrl}
        productList={productList}
        onClick={onClick}
      />
      <div>{/* 하단 상품 리스트 */}</div>
    </Container>
  );
}
