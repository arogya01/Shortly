import {
  HeroHeadlineWrapper,
  HeroImg,
  HeroImgWrapper,
  HeroSvg
} from "./Herosection.elements";
import {peopleWorkingImg} from '../../../public/people.png';
import PeopleImg from '../../../public/people.svg';

export default function HeroSection() {
  return (
    <>
      <HeroHeadlineWrapper>
        <p className="para one">More Than</p> <p className="para two">Just</p>
        <p className="para three"> Shorter </p>
        <p className="para four"> Links </p>
      </HeroHeadlineWrapper>
      <HeroImgWrapper>
        <HeroSvg width="400" height="400"/>
      </HeroImgWrapper>
      
    </>
  );
}
