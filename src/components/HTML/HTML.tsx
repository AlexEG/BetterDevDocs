import Img from "./Img";
import P from "./P";
import H2 from "./H2";
import H3 from "./H3";
import Title from "./Title";
import CodeBlock from "./CodeBlock";
import Hr from "./Hr";
import Note from "./Note";
import MultiLineNote from "./MultiLineNote";
import Warning from "./Warning";
import MultiLineWarning from "./MultiLineWarning";
import ImgsGroup from "./ImgsGroup";

export default {
  img(src: string) {
    return <Img src={src} />;
  },
  p(content: string) {
    return <P content={content} />;
  },
  h1(content: string) {
    return <Title content={content} />;
  },
  h2(content: string) {
    return <H2 content={content} />;
  },
  h3(content: string) {
    return <H3 content={content} />;
  },
  code(language: string, content: string, filePath?: string) {
    return (
      <CodeBlock language={language} content={content} filePath={filePath} />
    );
  },
  note(content: string) {
    return <Note content={content} />;
  },
  mlnote(content: string[]) {
    return <MultiLineNote content={content} />;
  },
  warning(content: string) {
    return <Warning content={content} />;
  },
  mlwarning(content: string[]) {
    return <MultiLineWarning content={content} />;
  },
  hr() {
    return <Hr />;
  },
  images(imgsArr: string[]) {
    return <ImgsGroup imgsArr={imgsArr} />;
  },
};
