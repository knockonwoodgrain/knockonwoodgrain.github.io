interface ZineProjectContentsProps {
  content: string;
}
const ZineProjectContents: React.FC<ZineProjectContentsProps> = ({
  content,
}) => {
  return <img className="ZinePage" src={content}></img>;
};

export default ZineProjectContents;
