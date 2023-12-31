import Img from "./Img";
import P from "./P";
import Span from "./Span";
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
import CodeKeyword from "./CodeKeyword";
import UnorderedList from "./UnorderedList";
import A from "./A";
import Table from "./Table";
export default {
  p(content: string) {
    return <P content={content} />;
  },
  span(content: string) {
    return <Span content={content} />;
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
  keyword(content: string) {
    return <CodeKeyword content={content} />;
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
  img(src: string) {
    return <Img src={src} />;
  },
  images(imgsArr: string[]) {
    return <ImgsGroup imgsArr={imgsArr} />;
  },
  ul(items: string[]) {
    return <UnorderedList items={items} />;
  },
  a(src: string, text: string) {
    return <A src={src} text={text} />;
  },
  table(th: string[], content: any) {
    return <Table th={th} content={content} />;
  },
};
