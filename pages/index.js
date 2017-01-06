import React from 'react';
import styled from 'styled-components';
import MainLayout from '../layouts//MainLayout';
import Header from '../components/Header';
import Title from '../components/Title';
import TimeLineItem from '../components/TimeLineItem';

const TitleContainer = styled.div`
  margin: 20px 5% 40px 5%;
`;

const Content = styled.div`
  height: 150%;
  padding: 0% 5% 2% 5%;
  font-size: 1em;
  color: #8B8B8B;
`;

const TimeLine = styled.div`
  width: 100%;
`;

const timeLineItems = [
  {
    title: 'Recording your Purchase Order',
    content: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
    color: '#f1c049',
    icon: 'pencil',
  },
  {
    title: 'Planning',
    content: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
    color: '#E76F51',
    icon: 'calendar',
  },
  {
    title: 'Confirmation',
    content: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
    color: '#e91e63',
    icon: 'handshake-o',
  },
  {
    title: 'Production',
    content: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
    color: '#03a9f4',
    icon: 'gear',
  },
  {
    title: 'Quality Control',
    content: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
    color: '#4caf50',
    icon: 'eye',
  },
  {
    title: 'Delivery or Pick Up',
    content: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
    color: '#2A3E86',
    icon: 'truck',
  },
];

const Section = styled.div`
  padding-top: 20px;
`;

export default () => (
  <div>
    <MainLayout>
      <Header title="Home" />
      <Section>
        <TitleContainer>
          <Title>What do we Do?</Title>
        </TitleContainer>
        <Content>
          <p>Since 1967, Europlex has been the leader in the plastic world. 
          Over the years we have vastly gained in experience and skills over different branches in the world of plastic such as, industry, the medical world, construction, publicity, etc…
          </p>
          <p>
          Our main activity is processing plastic material, all types and sizes (sheets, tubes, block material). In particular: PMMA (PLEXIGLAS), PC (MAKROLON-LEXAN), PETG (VERALITE-VIVAK), PEHD, POM, PA, PS, ...
          </p>
          <p>Our biggest strength is the ability to move from design to prototype and to small or large production batches. If necessary, we are also able to assist you with the design.
          </p>
          <p>
          Our production facilities have up to date tools, machinery and skilled people. We are able to meet up with the customers’ demands with an emphasis on quality.
          </p>
        </Content>
      </Section>
      <Section>
        <TitleContainer>
          <Title>Our Approach:</Title>
        </TitleContainer>
        <Content>
          <TimeLine>
            {timeLineItems.map((timeLineItemProps, index) => <TimeLineItem key={`${index}-timeline`} {...timeLineItemProps} />)}
          </TimeLine>
        </Content>
      </Section>
    </MainLayout>
  </div>
);
