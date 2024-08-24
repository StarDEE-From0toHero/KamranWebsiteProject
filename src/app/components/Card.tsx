interface Props {
  image?: string;
  altText?: string;
  name?: string;
  description?: string;
}

export default function Card({ image, altText, name, description }: Props) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt={altText} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </>
  );
}
