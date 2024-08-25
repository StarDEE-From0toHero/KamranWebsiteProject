interface Props {
  image?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  linkedIn?: string;
}

export default function Card({
  image,
  firstName,
  lastName,
  role,
  linkedIn,
}: Props) {
  return (
    <div className="box-border overflow-hidden drop-shadow-lg text-[#28335B]">
      <img
        src={`./image/${image}`}
        alt={`${firstName}'s picture.`}
        className=" border-black border-2 w-36 h-36 object-cover rounded-full float-start mr-6"
      />
      <div className="border border-black h-36 w-385 rounded-full py-2.5">
        <div>
          <h1 className="text-xl font-bold">{firstName}</h1>
          <h1 className="text-xl font-bold">{lastName}</h1>
          <h4 className="font-bold">{role}</h4>
        </div>
        <a href={linkedIn} target="_blank">
          <img
            src="./image/linkedin.webp"
            alt="linkedin icon."
            className="w-6 mt-3.5"
          />
        </a>
      </div>
    </div>
  );
}
