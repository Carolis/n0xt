import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Cool Recipes Around the World"
        description="A project to show the most cool recipes around the world"
        canonical="https://cool-recipes.caroliscaroles.com"
        openGraph={{
          url: 'https://cool-recipes.caroliscaroles.com',
          title: 'Cool Recipes',
          description:
            'A project to show the most cool recipes around the world',
          images: [
            {
              url: 'https://cool-recipes.caroliscaroles.com/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Cool Recipes'
            }
          ],
          site_name: 'Cool Recipes'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
