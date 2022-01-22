import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/static/images/feature/feature.png');
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: auto;
  position: relative;

  @media screen and (max-width: 1200px) {
    background-image: url('/static/images/feature/feature-mobile.png');
    background-size: cover;
  }
`;

export const Wrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 0 60px;

  @media screen and (max-width: 860px) {
    transform: translateY(70px);
  }
  @media screen and (max-width: 520px) {
    transform: translateY(25px);
  }
`;

export const Headline = styled.h2`
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.2665834426879883px;
  text-align: left;

  @media screen and (max-width: 860px) {
    font-size: 18px;
    line-height: 24px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-family: 'HelveticaNeue Medium';
  font-size: 130px;
  line-height: 136px;
  letter-spacing: 0.01em;
  text-align: left;
  width: 403px;
  color: #0D0D0D;

  @media screen and (max-width: 860px) {
    width: 100%;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
  }

  span {
    font-family: 'Neue-Helvetica';
  }
`;

export const Subtitle = styled.h3`
  font-size: 28px;
  font-family: 'Moderat-Light';
  margin-top: 15px;

  @media screen and (max-width: 860px) {
    margin-top: 15px;
    font-size: 20px;
    text-align: center;
  }
`;

export const Description = styled.h5`
  font-size: 20px;
  font-family: 'Moderat-Light';
  margin-top: 15px;
  width: 484px;
  letter-spacing: -0.266583px;
  line-height: 28px;

  @media screen and (max-width: 860px) {
    width: 95%;
    line-height: 24px;
    font-size: 16px;
    text-align: center;
    margin-top: 15px;
  }
  @media screen and (max-width: 520px) {
    line-height: 22px;
    font-size: 14px;
    width: 100%;
    padding: 0 1rem;
  }
`;

export const FeatureButton = styled.a`
  font-family: 'HelveticaNeue Medium';
  background-color: #E1FF65;
  width: 246px;
  height: 70px;
  color: #0D0D0D;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  border-radius: 6px;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.2px;
  gap: 15px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 860px) {
    font-size: 16px;
    width: 199px;
    height: 45px;
    margin: 15px auto;
  }
  @media screen and (max-width: 520px) {
    font-size: 14px;
    width: 159px;
    height: 35px;
  }

  svg {
    transform: translateY(3px);
    @media screen and (max-width: 520px) {
      transform: translateY(0px);
    }
  }
`;

export const FeaturePartners = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 55px;
  align-items: center;
  width: 50vw;
  @media screen and (max-width: 860px) {
    justify-content: center;
    margin-top: 10px;
    width: 95%;
  }

  img {
    object-fit: contain;
    @media screen and (max-width: 520px) {
      width: 35%;
    }
  }
`;
