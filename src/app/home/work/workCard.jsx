import Image from "next/image";

const WorkCard = ({ image, title, link }) => {
  return (
    <div
      className=""
      style={{
        padding: "60px 40px",
        backgroundColor: "#13132F",
        borderRadius: "24px",
      }}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={240}
        className="object-cover w-full h-60"
      />
      {/* <div className="p-4 bg-white">
        <h3 className="text-lg font-bold">{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Project
          </a>
        )}
      </div> */}
    </div>
  );
};

export default WorkCard;
