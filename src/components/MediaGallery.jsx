import React from 'react'

const MediaGallery = () => {

    const media_gallery = [
        {
            title: 'Shahzad Roy talking to GEO News on Education',
            video: 'Lyue33jnfkg',
            videoTitle: 'Chal Para (Shehzad Roy) - Episode 3'
        },
        {
            title: 'Banning Corporal Punishment',
            video: 'Lyue33jnfkg',
            videoTitle: 'Chal Para (Shehzad Roy) - Episode 3'
        },
        {
            title: 'Press Conference on Child Abuse Prevention',
            video: '1CpNeiwC81E',
            videoTitle: '#ProtectOurChildren - Full Press Conference (Zindagi Trust)'
        }
    ]

  return (
    <div className='px-4 lg:px-[45px] pt-[30px] text-center lg:w-[80%] m-auto'>
        <h2 className='text-[#FF6400] text-2xl font-bold mb-10'>MEDIA GALLERY</h2>

        <div className='flex flex-wrap justify-evenly mb-10'>
            {media_gallery.map((media, index) => {
                return (
                    <div key={index}>
                        <span>{media.title}</span>
                        <iframe width="100%" height="230" src={`https://www.youtube.com/embed/${media.video}`} title={media.videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MediaGallery