import MovieApi from '../../../../lib/client/MovieApi'
import { TSection, TSections } from '../../../../types'

export default async function getSection(
    sectionId: string
): Promise<TSection[]> {
    const sections = await MovieApi.getSections()

    const result = sections.find(
        (section) => section.id === sectionId
    ) as TSections

    return result.data
}
