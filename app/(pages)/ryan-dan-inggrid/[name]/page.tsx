import Wrapper from '@/app/components/ryan-dan-inggrid/Wrapper'

export default async function Page({ params, }: { params: Promise<{ name: string }> }) {
  const { name } = await params
  
  return <Wrapper params={name} />
}