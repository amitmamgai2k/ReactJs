import { Link } from 'react-router-dom';


function Pokemon({ name, image, id }) {
    return (
        <div className='hover:bg-gray-300 hover:drop-shadow-2xl  mt-[1.5rem] gap-10  flex-basis-[30%] h-[200px] w-[250px] flex flex-col items-center'  >
            <Link to={`/pokemon/${id}`}>
                <div className='uppercase font-medium tracking-widest  text-black font-mono text-2xl  '>{name}</div>
                <div>
                    <img className='pokemon-image h-[150px] font-bold h-max-[80%] mt-[1.5rem]' src={image} />
                </div>
            </Link>
        </div>
    )
}

export default Pokemon;