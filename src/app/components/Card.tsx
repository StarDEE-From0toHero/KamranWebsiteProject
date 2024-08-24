interface Props {
  image?: string;
  altText?: string;
  name?: string;
  role?: string;
  description?: string;
}

export default function Card({ image, altText, name, role, description }: Props) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt={altText} />
        </figure>
        <div className="card-body">
          <h1 className="card-title">{name}</h1>
          <h4 className="card-role">{role}</h4>
          <p>{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </>
  );
}
