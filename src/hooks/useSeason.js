import { useEffect, useState } from 'react'

import moment from 'moment'

import { getSeason } from 'services/season'

import { APP_MEDIA_URL } from 'common/constant'

const seasonFetched = {
  banner: [],
  seasons: [],
}

const useSeason = () => {
  const [loading, setLoading] = useState(true)
  const [banners, setBanners] = useState(seasonFetched.banner)
  const [seasons, setSeasons] = useState(seasonFetched.seasons)

  const handleGetSeason = async () => {
    const response = await getSeason()
    seasonFetched.banner = response.banner?.season_images || []
    setBanners(seasonFetched.banner)

    let imageSeasons = response.seasons || []
    imageSeasons = imageSeasons
      .sort((a, b) => {
        if (a.startDate === b.startDate) {
          return moment(a.created_at).isBefore(b.created_at) ? -1 : 1
        }
        return moment(a.startDate).isBefore(b.startDate) ? -1 : 1
      })
      .map(({ id, link, season_images: images, description }) => {
        return {
          id,
          link,
          image_url: APP_MEDIA_URL + images[0]?.image_url,
          description,
        }
      })
    seasonFetched.seasons = imageSeasons
    setSeasons(imageSeasons)
    setLoading(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [loading])

  useEffect(() => {
    handleGetSeason()
  }, [])

  return { loading, banners, seasons }
}

export default useSeason
