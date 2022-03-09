import {
  BrandIcon,
  FeaturesWrapper,
  FeaturesHeadlineWrapper,
  FeatureHeadline,
  FeatureCards,
  FeatureDescription,
  BrandIconWrapper,
  BlueLine,
  FeatureCardWrapper
} from "./Features.elements";

export default function Features() {
  return (
    <FeaturesWrapper>
      <FeaturesHeadlineWrapper>
        <FeatureHeadline>Advanced Statistics</FeatureHeadline>
        <p>
          Track how your links are performing across the web with our advanced
          statistical dashboard
        </p>
      </FeaturesHeadlineWrapper>
    
     <FeatureCardWrapper>
      <FeatureCards>
        <BrandIconWrapper>
        <BrandIcon />
        </BrandIconWrapper>
        <FeatureDescription>
          Boost your brand recognition with each click. Generic Links dont mean
          a thing. Branded Links help instil confidence in your content.
        </FeatureDescription>
      </FeatureCards>

      {/* <BlueLine/> */}
      <FeatureCards>
        <BrandIconWrapper>
        <BrandIcon />
        </BrandIconWrapper>
        <FeatureDescription>
          Boost your brand recognition with each click. Generic Links dont mean
          a thing. Branded Links help instil confidence in your content.
        </FeatureDescription>
      </FeatureCards>
      {/* <BlueLine/> */}
      <FeatureCards>
        <BrandIconWrapper>
        <BrandIcon />
        </BrandIconWrapper>
        <FeatureDescription>
          Boost your brand recognition with each click. Generic Links dont mean
          a thing. Branded Links help instil confidence in your content.
        </FeatureDescription>
      </FeatureCards>
    </FeatureCardWrapper>
    
    </FeaturesWrapper>
  );
}
