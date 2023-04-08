import { Quoteblock } from "./Quoteblock";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { dummyData } from "./dummyData";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Example/Quoteblock",
  decorators: [withKnobs],
  component: Quoteblock,
};

export const BrandA = () => (
  <Quoteblock
  variant="brandA"
    title={text("title", dummyData.title)}
    subTitle={text("Sub Title", dummyData.subTitle)}
    description = {text("Description", dummyData.description)}
    compBackground={text("comp Background", dummyData.compBackground.bgColor)}
    textboxBackground ={text("Text Background", dummyData.textboxBackground.bgColor)}
    hideUnderline={boolean("hideUnderline", false)}
    ctaLinks={dummyData.ctaLinks}
  ></Quoteblock>
);

export const BrandB = () => (
  <Quoteblock
    variant="brandB"
    title={text("title", dummyData.title)}
    subTitle={text("Sub Title", dummyData.subTitle)}
    description = {text("Description", dummyData.description)}
    compBackground={text("comp Background", dummyData.compBackground.bgColor)}
    textboxBackground ={text("Text Background", dummyData.textboxBackground.bgColor)}
    hideUnderline={boolean("hideUnderline", false)}
    ctaLinks={dummyData.ctaLinks}
  ></Quoteblock>
);
