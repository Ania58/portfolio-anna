import Project from '../components/Project'
import { useSEO } from '../hooks/useSEO'
import { useTranslation } from 'react-i18next'

export default function Projects() {
   const { t } = useTranslation()

  useSEO({
    title: `${t('sections.archive')} — Anna Heliasz`,
    description: t('archive.intro')
  })
  return <Project />
}
