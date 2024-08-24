interface Props {
  image?: string;
  name?: string;
  role?: string;
  linkedIn?: string;
  email?: string
}

export default function Card({ image, name, role, linkedIn, email }: Props) {
  return (
    <div>
      <figure>
        <img 
          src={`./image/${image}`} 
          alt={`Picture of ${name}.`}
        />
      </figure>
      <div>
        <h1>{name}</h1>
        <h4>{role}</h4>
      </div>
      <div>
        <a href={linkedIn} target="_blank" title="linkedin icons">
          <img 
            className="max-w-6" 
            src="./image/linkedin.png" 
            alt={`${name}'s linkedIn.`}
          />
        </a>
      </div>
    </div>
  );
}
