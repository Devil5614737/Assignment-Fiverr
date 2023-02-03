import styled from "styled-components";

export const CardBox = styled.div`
  width: 100%;
  height: fit-content;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 177px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const CardBody = styled.div`
  padding: 10px 0;
`;
export const CardTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;
export const CardType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  margin-top: 3px;
  p:nth-of-type(2) {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    text-align: right;
    text-transform: capitalize;
  }
`;
export const CardFooter = styled.div`
  margin-top: 14px;
`;
export const CardFooterPricing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: rgba(44, 165, 81, 1);
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;
  }
`;
export const CardLocation = styled.p`
  color: #485562;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
  margin-top: 5px;
`;
export const HeartIcon = styled.div`
  cursor: pointer;
`;
