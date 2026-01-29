
export const GifItem = ({ url, title }: any) => {


  return (
    <div className="card">
      <img src={url} alt={title} />
    </div>
  );
};
