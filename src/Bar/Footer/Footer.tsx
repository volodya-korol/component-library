import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const S = {
  Bar: styled.div`
    width: 100%;
    height: 50px;
    position: fixed;
    box-shadow: 0px -1px 0px #e5e9f2;
    bottom: 0;
    left: 0;
  `,
  BarContainer: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
  WraperSlot: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'SF Pro Text';
    font-size: 10px;
    line-height: 12px;
  `,
};

const Slot: React.FC<{}> = () => null;

const Footer = ({
  children,
  ...props
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const childrenArray = (children as unknown) as React.ReactElement[];
  return (
    <S.Bar {...props}>
      <S.BarContainer>
        {childrenArray.map((m, i) => (
          <S.WraperSlot key={i}>{m?.props?.children}</S.WraperSlot>
        ))}
      </S.BarContainer>
    </S.Bar>
  );
};

Footer.Slot = Slot;

export default Footer;
