interface PresentationProjectContentsProps {
  content: string;
}
const PresentationProjectContents: React.FC<
  PresentationProjectContentsProps
> = ({ content }) => {
  return <img className="PresentationPage" src={content}></img>;
};

export default PresentationProjectContents;
