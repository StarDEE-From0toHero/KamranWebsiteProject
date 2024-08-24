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
          alt={`${name}'s picture.`}
          className="max-w-30"
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{name}</h1>
        <h4 className="card-role">{role}</h4>
      </div>
      <div className="card-contact">
        <a href={linkedIn} target="_blank">
          <img 
            src="./image/linkedin.png" 
            alt="linkedin icon." 
            className="max-w-6"
          />
        </a>
        <div className="flex flex-row">
          <img 
            src="./image/gmail.png" 
            alt="gmail icon."
            className="max-w-6"
          />
          <p>{email}</p>
        </div>
      </div>
    </div>
  )
}
