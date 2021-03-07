import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '2',
          name: 'Bragança Paulista',
          slug: 'braganca paulista',
          location: {
            latitude: -100,
            longitude: -50
          }
        }
      ]}
    />
  )
}
