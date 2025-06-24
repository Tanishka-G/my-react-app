import './Card.css'

type CardProps = {
  img: string;
  desc: string;
  langs: string[];
};

const Card: React.FC<CardProps>  = ({ img, desc, langs }) => {
    let langList = langs.join(', ');
    return(
        <>
        <div className="flex flex-col text-2xl card londrina-solid-light">
            <img src={img} alt="Project Image" />
            <p className="p-5">About: {desc}</p>
            <p className="p-5">Tools: {langList}</p>
        </div>
       </>
    );
};

export default Card;