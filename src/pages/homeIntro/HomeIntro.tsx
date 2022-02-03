import { useFetch } from 'hooks';
import { useState, useEffect } from 'react';
import HomeIntroStyled from 'assets/styles/HomeIntro/HomeIntroStyled';

const {
  Container,
  Center,
  VeiwContentImage,
  Tag,
  Tooltip,
  TooltipImage,
  Desc,
  FunitureName,
  FuniturePrice,
  ExpectedPriceLabel,
  MoveIconWrapper,
  PriceDiscount,
} = HomeIntroStyled;

const apiParams = {
  url: process.env.REACT_APP_API_URL,
  method: 'GET',
};

interface productInfoProps {
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

const closeButtonUrl =
  'https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png';
const tagButtonUrl =
  'https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png';
const productUrl =
  'https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png';

export default function HomeIntro() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [productList, setProductList] = useState<Array<productInfoProps>>([]);
  const { response } = useFetch(apiParams);

  useEffect(() => {
    if (!response) return;

    setImageUrl(response.imageUrl);

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
  }, []);

  //	가구 정보가 있는 곳에 돋보기 버튼 표시 (받아 온 좌표로 체크)
  //	돋보기 클릭 시 상품정보 tooltip 출력되고 버튼이 닫기 버튼으로 변경
  //	화면이 메인이미지, 하단에 상품 목록으로 표시
  //	여기서 클릭 이벤트들 다 표시

  function getMarkers() {
    return productList.map((item: productInfoProps, idx: number) => {
      const style: object = {
        top: `${item.pointX * 1.6}px`,
        left: `${item.pointY * 1.6}px`,
        display: 'block',
      };
      return (
        <Tag
          key={idx}
          onClick={() => onClick('tagBtn', item.productId)}
          style={style}
        >
          <img
            src={tagButtonUrl}
            className={`tag-icon ${item.isTooltip ? 'hide' : ''}`}
          />
          <img
            src={closeButtonUrl}
            className={`close-icon ${!item.isTooltip ? 'hide' : ''}`}
          />
          <Tooltip
            hide={item.isTooltip}
            className={`tooltip ${!item.isTooltip ? 'hide' : ''}`}
          >
            <TooltipImage url={item.imageUrl} />
            <Desc>
              <FunitureName>{item.productName}</FunitureName>
              <FuniturePrice>
                <ExpectedPriceLabel>예상가</ExpectedPriceLabel>
                <PriceDiscount>{item.priceDiscount}</PriceDiscount>
              </FuniturePrice>
            </Desc>
            <MoveIconWrapper>
              <img src={productUrl} />
            </MoveIconWrapper>
          </Tooltip>
        </Tag>
      );
    });
  }

  function onClick(type: string, id: string) {
    switch (type) {
      case 'tagBtn':
        const newList = productList.reduce(
          (acc: Array<productInfoProps>, value: productInfoProps) => {
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
      <Center>
        <VeiwContentImage>
          <img src={imageUrl} />
          {getMarkers()}
        </VeiwContentImage>
      </Center>
      <div>{/* 하단 상품 리스트 */}</div>
    </Container>
  );
}
