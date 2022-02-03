import HomeIntroStyled from 'assets/styles/HomeIntro/HomeIntroStyled';
import { IProductInfoProps } from '../HomeIntro';

const {
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

interface IProps {
  imgUrl: string;
  productList: Array<IProductInfoProps>;
  onClick: (type: string, id: string) => void;
}

const closeButtonUrl =
  'https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png';
const tagButtonUrl =
  'https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png';
const productUrl =
  'https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png';

export default function ProductInfo({ imgUrl, productList, onClick }: IProps) {
  function getMarkers() {
    return productList.map((item: IProductInfoProps, idx: number) => {
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

  return (
    <Center>
      <VeiwContentImage>
        <img src={imgUrl} />
        {getMarkers()}
      </VeiwContentImage>
    </Center>
  );
}
