interface Props {
  image?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  linkedIn?: string;
  email?: string
}

export default function Card({ image, firstName, lastName, role, linkedIn, email }: Props) {
  return (
    <div className="box-border overflow-hidden">
      <img 
          src={`./image/${image}`} 
          alt={`${firstName}'s picture.`}
          className="border border-black border-2 w-36 h-36 object-cover rounded-full float-start mr-6"
        />
      <div className="border border-black h-36 w-385 rounded-full">  
        <div>
          <h1 className="text-xl font-bold">{firstName}</h1>
          <h1 className="text-xl font-bold">{lastName}</h1>
          <h4 className="font-bold">{role}</h4>
          <div className="flex flex-row">
            <img 
              src="./image/gmail.png" 
              alt="gmail icon."
              className="w-6 mr-4"
            />
            <p>{email}</p>
          </div>
          <a href={linkedIn} target="_blank">
            <img 
              src="./image/linkedin.png" 
              alt="linkedin icon." 
              className="w-6"
            />
          </a>
          
        </div>
      </div>
    </div>
  )
}
