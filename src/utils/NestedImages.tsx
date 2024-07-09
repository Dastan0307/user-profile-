import Image from 'next/image'
import avatar1 from '../../public/Avatar3.png'
import avatar2 from '../../public/Avatar4.png'
import avatar3 from '../../public/Avatar1.png'
import avatar4 from '../../public/Avatar5.png'
import avatar5 from '../../public/Avatar6.png'
import avatar6 from '../../public/Avatar7.png'
import avatar7 from '../../public/Avatar8.png'

const NestedImages = () => {
	const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7]

	return (
		<div className="flex -space-x-4">
      {avatars.map((src, index) => (
        <div
          key={index}
          className="w-12 h-12 rounded-full overflow-hidden border-2 border-white relative"
        >
          <Image
            src={src}
            alt={`Avatar ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
	)
}

export default NestedImages
