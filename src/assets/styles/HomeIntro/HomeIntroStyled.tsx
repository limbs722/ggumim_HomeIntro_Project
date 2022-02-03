import styled from 'styled-components';

const Container = styled.div`
  width: 800px;
  box-sizing: border-box;
  padding: 40px 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 0;
`;

const Center = styled.div`
  margin: 0;
  padding: 0;

  .hide {
    display: none;
  }
`;

const VeiwContentImage = styled.div`
  /* display: inline-block; */
  cursor: pointer;
  position: relative;

  & > img {
    width: 800px;
  }
`;

const Tag = styled.div`
  width: 40px;
  height: 40px;
  display: none;
  position: absolute;
  cursor: pointer;

  & > img {
    width: 32px;
    height: 32px;
  }
`;

const Tooltip = styled.span<{ hide: boolean }>`
  z-index: 1000;
  display: ${props => (!props.hide ? 'none' : 'flex')};
  align-items: center;
  position: absolute;
  top: 28px;
  left: -20px;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: black;
`;

const TooltipImage = styled.div<{ url: string }>`
  background-image: url(${props => props.url});
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

const Desc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 2px;
  overflow: hidden;
  text-align: left;
`;

const FunitureName = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: initial;
`;

const FuniturePrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;

  & > * {
    line-height: 1.2em !important;
  }
`;

const ExpectedPriceLabel = styled.span`
  color: #898f94;
  font-size: 11px;
  line-height: 11px;
  font-weight: bold;
  margin-right: 4px;
`;

const PriceDiscount = styled.span`
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
`;

const MoveIconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
`;

const HomeIntroStyled = {
  Container,
  Center,
  VeiwContentImage,
  Tag,
  Tooltip,
  TooltipImage,
  Desc,
  FunitureName,
  FuniturePrice,
  PriceDiscount,
  ExpectedPriceLabel,
  MoveIconWrapper,
};

export default HomeIntroStyled;
