import Wrapper from '@/app/components/ryan-dan-catarina/Wrapper'

export default async function Page({ params, }: { params: Promise<{ name: string }> }) {
  const { name } = await params
  
  return <Wrapper params={name} />
}